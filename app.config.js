module.exports = {
  name: "moviemindr",
  version: "0.0.1",
  extra: {
    clerkPublishableKey: process.env.CLERK_PUBLISHABLE_KEY,
    movieDb: {
      url: "https://api.themoviedb.org/3",
    },
  },
};
