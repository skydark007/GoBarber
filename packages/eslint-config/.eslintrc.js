module.exports = {
  "env": {
    "browser": true,
    "es2020": true,
    "node": true,
    "jest": true,
  },
  "extends": [
    "plugin:react/recommended",
    "airbnb-base",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
    "prettier/react"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": [
    'react',
    "@typescript-eslint",
    "prettier",
    "react-hooks"
  ],
  "rules": {
    "import/no-unresolved": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/prop-types": "off",
    "no-use-before-define": "off",
    "prettier/prettier": "error",
    "no-underscore-dangle": "off",
    "no-unused-expressions": "off",
    "class-methods-use-this": "off",
    "camelcase": "off",
    '@typescript-eslint/no-var-requires': "off",
    "@typescript-eslint/no-unused-vars": ["error", {
      "argsIgnorePattern": "_"
    }],
    "@typescript-eslint/naming-convention": [
      "error",
      {
        "selector": "interface",
        "format": ["PascalCase"],
        "custom": {
          "regex": "^I[A-Z]",
          "match": true
        }
      }
    ],
    "import/prefer-default-export": "off",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "ts": "never",
        "tsx": "never"
      }
    ],
    "no-useless-constructor": "off"
  },
  "settings": {
    "import/resolver": {
      "typescript": {}
    },
    "react": {
      "version": "detect"
    }
  }
}
