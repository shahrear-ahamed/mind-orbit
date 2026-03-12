import mindorbitConfig from "@mindorbit/eslint-config"

export default [
  ...mindorbitConfig,
  {
    languageOptions: {
      parserOptions: {
        tsconfigRootDir: import.meta.dirname,
        project: null,
      },
    },
  },
]
