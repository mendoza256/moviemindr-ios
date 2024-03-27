module.exports = {
  name: "moviemindr",
  version: "0.0.1",
  extra: {
    clerkPublishableKey: process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
    baseUrl: "localhost:3001/movies/",
  },
};
