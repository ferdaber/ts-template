/** @type {import('eslint').Linter.Config} */
module.exports = {
    root: true,
    env: {
        node: true,
    },
    parserOptions: {
        tsconfigRootDir: __dirname,
        project: ["./tsconfig.json", "./tsconfig.js.json"],
    },
    settings: {
        react: {
            version: "detect",
        },
    },
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint"],
    extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "prettier"],
    rules: {
        "prefer-const": [
            "error",
            {
                destructuring: "all",
            },
        ],
        "no-empty": ["error", { allowEmptyCatch: true }],

        "@typescript-eslint/no-empty-interface": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
        "@typescript-eslint/ban-types": ["error", { types: { "{}": false } }],
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/no-namespace": ["error", { allowDeclarations: true }],
    },
    ignorePatterns: [".eslintrc.js", "babel.config.js"],
    overrides: [
        {
            files: ["*.js", "*.mjs", "*.cjs"],
            rules: {
                "@typescript-eslint/no-var-requires": "off",
            },
        },
    ],
};
