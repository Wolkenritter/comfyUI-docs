# 核心节点

ComfyUI 内置的核心节点详解。

## 节点列表

| 节点 | 说明 |
|------|------|
| [CheckpointLoader](./checkpoint) | 加载 Checkpoint 模型 |
| [CLIP Text Encode](./text) | 文本编码 |
| [KSampler](./sampler) | 采样器 |
| [VAEDecode](./latent) | 解码潜在空间 |
| [VAEEncode](./latent) | 编码到潜在空间 |
| [EmptyLatentImage](./latent) | 创建空白潜在图像 |
| [LoadImage](./image-io) | 加载图像 |
| [SaveImage](./image-io) | 保存图像 |

## 节点目录

- [模型加载](./checkpoint) - CheckpointLoader 系列
- [文本处理](./text) - CLIP 文本编码
- [采样器](./sampler) - KSampler 系列
- [图像输入输出](./image-io) - Load/Save 系列
- [Latent 操作](./latent) - VAE、Latent 系列