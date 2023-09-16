module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/vue3-strongly-recommended", "eslint:recommended"],
  parserOptions: {
    parser: "@babel/eslint-parser",
  },
  plugins: ["vue"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    semi: ["error", "always"],
    indent: ["error", 2],
    "comma-spacing": ["error", { before: false, after: true }],
    "vue/no-multi-spaces": 0,
  },
};
