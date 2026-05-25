import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'ComfyUI 中文文档',
  description: 'ComfyUI 安装指南、界面设置、节点指南、设置指南',
  base: '/comfyUI-docs/',
  head: [
    ['script', { async: true, src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-xxxxxxxxx', crossorigin: 'anonymous' }]
  ],
  themeConfig: {
    logo: '/logo.svg',
    langMenuLabel: '选择语言',
    langAriaLabel: '选择语言',
    titleTemplate: 'ComfyUI 文档 - {title}',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '返回顶部',
    resetButtonTitle: '重置',
    search: '搜索',
    searchResultsFound: '{count} 个结果',
    searchResultsNoResults: '未找到结果',
    searchGroupNone: '暂无结果',
    prev: '上一页',
    next: '下一页',
    lastUpdated: '最后更新于',
    contributors: '贡献者',
    editLink: '编辑此页',
    onThisPage: '在本页',
    onThisPageAriaLabel: '在本页',
    outlineTitle: '目录',
    outlineAriaLabel: '目录',
    prevPage: '上一页',
    prevPageTitle: '查看上一页',
    nextPage: '下一页',
    nextPageTitle: '查看下一页',
    notFound: {
      title: '页面未找到',
      link: '返回首页'
    },
    nav: [
      { text: '首页', link: '/' },
      {
        text: '安装指南',
        items: [
          { text: '安装指南', link: '/guide/installation' },
          { text: 'Desktop 安装', link: '/guide/comfyui-desktop' },
          { text: 'Git 安装', link: '/guide/install-git' },
          { text: '秋叶启动器', link: '/guide/aaaki-launcher' },
          { text: '云端运行', link: '/guide/cloud' },
          { text: '模型安装', link: '/guide/model-install' }
        ]
      },
      {
        text: '界面说明',
        items: [
          { text: '界面指南', link: '/guide/interface-basic' },
          { text: '节点操作', link: '/guide/interface-nodes' },
          { text: '工作流', link: '/guide/interface-workflow' },
          { text: '提示词技巧', link: '/guide/interface-prompt' }
        ]
      },
      {
        text: '基础教程',
        items: [
          { text: '教程目录', link: '/tutorial/' },
          { text: '启动服务', link: '/tutorial/how-to-run' },
          { text: '首次生成', link: '/tutorial/first-image' },
          { text: '共用模型', link: '/tutorial/share-models' },
          { text: '提示词基础', link: '/tutorial/prompt-basic' },
          { text: '局部重绘', link: '/tutorial/inpainting' },
          { text: '扩图', link: '/tutorial/outpainting' },
          { text: '放大', link: '/tutorial/upscale' },
          { text: 'Embedding', link: '/tutorial/embedding' },
          { text: 'LoRA', link: '/tutorial/lora' }
        ]
      },
      {
        text: '高级教程',
        items: [
          { text: '入门教程', link: '/tutorial/getting-started' },
          { text: 'ControlNet', link: '/tutorial/advanced/controlnet' },
          { text: 'Canny', link: '/tutorial/advanced/controlnet-canny' },
          { text: 'Depth', link: '/tutorial/advanced/controlnet-depth' },
          { text: 'OpenPose', link: '/tutorial/advanced/controlnet-openpose' },
          { text: '多ControlNet', link: '/tutorial/advanced/multi-controlnet' },
          { text: 'Flux 文生图', link: '/tutorial/advanced/flux-t2i' },
          { text: 'Flux 图生图', link: '/tutorial/advanced/flux-i2i' },
          { text: 'Flux Fill', link: '/tutorial/advanced/flux-fill' }
        ]
      },
      {
        text: '节点文档',
        items: [
          { text: '节点目录', link: '/comfyui-nodes/' },
          { text: '核心节点', link: '/comfyui-nodes/core/' },
          { text: 'CheckpointLoader', link: '/comfyui-nodes/core/checkpoint' },
          { text: 'CLIPTextEncode', link: '/comfyui-nodes/core/text' },
          { text: 'KSampler', link: '/comfyui-nodes/core/sampler' },
          { text: 'Latent 操作', link: '/comfyui-nodes/core/latent' },
          { text: '图像输入输出', link: '/comfyui-nodes/core/image-io' },
          { text: '自定义节点', link: '/comfyui-nodes/custom/' },
          { text: 'Impact Pack', link: '/comfyui-nodes/custom/impact-pack' },
          { text: 'ControlNet 节点', link: '/comfyui-nodes/custom/controlnet-nodes' },
          { text: 'LayerStyle', link: '/comfyui-nodes/custom/layer-style' },
          { text: '实用工具', link: '/comfyui-nodes/custom/utils' }
        ]
      },
      {
        text: '资源导航',
        items: [
          { text: '资源目录', link: '/resource/' },
          { text: 'SD 模型', link: '/resource/models' },
          { text: 'Flux 模型', link: '/resource/flux-models' },
          { text: 'LoRA 模型', link: '/resource/lora-models' },
          { text: 'ControlNet', link: '/resource/controlnet-models' },
          { text: 'Embedding', link: '/resource/embedding' },
          { text: 'VAE', link: '/resource/vae' },
          { text: '放大模型', link: '/resource/upscale-models' },
          { text: '自定义节点', link: '/resource/custom-nodes' },
          { text: '官方资源', link: '/resource/official' }
        ]
      }
    ],
    sidebar: {
      '/guide/': [
        {
          text: '安装指南',
          items: [
            { text: '基础安装', link: '/guide/installation' },
            { text: 'Desktop 安装', link: '/guide/comfyui-desktop' },
            { text: 'Git 安装', link: '/guide/install-git' },
            { text: '秋叶启动器', link: '/guide/aaaki-launcher' },
            { text: '云端运行', link: '/guide/cloud' },
            { text: '模型安装', link: '/guide/model-install' }
          ]
        },
        {
          text: '界面说明',
          items: [
            { text: '界面指南', link: '/guide/interface-basic' },
            { text: '节点操作', link: '/guide/interface-nodes' },
            { text: '工作流', link: '/guide/interface-workflow' },
            { text: '提示词技巧', link: '/guide/interface-prompt' }
          ]
        }
      ],
      '/tutorial/': [
        {
          text: '基础教程',
          items: [
            { text: '启动服务', link: '/tutorial/how-to-run' },
            { text: '首次生成', link: '/tutorial/first-image' },
            { text: '共用模型', link: '/tutorial/share-models' },
            { text: '提示词基础', link: '/tutorial/prompt-basic' },
            { text: '局部重绘', link: '/tutorial/inpainting' },
            { text: '扩图', link: '/tutorial/outpainting' },
            { text: '放大', link: '/tutorial/upscale' },
            { text: 'Embedding', link: '/tutorial/embedding' },
            { text: 'LoRA', link: '/tutorial/lora' }
          ]
        }
      ],
      '/tutorial/advanced/': [
        {
          text: '高级教程',
          items: [
            { text: '入门教程', link: '/tutorial/getting-started' },
            { text: 'ControlNet', link: '/tutorial/advanced/controlnet' },
            { text: 'Canny', link: '/tutorial/advanced/controlnet-canny' },
            { text: 'Depth', link: '/tutorial/advanced/controlnet-depth' },
            { text: 'OpenPose', link: '/tutorial/advanced/controlnet-openpose' },
            { text: '多ControlNet', link: '/tutorial/advanced/multi-controlnet' },
            { text: 'Flux 文生图', link: '/tutorial/advanced/flux-t2i' },
            { text: 'Flux 图生图', link: '/tutorial/advanced/flux-i2i' },
            { text: 'Flux Fill', link: '/tutorial/advanced/flux-fill' }
          ]
        }
      ],
      '/workflow/': [
        {
          text: '工作流示例',
          items: [
            { text: '概述', link: '/workflow/' },
            { text: '基础文生图', link: '/workflow/text-to-image' },
            { text: '图生图', link: '/workflow/image-to-image' },
            { text: '局部重绘', link: '/workflow/inpainting' },
            { text: '扩图', link: '/workflow/outpainting' },
            { text: 'SDXL', link: '/workflow/sdxl' },
            { text: '视频生成', link: '/workflow/video' },
            { text: '模型合并', link: '/workflow/model-merging' },
            { text: 'ControlNet', link: '/workflow/controlnet' },
            { text: 'Canny 控制', link: '/workflow/controlnet-canny' },
            { text: 'Depth 控制', link: '/workflow/controlnet-depth' },
            { text: 'OpenPose 控制', link: '/workflow/controlnet-openpose' },
            { text: '多 ControlNet', link: '/workflow/multi-controlnet' }
          ]
        }
      ],
      '/resource/': [
        {
          text: '模型资源',
          items: [
            { text: 'SD 模型', link: '/resource/models' },
            { text: 'Flux 模型', link: '/resource/flux-models' },
            { text: 'LoRA 模型', link: '/resource/lora-models' },
            { text: 'ControlNet', link: '/resource/controlnet-models' },
            { text: '放大模型', link: '/resource/upscale-models' }
          ]
        },
        {
          text: '组件资源',
          items: [
            { text: 'Embedding', link: '/resource/embedding' },
            { text: 'VAE', link: '/resource/vae' },
            { text: '自定义节点', link: '/resource/custom-nodes' }
          ]
        },
        {
          text: '其他资源',
          items: [
            { text: '官方资源', link: '/resource/official' }
          ]
        }
      ],
      '/comfyui-nodes/': [
        {
          text: '节点文档',
          items: [
            { text: '概述', link: '/comfyui-nodes/' },
            { text: '核心节点', link: '/comfyui-nodes/core/' },
            { text: '自定义节点', link: '/comfyui-nodes/custom/' }
          ]
        }
      ],
      '/comfyui-nodes/core/': [
        {
          text: '核心节点',
          items: [
            { text: 'CheckpointLoader', link: '/comfyui-nodes/core/checkpoint' },
            { text: 'CLIPTextEncode', link: '/comfyui-nodes/core/text' },
            { text: 'KSampler', link: '/comfyui-nodes/core/sampler' },
            { text: 'Latent 操作', link: '/comfyui-nodes/core/latent' },
            { text: '图像输入输出', link: '/comfyui-nodes/core/image-io' }
          ]
        }
      ],
      '/comfyui-nodes/custom/': [
        {
          text: '自定义节点',
          items: [
            { text: 'Impact Pack', link: '/comfyui-nodes/custom/impact-pack' },
            { text: 'ControlNet 节点', link: '/comfyui-nodes/custom/controlnet-nodes' },
            { text: 'LayerStyle', link: '/comfyui-nodes/custom/layer-style' },
            { text: '实用工具', link: '/comfyui-nodes/custom/utils' }
          ]
        }
      ],
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Wolkenritter/comfyUI-docs' }
    ],
    footer: {
      copyright: 'Copyright © 2026 ComfyUI Docs'
    }
  },
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      title: 'ComfyUI 中文文档',
      description: 'ComfyUI 安装指南、界面设置、节点指南、设置指南'
    }
  },
  lastUpdated: true
})