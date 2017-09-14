module.exports = {
  "extends": [
    "eslint-config-airbnb",
    "prettier",
    "prettier/flowtype",
    "prettier/react",
  ],
  "plugins": [
    "flowtype",
    "react",
    "prettier"
  ],
  "parserOptions": {
    "ecmaVersion": 2017,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "env": {
    "es6": true,
    "node": true
  },
  "rules": {
    "prettier/prettier": ["error", {"singleQuote": true, "trailingComma": "es5"}]
  }
};
