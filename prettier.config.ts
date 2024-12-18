module.exports = {
  plugins: ["@trivago/prettier-plugin-sort-imports"],
  importOrder: [
    "^react$", // React를 항상 최상단에
    "^next", // next 관련 import
    "^@tanstack/**", // TanStack 관련 import
    "^@/libs/**", // 프로젝트 라이브러리 경로
    "^@/core/**",
    "^@/store/**",
    "^[./]", // 상대 경로 import
    "\\.css$", // CSS 파일은 마지막에
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
