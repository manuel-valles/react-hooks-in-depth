# Hooks in Depth

0. Start Project

   1. Install main dependencies

   ```
   $ yarn init -y
   $ git init
   $ yarn add -D prettier eslint eslint-config-prettier babel-eslint eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks parcel-bundler
   $ yarn add react react-dom
   ```

   2. Add config files:

      **package.json**

   ```json
   "scripts": {
    "dev": "parcel src/index.html",
    "format": "prettier \"src/**/*.{js,html}\" --write",
    "lint": "eslint \"src/**/*.{js,jsx}\" --quiet",
    "test": "echo \"Error: no test specified\" && exit 1"
   }
   ```

   **.prettierrc**

   ```json
   {
     "singleQuote": true
   }
   ```

   **.eslintrc.json**

   ```json
   {
     "extends": [
       "eslint:recommended",
       "plugin:import/errors",
       "plugin:react/recommended",
       "plugin:jsx-a11y/recommended",
       "prettier",
       "prettier/react"
     ],
     "rules": {
       "react/prop-types": 0,
       "no-console": 1,
       "react-hooks/rules-of-hooks": 2,
       "react-hooks/exhaustive-deps": 1
     },
     "plugins": ["react", "import", "jsx-a11y", "react-hooks"],
     "parser": "babel-eslint",
     "parserOptions": {
       "ecmaVersion": 2018,
       "sourceType": "module",
       "ecmaFeatures": {
         "jsx": true
       }
     },
     "env": {
       "es6": true,
       "browser": true,
       "node": true
     },
     "settings": {
       "react": {
         "version": "detect"
       }
     }
   }
   ```

   **.gitignore**

   ```
    node_modules/
    .cache/
    dist/
    coverage/
    .vscode/
    .env
   ```
