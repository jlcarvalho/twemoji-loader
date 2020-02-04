module.exports = {
  root: true,
  extends: ['@webpack-contrib/eslint-config-webpack'],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error"
  }
};