---
layout: home

title: ComfyUI 中文文档 - 完整的 AIGC 教程百科
description: ComfyUI 非官方中文百科，提供安装指南、界面说明、节点文档、基础教程和高级教程。涵盖 ControlNet、Flux、文生图、图生图、LoRA 等核心技术。
keywords: ComfyUI, Stable Diffusion, AI绘画, 节点式UI, ControlNet, Flux, LoRA, 教程, AIGC

hero:
  name: "ComfyUI 百科速查手册"
  text: "掌握 AIGC 的在线 ComfyUI 教程文档"
  tagline: ComfyUI 非官方中文百科 · 持续更新中
  actions:
    - theme: brand
      text: 开始安装 →
      link: /guide/installation
    - theme: alt
      text: 界面说明
      link: /guide/interface
    - theme: alt
      text: 基础教程
      link: /tutorial/

features:
  - title: 📥 安装指南
    details: ComfyUI Desktop、Windows、Linux、Mac、云端运行、秋叶启动器等全平台安装教程
    link: /guide/installation
  - title: 🖥️ 界面说明
    details: 界面布局、节点操作、工作流、提示词技巧、快捷键等完整操作指南
    link: /guide/interface-basic
  - title: 📚 基础教程
    details: 11个入门教程：启动服务、首次生成、模型安装、提示词、局部重绘、扩图、放大等
    link: /tutorial/
  - title: 🚀 高级教程
    details: ControlNet、Flux、混元视频、Wan2.1、IC Light 等前沿技术教程
    link: /tutorial/advanced/
  - title: 🔧 工作流示例
    details: 20+ 工作流示例：图生图、文生图、LoRA、ControlNet、放大、模型合并等
    link: /workflow/
  - title: 📦 在线资源
    details: 模型资源、LoRA、ControlNet、插件推荐、自定义节点等资源导航
    link: /resource/
---

<footer class="home-footer">
  <div class="container">
    <!-- <div class="news-section">
      <h3>🆕 最新资讯</h3>
      <div class="news-item">
        <a href="/news/2026-01-29-openmoss-mova">OpenMOSS 发布 MOVA - 开源音视频同步生成模型</a>
        <span class="date">2026/01/29</span>
      </div> -->
    <!-- </div> -->
    <div class="footer-content">
      <p>💡 更多内容仍在持续更新中...</p>
    </div>
  </div>
</footer>

<style>
.home-footer {
  margin-top: 4rem;
  padding: 2rem 0;
  border-top: 1px solid var(--vp-c-divider);
}

.news-section h3 {
  margin-bottom: 1rem;
}

.news-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
  border-bottom: 1px solid var(--vp-c-divider);
}

.news-item .date {
  color: var(--vp-c-text-2);
  font-size: 0.85rem;
}

.footer-content {
  margin-top: 2rem;
  text-align: center;
  color: var(--vp-c-text-2);
}

.copyright {
  margin-top: 0.5rem;
  font-size: 0.8rem;
}
</style>