# Research Starter · EHR × AI

一个面向新手科研人的中文静态主页，内容包含：

- EHR Agent 与 EHR + CXR 两条研究路线
- 6 周入门路线与论文阅读地图
- AI 搜文献、读论文、使用 Codex 的工作流
- 合规网络访问与医学数据安全提醒
- 可勾选的本周实验板、可复制的研究提示词

## 发布到自己的 GitHub Pages

1. 在 GitHub 新建一个仓库，例如 `research-starter`。
2. 将本目录中的全部文件推送到仓库的 `main` 分支：

   ```bash
   git init
   git add .
   git commit -m "build research starter site"
   git branch -M main
   git remote add origin https://github.com/dsw-jlu-rgzn/research-starter.git
   git push -u origin main
   ```

3. 打开仓库的 **Settings → Pages**，在 **Build and deployment → Source** 选择 **GitHub Actions**。
4. 等待 **Actions** 中的 `Deploy static site to GitHub Pages` 完成。
5. 网站地址通常是 `https://dsw-jlu-rgzn.github.io/research-starter/`。

仓库已经附带 `.github/workflows/deploy.yml`：以后每次推送到 `main`，GitHub 会自动重新发布。

## 本地预览

这是纯静态文件，不需要安装依赖。可以在本目录运行：

```bash
python -m http.server 8000
```

然后打开 <http://localhost:8000>。

## 内容边界

论文链接指向公开预印本、会议或期刊页面，正式写作前请再次核对版本和发表状态。网站中的网络访问建议仅指向合法、可信、经授权的学校/机构访问方式（如学校 VPN 或图书馆代理）；不要将患者数据、密钥或账号信息输入公共 AI 工具，也不要使用未知免费代理。
