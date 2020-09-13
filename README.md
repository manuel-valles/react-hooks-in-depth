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

1. **useState** allows you to make our components stateful (previously required a class component) using just functions (more flexible).

2. **useEffect** recreates the React's lifecycle methods: _componentDidMount_, _componentDidUpdate_, and _componentDidUnmount_. Inside useEffect, you can do any sort of side-effect that will only re-run if one of the parameters in the array of dependencies changes.

3. **useContext** allows you to store data in the UserContext.Provider. useContext just pulls that data out when given a Context object as a parameter. In general, context adds a decent amount of complexity (prop drilling) to an app. Only put things in context that are truly application-wide state like user information or auth keys and then use local state for the rest.

4. **useRef** is useful for things like:
   - Holding on to setInterval and setTimeout IDs so they can be cleared later;
   - Any bit of statefulness that could change but you don't want it to cause a re-render when it does;
   - Referencing DOM nodes directly.
