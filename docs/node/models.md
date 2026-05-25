# 模型节点

模型节点用于加载和管理 ComfyUI 中使用的各种 AI 模型。

## 模型类型

ComfyUI 支持多种类型的模型：

| 类型 | 用途 | 目录 |
|------|------|------|
| Checkpoint | 基础模型（完整模型） | `models/checkpoints/` |
| VAE | 变分自编码器 | `models/vae/` |
| LoRA | 低秩适配器 | `models/loras/` |
| Textual Inversion | 词嵌入 | `models/embeddings/` |
| ControlNet | 条件控制 | `models/controlnet/` |
| Upscale | 超分辨率模型 | `models/upscale_models/` |

## Checkpoint Loader

加载完整的基础检查点模型。

### 输入

无输入端口（自动从文件系统加载）。

### 输出

| 输出 | 类型 | 说明 |
|------|------|------|
| MODEL | MODEL | 用于 KSampler |
| CLIP | CLIP | 用于提示词编码 |
| VAE | VAE | 用于编解码 |

### 参数

| 参数 | 类型 | 说明 |
|------|------|------|
| checkpoint_name | STRING | 模型文件名 |

### 使用方法

1. 从下拉菜单选择模型
2. 连接 MODEL 到 KSampler
3. 连接 CLIP 到 CLIP Text Encode
4. 连接 VAE 用于编码/解码

### 模型获取

推荐模型下载来源：

- [Civitai](https://civitai.com/) - SD 模型为主
- [Hugging Face](https://huggingface.co/models?other=stable-diffusion) - 官方和社区模型
- [Stability AI](https://huggingface.co/stabilityai) - 官方模型

## Checkpoint Loader (Simple)

简化版检查点加载器。

### 特点

- 单节点完成基础加载
- 输出相同的 MODEL, CLIP, VAE
- 适合简单工作流

## VAE 节点

### VAE Load

单独加载 VAE 模型。

### VAE Decode

将潜在空间转换为图像。

```
LATENT (from KSampler) → VAE Decode → IMAGE
```

### VAE Encode

将图像转换为潜在空间。

```
IMAGE → VAE Encode → LATENT
```

### VAE Encode (Tiled)

分块编码，适合超大图像。

### VAE Decode (Tiled)

分块解码，适合超大图像，节省显存。

## LoRA 节点

### Load LoRA

加载并应用 LoRA 模型。

#### 输入

| 端口 | 类型 | 说明 |
|------|------|------|
| model | MODEL | 输入模型 |
| clip | CLIP | 输入 CLIP |
| strength_model | FLOAT | 模型强度 |
| strength_clip | FLOAT | CLIP 强度 |

#### 参数

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| lora_name | STRING | - | LoRA 文件名 |
| strength_model | FLOAT | 1.0 | 模型强度 |
| strength_clip | FLOAT | 1.0 | 文本强度 |

#### 强度说明

| 强度 | 效果 |
|------|------|
| 0.0 | 无效果 |
| 0.5-0.8 | 温和效果（推荐） |
| 1.0 | 完整效果 |
| >1.0 | 强烈效果，可能不稳定 |

### 链式 LoRA

可以串联多个 LoRA：

```
Checkpoint → LoRA1 → LoRA2 → LoRA3 → KSampler
```

## Textual Inversion (Embedding)

### Text Embedding

加载 Textual Inversion 嵌入。

#### 使用方法

1. 在 CLIP Text Encode 中使用嵌入名称
2. 格式：`<embedding:embedding_name>`

#### 示例

```
正向提示词: "1girl, <embedding:bad-hands-5>, masterpiece"
负向提示词: "<embedding:ng_deepnegative_v1_75t>"
```

## ControlNet 节点

### Load ControlNet Model

加载 ControlNet 模型。

### ControlNet Apply

应用 ControlNet 控制。

#### 输入

| 端口 | 类型 | 说明 |
|------|------|------|
| positive | CONDITIONING | 正向条件 |
| negative | CONDITIONING | 负向条件 |
| control_net | CONTROL_NET | ControlNet 模型 |
| image | IMAGE | 控制图像 |

#### 参数

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| strength | FLOAT | 1.0 | 控制强度 |

#### ControlNet 类型

| 类型 | 用途 |
|------|------|
| Canny | 边缘检测 |
| Depth | 深度图 |
| Pose | 姿态检测 |
| MLSD | 线条检测 |
| Scribble | 涂鸦 |
| SoftEdge | 软边缘 |

## 超分辨率模型

### Upscale Model (Load)

加载超分辨率模型。

### Upscale Image (Model)

使用模型进行超分辨率。

#### 输入

| 端口 | 类型 | 说明 |
|------|------|------|
| image | IMAGE | 输入图像 |
| model | UPSCALE_MODEL | 超分模型 |

#### 参数

| 参数 | 说明 |
|------|------|
| method | 放大方法 (latent/real-esrgan) |

## 模型管理技巧

### 模型存放位置

确保模型放在正确目录：

```
ComfyUI/
├── models/
│   ├── checkpoints/      # SD 模型
│   │   ├── v1-5-pruned.ckpt
│   │   └── SDXL_base_1.0.safetensors
│   ├── vae/
│   ├── loras/
│   ├── controlnet/
│   ├── embeddings/
│   └── upscale_models/
```

### 模型格式

| 格式 | 扩展名 | 特点 |
|------|--------|------|
| PyTorch | .ckpt, .pt | 通用格式 |
| SafeTensors | .safetensors | 更安全，推荐 |
| Diffusers | 目录 | Hugging Face 格式 |

### 检查模型加载

查看 ComfyUI 终端输出：

```
Using gpu = True
Loaded model: v1-5-pruned.ckpt [a25a9f]
```

## 常见问题

### 模型不显示

1. 确认文件在正确目录
2. 重启 ComfyUI
3. 检查文件格式和完整性

### 显存不足

1. 使用更小的模型
2. 使用 quantized 版本
3. 降低图像分辨率
4. 减小 batch_size

### 模型加载慢

1. 将模型放在 SSD
2. 使用 safetensors 格式
3. 减少同时加载的模型数量

## 下一步

- [采样器节点](./samplers) - 采样器详解
- [图像节点](./images) - 图像处理
