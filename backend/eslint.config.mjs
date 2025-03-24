import globals from "globals";
import stylisticJs from '@stylistic/eslint-plugin-js'
import js from '@eslint/js';

export default [
  js.configs.recommended,  // This uses ESLint's recommended configuration
  {
    files: ["**/*.js"],  // Apply to all JavaScript files
    languageOptions: {
      sourceType: "commonjs",  // Use CommonJS modules
      globals: {
        ...globals.node,  // Use Node.js global variables like `process`
      },
      ecmaVersion: "latest",  // Use the latest ECMAScript version
    },
    plugins: {
      '@stylistic/js': stylisticJs  // Use the stylistic rules plugin
    },
    rules: {
      '@stylistic/js/indent': ['error', 2],  // Enforce 2 spaces for indentation
      '@stylistic/js/quotes': ['error', 'single'],  // Enforce single quotes
      '@stylistic/js/semi': ['error', 'never'],  // Disallow semicolons
      '@stylistic/js/linebreak-style': ['error', 'unix'],  // Use UNIX line breaks
      'eqeqeq': 'error',  // Enforce strict equality (===)
      'no-trailing-spaces': 'error',  // Disallow trailing spaces
      'object-curly-spacing': ['error', 'always'],  // Enforce spacing inside curly braces
      'arrow-spacing': ['error', { 'before': true, 'after': true }],  // Enforce spacing around arrow functions
      'no-console': 'off',  // Allow `console.log` for debugging
    },
  },
  { 
    ignores: ["dist/**", "build/**"],  // Ignore files in dist and build folders
  },
];
