# LoRA 使用教程

学习在 ComfyUI 中使用 LoRA（Low-Rank Adaptation）模型。

## 什么是 LoRA

LoRA 是一种轻量级模型微调技术，可以在不改变基础模型的情况下，添加特定风格、角色或概念。

## LoRA 的优势

| 特点 | 说明 |
|------|------|
| 文件小 | 通常 10-200MB |
| 快速加载 | 无需重新加载主模型 |
| 可叠加 | 可以组合多个 LoRA |
| 灵活控制 | 可调整强度 |

## 安装

### 1. 下载 LoRA

从以下网站下载：
- [Civitai](https://civitai.com/?tags=25) - 最大的 LoRA 资源站
- [Hugging Face](https://huggingface.co/sdromised/Lora)
- [魔搭社区ModelScope](https://www.modelscope.cn/home) - 国内镜像，速度快

### 2. 安装位置

放入 `ComfyUI/models/loras/` 目录。

### 3. 重启 ComfyUI

确保 LoRA 被识别。

## 使用方法

### 方法一：使用 Load LoRA 节点

```
Checkpoint Loader
      ↓ MODEL
      ↓ CLIP
      ↓
Load LoRA
      ↓ MODEL → KSampler
      ↓ CLIP → CLIP Text Encode
```

### Load LoRA 节点参数

| 参数 | 说明 | 推荐值 |
|------|------|--------|
| lora_name | LoRA 文件名 | - |
| strength_model | 模型强度 | 0.7-1.0 |
| strength_clip | CLIP 强度 | 0.5-1.0 |

### 方法二：Checkpoint Loader Simple + 提示词

在提示词中直接使用触发词：

```javascript
<lora:name:0.8>
```

## 强度参数详解

### strength_model

控制 LoRA 对图像主体的影响：

| 值 | 效果 |
|----|------|
| 0.0 | 无效果 |
| 0.5-0.7 | 温和效果 |
| 0.8-1.0 | 明显效果 |
| 1.0+ | 强烈效果（可能不稳定） |

### strength_clip

控制 LoRA 对文本理解的影响：

| 值 | 效果 |
|----|------|
| 0.0 | 不影响文本 |
| 0.5-1.0 | 正常影响 |

## 叠加多个 LoRA

### 串联方式

```
Checkpoint → LoRA A → LoRA B → LoRA C → KSampler
                    CLIP     CLIP     CLIP
```

### 权重分配

| LoRA A | LoRA B | 效果 |
|--------|--------|------|
| 0.8 | 0.3 | 主 LoRA + 辅助 |
| 0.5 | 0.5 | 平均混合 |
| 0.7 | 0.7 | 双强 |

## LoRA 类型

### 角色 LoRA

生成特定角色：

```javascript
// 触发词
<lora:character_name:0.8>
1girl, <lora:my_character:0.8>, blue hair, school uniform
```

### 风格 LoRA

应用艺术风格：

```javascript
// 触发词
<lora:anime_style:0.6>
landscape, <lora:ghibli_style:0.6>, mountains, sunset
```

### 服装 LoRA

添加服装：

```javascript
<lora:medieval_armor:0.7>, warrior, detailed armor
```

## 高级技巧

### 1. LoRA + ControlNet

```
LoRA 影响风格 + ControlNet 控制结构
```

### 2. 强度渐变

同一图像不同区域使用不同强度。

### 3. LoRA 顺序

改变 LoRA 应用顺序可能产生不同效果。

## 常见问题

### Q: LoRA 不生效

**A**: 检查文件名，确认 LoRA 放在正确目录。

### Q: 效果太强

**A**: 降低 strength_model 值。

### Q: 显存不足

**A**: 减少 LoRA 数量，降低图像分辨率。

### Q: 出现伪影

**A**: 降低 LoRA 强度，增加负向提示词。

## 下一步

- [ControlNet 使用](../advanced/controlnet) - 精准控制
- [图像放大](./upscale) - 提升质量