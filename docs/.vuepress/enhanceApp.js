const head = require('./config/head.js');
const plugins = require('./config/plugins.js');
const themeConfig = require('./config/themeConfig.js');

module.exports = {
  theme: 'vdoing', // 使用npm包主题
  title: "blog-vdoing",
  description: 'vdoing博客主题模板',
  base: '/blog-vdoing/', // 格式：'/<仓库名>/'， 默认'/'
  markdown: {
    lineNumbers: true, // 代码行号
  },

  head,
  plugins,
  themeConfig,

  plugins: [
    // vssue 评论插件
    [
      "vuepress-plugin-vssue-global",
      {
        platform: "github",
        title: "[Comment]<%- frontmatter.title %>",
        needComments: true,
        // 其他的 Vssue 配置
        autoCreateIssue: true,
        clientId: "3496ea08107b9e30d7b6",
        clientSecret: "9bd845664fcc60d17892fa345f2e8ac89cc0d1d0",
        owner: "lql95",
        repo: "blog-vdoing",
      },
    ],
    // Markdown 增强
    [
      "md-enhance",
      {
        // 启用流程图
        flowchart: true,
        // Enable mermaid
        mermaid: true,
        // 启用 TeX 支持
        tex: true,
      },
    ],
  ],
}