import { defineConfig } from 'vitepress'

export default defineConfig({
  ignoreDeadLinks: true,
  title: 'ComfyUI 中文文档',
  description: 'ComfyUI 非官方中文百科，提供完整的安装指南、界面说明、节点文档、基础教程和高级教程。涵盖 ControlNet、Flux、文生图、图生图等核心技术。',
  base: '/',
  cleanUrl: true,
  head: [
    ['meta', { name: 'author', content: 'ComfyUI 中文文档' }],
    ['meta', { name: 'robots', content: 'index, follow' }],
    ['meta', { name: 'keywords', content: 'ComfyUI, Stable Diffusion, AI绘画, 节点式UI, ControlNet, Flux, LoRA, 教程, 中文文档, AIGC, 文生图, 图生图' }],
    ['meta', { property: 'og:site_name', content: 'ComfyUI 中文文档' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['link', { rel: 'canonical', href: 'https://comfyui.aijs.wang/' }],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    [
      'script',
      {
        async: true,
        src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2644340141064615',
        crossorigin: 'anonymous'
      }
    ]
  ],
  themeConfig: {
    logo: '/logo.svg',
    langMenuLabel: 'Language',
    langAriaLabel: 'Select language',
    titleTemplate: 'ComfyUI 文档 - {title}',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '返回顶部',
    resetButtonTitle: '重置',
    search: '搜索',
    searchResultsFound: '{count} 个结果',
    searchResultsNoResults: '未找到结果',
    searchGroupNone: '暂无结果',
    lastUpdated: {
      text: '最后更新于 ',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },
    onThisPage: '在本页',
    onThisPageAriaLabel: '在本页',
    outlineTitle: '目录',
    outlineAriaLabel: '目录',
    notFound: {
      title: '页面未找到',
      link: '返回首页'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Wolkenritter/comfyUI-docs' }
    ],
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    footer: {
      copyright: 'Copyright © 2026 ComfyUI Docs'
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
        },
        {
          text: '高级教程',
          items: [
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
      '/tutorial/advanced/': [
        {
          text: '基础教程',
          items: [
            { text: '入门教程', link: '/tutorial/getting-started' },
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
            { text: 'ControlNet', link: '/workflow/controlnet' }
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
      ]
    },
    // 其他配置...
    enhanceApp({ router }) {
      // 每次路由切换时，重新加载广告
      router.afterEach(() => {
        if (window.adsbygoogle) {
          // 这里需要添加ad client id
          window.adsbygoogle.push({
            google_ad_client: 'ca-pub-2644340141064615',
            enable_page_level_ads: true
          });
        }
      });
    }
  },
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      link: '/',
      title: 'ComfyUI 中文文档',
      description: 'ComfyUI 安装指南、界面设置、节点指南、设置指南'
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      title: 'ComfyUI Documentation',
      description: 'ComfyUI installation guides, interface documentation, node references, tutorials, and advanced guides.',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
          {
            text: 'Installation',
            items: [
              { text: 'Installation Guide', link: '/en/guide/installation' },
              { text: 'Desktop Install', link: '/en/guide/comfyui-desktop' },
              { text: 'Git Install', link: '/en/guide/install-git' },
              { text: 'AAKI Launcher', link: '/en/guide/aaaki-launcher' },
              { text: 'Cloud Running', link: '/en/guide/cloud' },
              { text: 'Model Install', link: '/en/guide/model-install' }
            ]
          },
          {
            text: 'Interface',
            items: [
              { text: 'Interface Guide', link: '/en/guide/interface-basic' },
              { text: 'Node Operations', link: '/en/guide/interface-nodes' },
              { text: 'Workflow', link: '/en/guide/interface-workflow' },
              { text: 'Prompt Tips', link: '/en/guide/interface-prompt' }
            ]
          },
          {
            text: 'Tutorials',
            items: [
              { text: 'Tutorial Index', link: '/en/tutorial/' },
              { text: 'Start Service', link: '/en/tutorial/how-to-run' },
              { text: 'First Image', link: '/en/tutorial/first-image' },
              { text: 'Share Models', link: '/en/tutorial/share-models' },
              { text: 'Prompt Basics', link: '/en/tutorial/prompt-basic' },
              { text: 'Inpainting', link: '/en/tutorial/inpainting' },
              { text: 'Outpainting', link: '/en/tutorial/outpainting' },
              { text: 'Upscale', link: '/en/tutorial/upscale' },
              { text: 'Embedding', link: '/en/tutorial/embedding' },
              { text: 'LoRA', link: '/en/tutorial/lora' }
            ]
          },
          {
            text: 'Advanced',
            items: [
              { text: 'Getting Started', link: '/en/tutorial/getting-started' },
              { text: 'ControlNet', link: '/en/tutorial/advanced/controlnet' },
              { text: 'Canny', link: '/en/tutorial/advanced/controlnet-canny' },
              { text: 'Depth', link: '/en/tutorial/advanced/controlnet-depth' },
              { text: 'OpenPose', link: '/en/tutorial/advanced/controlnet-openpose' },
              { text: 'Multi-ControlNet', link: '/en/tutorial/advanced/multi-controlnet' },
              { text: 'Flux T2I', link: '/en/tutorial/advanced/flux-t2i' },
              { text: 'Flux I2I', link: '/en/tutorial/advanced/flux-i2i' },
              { text: 'Flux Fill', link: '/en/tutorial/advanced/flux-fill' }
            ]
          },
          {
            text: 'Nodes',
            items: [
              { text: 'Nodes Index', link: '/en/comfyui-nodes/' },
              { text: 'Core Nodes', link: '/en/comfyui-nodes/core/' },
              { text: 'Custom Nodes', link: '/en/comfyui-nodes/custom/' }
            ]
          },
          {
            text: 'Resources',
            items: [
              { text: 'Resources Index', link: '/en/resource/' },
              { text: 'SD Models', link: '/en/resource/models' },
              { text: 'Flux Models', link: '/en/resource/flux-models' },
              { text: 'LoRA Models', link: '/en/resource/lora-models' },
              { text: 'ControlNet', link: '/en/resource/controlnet-models' },
              { text: 'Embedding', link: '/en/resource/embedding' },
              { text: 'VAE', link: '/en/resource/vae' },
              { text: 'Upscale Models', link: '/en/resource/upscale-models' },
              { text: 'Custom Nodes', link: '/en/resource/custom-nodes' }
            ]
          }
        ],
        sidebar: {
          '/en/guide/': [
            {
              text: 'Installation',
              items: [
                { text: 'Installation', link: '/en/guide/installation' },
                { text: 'Desktop', link: '/en/guide/comfyui-desktop' },
                { text: 'Git', link: '/en/guide/install-git' },
                { text: 'AAKI Launcher', link: '/en/guide/aaaki-launcher' },
                { text: 'Cloud', link: '/en/guide/cloud' },
                { text: 'Model Install', link: '/en/guide/model-install' }
              ]
            },
            {
              text: 'Interface',
              items: [
                { text: 'Basic', link: '/en/guide/interface-basic' },
                { text: 'Nodes', link: '/en/guide/interface-nodes' },
                { text: 'Workflow', link: '/en/guide/interface-workflow' },
                { text: 'Prompt', link: '/en/guide/interface-prompt' }
              ]
            }
          ],
          '/en/tutorial/': [
            {
              text: 'Basic Tutorials',
              items: [
                { text: 'Start Service', link: '/en/tutorial/how-to-run' },
                { text: 'First Image', link: '/en/tutorial/first-image' },
                { text: 'Share Models', link: '/en/tutorial/share-models' },
                { text: 'Prompt Basics', link: '/en/tutorial/prompt-basic' },
                { text: 'Inpainting', link: '/en/tutorial/inpainting' },
                { text: 'Outpainting', link: '/en/tutorial/outpainting' },
                { text: 'Upscale', link: '/en/tutorial/upscale' },
                { text: 'Embedding', link: '/en/tutorial/embedding' },
                { text: 'LoRA', link: '/en/tutorial/lora' }
              ]
            },
            {
              text: 'Advanced Tutorials',
              items: [
                { text: 'ControlNet', link: '/en/tutorial/advanced/controlnet' },
                { text: 'Canny', link: '/en/tutorial/advanced/controlnet-canny' },
                { text: 'Depth', link: '/en/tutorial/advanced/controlnet-depth' },
                { text: 'OpenPose', link: '/en/tutorial/advanced/controlnet-openpose' },
                { text: 'Multi-ControlNet', link: '/en/tutorial/advanced/multi-controlnet' },
                { text: 'Flux T2I', link: '/en/tutorial/advanced/flux-t2i' },
                { text: 'Flux I2I', link: '/en/tutorial/advanced/flux-i2i' },
                { text: 'Flux Fill', link: '/en/tutorial/advanced/flux-fill' }
              ]
            }
          ],
          '/en/workflow/': [
            {
              text: 'Workflows',
              items: [
                { text: 'Index', link: '/en/workflow/' },
                { text: 'Text-to-Image', link: '/en/workflow/text-to-image' },
                { text: 'Image-to-Image', link: '/en/workflow/image-to-image' },
                { text: 'Inpainting', link: '/en/workflow/inpainting' },
                { text: 'Outpainting', link: '/en/workflow/outpainting' },
                { text: 'SDXL', link: '/en/workflow/sdxl' },
                { text: 'Video', link: '/en/workflow/video' },
                { text: 'Model Merging', link: '/en/workflow/model-merging' },
                { text: 'ControlNet', link: '/en/workflow/controlnet' }
              ]
            }
          ],
          '/en/resource/': [
            {
              text: 'Resources',
              items: [
                { text: 'SD Models', link: '/en/resource/models' },
                { text: 'Flux Models', link: '/en/resource/flux-models' },
                { text: 'LoRA Models', link: '/en/resource/lora-models' },
                { text: 'ControlNet', link: '/en/resource/controlnet-models' },
                { text: 'Embedding', link: '/en/resource/embedding' },
                { text: 'VAE', link: '/en/resource/vae' },
                { text: 'Upscale Models', link: '/en/resource/upscale-models' },
                { text: 'Custom Nodes', link: '/en/resource/custom-nodes' },
                { text: 'Official', link: '/en/resource/official' }
              ]
            }
          ],
          '/en/comfyui-nodes/': [
            {
              text: 'Nodes',
              items: [
                { text: 'Index', link: '/en/comfyui-nodes/' },
                { text: 'Core Nodes', link: '/en/comfyui-nodes/core/' },
                { text: 'Custom Nodes', link: '/en/comfyui-nodes/custom/' }
              ]
            }
          ],
          '/en/comfyui-nodes/core/': [
            {
              text: 'Core Nodes',
              items: [
                { text: 'CheckpointLoader', link: '/en/comfyui-nodes/core/checkpoint' },
                { text: 'CLIPTextEncode', link: '/en/comfyui-nodes/core/text' },
                { text: 'KSampler', link: '/en/comfyui-nodes/core/sampler' },
                { text: 'Latent', link: '/en/comfyui-nodes/core/latent' },
                { text: 'Image I/O', link: '/en/comfyui-nodes/core/image-io' }
              ]
            }
          ],
          '/en/comfyui-nodes/custom/': [
            {
              text: 'Custom Nodes',
              items: [
                { text: 'Impact Pack', link: '/en/comfyui-nodes/custom/impact-pack' },
                { text: 'ControlNet Nodes', link: '/en/comfyui-nodes/custom/controlnet-nodes' },
                { text: 'LayerStyle', link: '/en/comfyui-nodes/custom/layer-style' },
                { text: 'Utils', link: '/en/comfyui-nodes/custom/utils' }
              ]
            }
          ]
        }
      }
    }
  },
})