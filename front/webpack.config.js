module.exports = {
  entry: ["./scripts/index.js", "./scripts/newCard.js"],
  output: {
    path: __dirname + "/public",
    filename: "bundle.js",
  },
};
