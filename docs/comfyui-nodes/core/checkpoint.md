# CheckpointLoader 节点

加载 Stable Diffusion Checkpoint 模型。

## 节点信息

| 属性 | 说明 |
|------|------|
| 类别 | 模型加载 |
| 输出 | MODEL, CLIP |

## 输入

| 输入 | 类型 | 说明 |
|------|------|------|
| model_name | STRING | 模型名称（从下拉菜单选择） |

## 输出

| 输出 | 类型 | 说明 |
|------|------|------|
| MODEL | MODEL | 主模型，用于 KSampler |
| CLIP | CLIP | 文本编码器，用于 CLIPTextEncode |

## 使用方法

### 基本用法

```
1. 从下拉菜单选择模型
2. MODEL 输出连接 KSampler
3. CLIP 输出连接 CLIPTextEncode
```

### 工作流示例

```
CheckpointLoader
     MODEL → KSampler
     CLIP → CLIPTextEncode(positive)
           → CLIPTextEncode(negative)
```

## 模型选择

### 常见模型

| 模型 | 版本 | 适用场景 |
|------|------|----------|
| SD 1.5 | v1-5-pruned | 通用，快速 |
| SD 2.1 | v2-1_768 | 更高质量 |
| SDXL | sd_xl | 最佳质量 |

### 选择建议

| 需求 | 推荐 |
|------|------|
| 新手 | SD 1.5 |
| 高质量 | SDXL |
| 动漫 | Anime 模型 |

## SDXL 专用节点

### CheckpointLoaderSDXL

| 属性 | 说明 |
|------|------|
| 输出 | MODEL, CLIP, VAE |

增加了 VAE 输出，可直接连接 VAE 解码。

```
CheckpointLoaderSDXL
     MODEL → KSampler
     CLIP → CLIPTextEncode
     VAE → VAEDecode
```

### CheckpointLoaderSDXL_LCM

专用于 LCM (Latent Consistency Models)，加速生成。

## 常见问题

### Q: 模型不显示

**A**: 
- 确认模型放在 `models/checkpoints/` 目录
- 重启 ComfyUI

### Q: 显存不足

**A**:
- 使用更小的模型
- 减小图像分辨率
- 关闭其他程序

### Q: CLIP 输出什么

**A**: CLIP 是文本编码器，输出连接到 CLIPTextEncode 节点。

## 下一步

- [CLIPTextEncode](./text) - 文本编码
- [KSampler](./sampler) - 采样器