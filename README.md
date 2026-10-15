# Jianyang Xie — Academic homepage

完整静态 GitHub Pages 网站，无需安装依赖或构建。

## 覆盖现有仓库

1. 解压 ZIP，将其中的文件和 assets 文件夹复制到 `Jianyang-Xie.github.io` 仓库根目录，覆盖同名文件。确保 `index.html` 直接位于根目录。
2. 保留原仓库的 `.git` 文件夹。不要将整个 ZIP 外层目录作为仓库子目录上传。
3. 提交并推送：

```sh
git add .
git commit -m "Redesign academic homepage"
git push
```

GitHub Pages 设置：Settings → Pages → Deploy from a branch → main → / (root)。
网站地址：https://jianyang-xie.github.io/

## 文件

- index.html：简介、研究兴趣、近期成果、7 篇代表作、项目卡片、代码和联系方式。
- publications.html：保留 CV 中全部 30 篇论文，支持搜索和年份筛选；关闭 JavaScript 仍可阅读。
- cv.html：完整教育、工作经历与基金项目，可直接通过浏览器打印为 PDF。
- style.css / script.js：共享样式及筛选交互。
- publications.json：论文元数据备份；HTML 为静态内容，修改 JSON 不会自动更新页面，编辑时需同步 HTML。
- assets/：本地图片，无需依赖第三方图片服务。
- SOURCES.md：图片、资料与链接来源及可用性说明。

## 日常修改

直接修改 HTML 文本；首页代表论文与 publications.html 中相同记录应一起更新。
论文图点击可打开原尺寸图片。项目图替换时同时更新图片说明。
没有放入个人手机号、性别或未提供的头像。

## LaTeX Academic CV

The homepage navigation links to the HTML CV page; the HTML CV page links to `assets/cv/Jianyang_Xie_CV.pdf`.
Edit `cv/main.tex` and push to `main`; `.github/workflows/build-cv.yml` compiles and commits the PDF, then explicitly requests a Pages rebuild. Pages remains configured as **Deploy from a branch → main → / (root)**. No personal token or new repository secret is required.

The existing HTML publication list remains independently maintained. The PDF is the full current CV; changing the CV source does not rewrite the website's publication list.
