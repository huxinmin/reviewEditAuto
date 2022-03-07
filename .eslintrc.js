module.exports = {
  extends: "eslint:recommended",
  parser: "vue-eslint-parser",
  rules: {
    complexity: [
        'error',
        { max: 0 }
    ]
  }
}
