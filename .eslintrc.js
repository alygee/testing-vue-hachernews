module.exports = {
    "root": true,
    "env": {
    "node": true,
      "jest": true
  },
    "extends": [
    "plugin:vue/essential",
    "eslint:recommended"
  ],
    "rules": {
    "prefer-promise-reject-errors": 0,
      "no-new": 0
  },
    "parserOptions": {
    "parser": "babel-eslint"
  }
};
