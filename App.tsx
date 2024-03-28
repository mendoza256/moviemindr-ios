import { StatusBar } from "expo-status-bar";
import { Text } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ClerkProvider } from "@clerk/clerk-expo";
import Constants from "expo-constants";
import * as SecureStore from "expo-secure-store";
import * as Location from "expo-location";
import { useAuth } from "@clerk/clerk-expo";
import React, { useEffect, useState } from "react";
import "@tamagui/core/reset.css";
import { TamaguiProvider, View, createTamagui } from "@tamagui/core";
import { Button, ScrollView } from "tamagui";
import { config } from "@tamagui/config/v3";
import { Menu } from "./components/Menu/Menu";
import { MovieList } from "./components/MovieList/MovieList";

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

// you usually export this from a tamagui.config.ts file
const tamaguiConfig = createTamagui(config);

// make TypeScript type everything based on your config
type Conf = typeof tamaguiConfig;
declare module "@tamagui/core" {
  interface TamaguiCustomConfig extends Conf {}
}

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
    getMovies(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ClerkProvider
      publishableKey={Constants.expoConfig.extra.clerkPublishableKey}
      tokenCache={tokenCache}
    >
      <TamaguiProvider config={tamaguiConfig}>
        <SafeAreaProvider>
          <ScrollView>
            <Button onPress={() => getMovies(1)}>Call API</Button>
            <SignOut />
            <Text>{movies ? movies.length : "Loading"}</Text>
            <MovieList movies={movies} />
            <Menu />
            <StatusBar style="auto" />
          </ScrollView>
        </SafeAreaProvider>
      </TamaguiProvider>
    </ClerkProvider>
  );
}
