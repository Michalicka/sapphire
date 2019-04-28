module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "jest": true
  },
  "extends": [
    "standard",
    "plugin:react/recommended"
  ],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "space-before-function-paren": ["error", "never"],
    "generator-star-spacing": ["error", { "before": false, "after": true }]
  }
};