---
title: 广告示例
---

# 广告组件使用示例

## Google AdSense

<AdBanner type="adsense" position="bottom" />

## 自定义推广广告

<AdBanner
  type="custom"
  :custom-ad="{
    title: 'ComfyUI 从入门到精通',
    description: '系统学习 AI 图像生成，掌握节点工作流',
    link: '/guide/installation',
    badge: '推荐阅读'
  }"
/>

## 多广告位展示

### 顶部广告
<AdBanner type="adsense" position="top" />

### 侧边栏广告
<div style="width: 300px; margin: 0 auto;">
  <AdBanner type="custom" position="sidebar" :custom-ad="{
    title: 'GPU 云服务',
    description: '高性能 GPU 实例，即开即用',
    link: '#',
    badge: '广告'
  }" />
</div>

### 底部广告
<AdBanner type="adsense" position="bottom" />

## 代码使用说明

### 基础用法

```markdown
<!-- Google AdSense -->
<AdBanner type="adsense" position="bottom" />
```

### 自定义广告

```vue
<AdBanner
  type="custom"
  :custom-ad="{
    title: '标题',
    description: '描述内容',
    link: 'https://example.com',
    badge: '广告'
  }"
/>
```

### 参数说明

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| type | String | adsense | 广告类型：adsense / baidu / custom |
| position | String | bottom | 位置：top / bottom / sidebar / inline |
| width | String | auto | 宽度 |
| height | String | auto | 高度 |

## 注意事项

1. **AdSense 配置**：请将 `ca-pub-xxxxxxxxx` 替换为你的实际发布商 ID
2. **百度联盟**：需要配置 `baidu-site-id` 参数
3. **合规要求**：确保广告内容符合平台政策

## 全局注入脚本

如需在整个站点注入广告脚本，可在 `config.js` 中配置：

```js
export default defineConfig({
  head: [
    ['script', { async: true, src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js' }]
  ]
})
```