# 节点文档

ComfyUI 节点详解，涵盖常用核心节点和自定义节点。

## 节点分类

### 核心节点

| 分类 | 说明 | 节点数 |
|------|------|--------|
| [模型加载](./core/checkpoint) | 加载 Checkpoint、VAE 等 | 5+ |
| [采样器](./core/sampler) | KSampler 采样 | 3+ |
| [文本处理](./core/text) | CLIP 文本编码 | 4+ |
| [图像输入输出](./core/image-io) | LoadImage、SaveImage | 6+ |
| [Latent 操作](./core/latent) | 潜在空间操作 | 5+ |
| [ Conditioning](./core/conditioning) | 条件控制 | 4+ |

### 自定义节点

| 分类 | 说明 |
|------|------|
| [Impact Pack](./custom/impact-pack) | 面部修复、检测 |
| [ControlNet](./custom/controlnet) | ControlNet 节点 |
| [LayerStyle](./custom/layer-style) | 图层混合 |
| [实用工具](./custom/utils) | 常用工具 |

## 节点索引

### 按功能搜索

| 功能 | 节点 |
|------|------|
| 加载模型 | CheckpointLoader, CheckpointLoaderSDXL |
| 生成图像 | KSampler, KSamplerAdvanced |
| 编码文本 | CLIPTextEncode, CLIPTextEncodeSDXL |
| 图像编解码 | VAEDecode, VAEEncode |
| 保存图像 | SaveImage, ImagePreview |
| 加载图像 | LoadImage, LoadImageMask |
| 创建遮罩 | CreateMask, MaskDraw |
| 应用 LoRA | LoadLoRA, ApplyLoRA |

## 学习路径

### 入门必学

1. [CheckpointLoader](./core/checkpoint) - 模型加载
2. [CLIPTextEncode](./core/text) - 文本编码
3. [KSampler](./core/sampler) - 采样生成
4. [VAEDecode](./core/latent) - 解码输出
5. [SaveImage](./core/image-io) - 保存图像

### 进阶必学

1. [VAEEncode](./core/latent) - 图生图编码
2. [LoadLoRA](./custom/lora) - LoRA 应用
3. [ControlNet 应用](./custom/controlnet) - 控制生成
4. [EmptyLatentImage](./core/latent) - 创建潜在图像

## 节点连接规则

### 类型匹配

```
模型输出:
- MODEL → 连接 KSampler
- CLIP → 连接 CLIPTextEncode

Latent 输出:
- LATENT → 连接 KSampler、VAEDecode

图像输出:
- IMAGE → 连接 VAEEncode、SaveImage
```

### 连接示例

```
CheckpointLoader
     MODEL → KSampler
     CLIP → CLIPTextEncode(positive)
           → CLIPTextEncode(negative)

EmptyLatentImage → KSampler(LATENT)
                         ↓
                    VAEDecode
                         ↓
                    SaveImage
```

## 下一步

- [核心节点](./core/) - 基础节点详解
- [自定义节点](./custom/) - 扩展节点
- [界面指南](../guide/interface-nodes) - 节点操作