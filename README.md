# NUAA Guide (校园指北)

**快速开始（零基础）**
1. 在仓库 Settings -> Secrets and variables -> Actions 新增：
   - ALGOLIA_APP_ID
   - ALGOLIA_ADMIN_API_KEY

2. 在 `layouts/partials/search.html` 中替换 `ALGOLIA_APP_ID` 与 `ALGOLIA_SEARCH_ONLY_KEY`。

3. 上传资料：
   - 在 `content/materials/` 新建 `.md` 文件（参考 `example.md`），填 frontmatter（title、date、file_url 等）。
   - 小文件可以上传到 `static/attachments/`（Add file -> Upload files）。
   - 大文件建议使用 Google Drive 并把生成的下载链接填到 `file_url`。

4. push 到 main 分支后，Actions 会自动构建并部署，且把索引推到 Algolia。

如需帮助，请阅读项目根目录说明或联系维护者。
