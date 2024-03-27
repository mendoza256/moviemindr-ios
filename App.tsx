import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ClerkProvider } from "@clerk/clerk-expo";
import Constants from "expo-constants";
import * as SecureStore from "expo-secure-store";
import * as Location from "expo-location";
import { useAuth } from "@clerk/clerk-expo";
import { useEffect, useState } from "react";

const tokenCache = {
  async getToken(key: string) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key: string, value: string) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};

const getMoviesFromApi = async (page: number) => {
  const url = Constants.expoConfig.extra.baseUrl + parseInt(page);
  console.log(url);
  return fetch(url)
    .then((response) => response.json())
    .then((json) => {
      return json.movies;
    })
    .catch((error) => {
      console.error(error);
    });
};

const SignOut = () => {
  const { isLoaded, signOut } = useAuth();
  if (!isLoaded) {
    return null;
  }
  return (
    <View>
      <Button
        title="Sign Out"
        onPress={() => {
          signOut();
        }}
      />
    </View>
  );
};

export default function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  const getMovies = async (page: number) => {
    try {
      const url = Constants.expoConfig.extra.baseUrl + parseInt(page);
      console.log("url", url);
      const response = await fetch(url);
      const json = await response.json();
      setMovies(json.movies);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies(page);
  }, []);

  console.log("movies", movies);

  return (
    <ClerkProvider
      publishableKey={Constants.expoConfig.extra.clerkPublishableKey}
      tokenCache={tokenCache}
    >
      <SafeAreaProvider>
        <View style={styles.container}>
          <Button onPress={() => getMoviesFromApi(2)} title="call api"></Button>
          <Text>Open up App.js to start working on your app!!!!</Text>
          {/* <Text>{movies ? movies.length : "Loading"}</Text> */}
          <StatusBar style="auto" />
        </View>
      </SafeAreaProvider>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
