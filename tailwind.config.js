module.exports = {
  purge: {
    enabled: true,
    content: ["./**/*.html", "./**/*.js"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        navy: "#030d2e",
      },
      height: {
        "50-screen": "50vh",
        "60-screen": "60vh",
        "70-screen": "70vh",
        "80-screen": "80vh",
      },
      zIndex: {
        "-1": "-1",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
