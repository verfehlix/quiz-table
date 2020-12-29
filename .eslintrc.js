module.exports = {
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true
        }
    },
    plugins: ["import"],
    extends: ["react-app", "react-app/jest", "prettier"],
    root: true,
    env: {
        browser: true,
        jest: true
    },
    ignorePatterns: ["**/generated/**"],
    rules: {
        "import/order": [
            "error",
            {
                "newlines-between": "always"
            }
        ],
        "react/jsx-curly-brace-presence": ["error", "never"]
    }
}
