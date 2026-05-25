# LoRA 应用

使用 LoRA（Low-Rank Adaptation）模型快速应用特定风格、角色或概念。

## 工作流说明

LoRA 是一种轻量化的模型微调技术，可以在不改变基础模型的情况下，添加特定的风格、角色或概念。

### LoRA 的优势

| 特性 | 优势 |
|------|------|
| 轻量 | 文件小（通常 10-200MB） |
| 快速 | 无需加载新模型 |
| 灵活 | 可以叠加多个 LoRA |
| 经济 | 适合低显存环境 |

### 常见 LoRA 类型

| 类型 | 说明 | 示例 |
|------|------|------|
| 角色 LoRA | 特定人物/角色 | "游戏角色"、"名人面孔" |
| 风格 LoRA | 艺术风格 | "动漫风"、"油画风" |
| 概念 LoRA | 特定概念 | "服装样式"、"物体设计" |
| 服装 LoRA | 服装/配饰 | "制服"、"古装" |
| 发型 LoRA | 发型样式 | "双马尾"、"卷发" |

## 节点连接图

```
┌─────────────────┐
│ Checkpoint      │─── MODEL ───→ Load LoRA ───→ MODEL ───→ KSampler
│ Loader          │                                       │
│                 │─── CLIP  ───→ Load LoRA ───→ CLIP ───→ CLIP Text Encode
└─────────────────┘
```

### 详细连接

```
┌─────────────────┐
│ Checkpoint      │────────── MODEL ──────────┐
│ Loader          │────────── CLIP  ──────────┼──→ CLIP Text Encode
└─────────────────┘                           │    ↓ CONDITIONING
                                              │
                        CLIP Text Encode ──→ CONDITIONING
                        (负向)                   │
                            ↓ CONDITIONING      │
                                              ↓
┌──────────────────┐                          ┌──────────────┐
│ Empty Latent      │─────────────────────────→ │   KSampler   │──→ LATENT
└──────────────────┘                          └──────────────┘
                                                      ↓
                                             ┌──────────────┐   IMAGE
                                             │ VAE Decode   │─────────→ Save
                                             └──────────────┘
```

## 详细配置

### Load LoRA 节点

| 输入 | 类型 | 说明 |
|------|------|------|
| model | MODEL | 基础模型 |
| clip | CLIP | CLIP 模型 |
| strength_model | FLOAT | 模型强度 |
| strength_clip | FLOAT | CLIP 强度 |

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| lora_name | STRING | - | LoRA 文件名 |

### strength_model 参数

控制 LoRA 对图像主体的影响程度：

| 值 | 效果 |
|----|------|
| 0.0 | 无效果 |
| 0.3-0.5 | 温和效果，推荐 |
| 0.6-0.8 | 中等效果 |
| 1.0 | 完整效果 |
| > 1.0 | 强烈效果，可能不稳定 |

### strength_clip 参数

控制 LoRA 对提示词理解的影响：

| 值 | 效果 |
|----|------|
| 0.0 | 不影响文本理解 |
| 0.5-1.0 | 正常影响 |
| 1.0+ | 增强影响 |

## 应用技巧

### 强度选择指南

| 场景 | strength_model | 说明 |
|------|----------------|------|
| 风格参考 | 0.4-0.6 | 轻微风格影响 |
| 主体特征 | 0.7-0.85 | 明显角色特征 |
| 风格转换 | 0.6-0.8 | 完整风格变化 |
| 细节添加 | 0.3-0.5 | 微妙细节 |

### 提示词配合

使用 LoRA 时，正向提示词需要：

```
1. 添加 LoRA 触发词
2. 描述主体特征
3. 指定风格
```

#### 示例

```
# 使用角色 LoRA
正向提示词: "1girl, <lora:character_name:0.8>, detailed face,
            anime style, beautiful eyes"

# 使用风格 LoRA
正向提示词: "landscape, <lora:watercolor_style:0.6>,
            mountains, sunset, vibrant colors"
```

### 触发词格式

```
<lora:文件名:强度>
```

| 格式 | 示例 | 说明 |
|------|------|------|
| 带强度 | `<lora:name:0.8>` | 指定强度 |
| 默认强度 | `<lora:name>` | 使用默认强度 1.0 |
| 负强度 | `<lora:name:-0.5>` | 反向应用（较少用） |

## 多 LoRA 叠加

可以同时使用多个 LoRA：

### 串联方式

```
Checkpoint → LoRA A → LoRA B → LoRA C → KSampler
                     CLIP     CLIP     CLIP
```

### 权重调整

| 策略 | 说明 | 示例 |
|------|------|------|
| 平均分配 | 各 LoRA 权重相同 | 0.5 + 0.5 |
| 主次分配 | 一个主 LoRA，一个辅助 | 0.8 + 0.3 |
| 分层应用 | 不同阶段应用不同 LoRA | 需要条件控制 |

### 组合建议

| LoRA 1 | LoRA 2 | 效果 |
|--------|--------|------|
| 角色 | 服装 | 角色穿特定服装 |
| 风格 A | 风格 B | 混合风格 |
| 角色 | 场景 | 角色在特定场景 |
| 风格 | 颜色 | 特定色调的风格 |

## 应用场景

### 场景一：角色生成

生成特定角色的图像。

```
基础模型 + 角色 LoRA
```

**配置**
```
LoRA: anime_character_v1.safetensors
strength_model: 0.7-0.85
正向提示词: "1girl, <lora:character:0.8>, blue hair, school uniform"
```

### 场景二：风格转换

将图像转换为特定艺术风格。

```
基础模型 + 风格 LoRA
```

**配置**
```
LoRA: studio_ghibli_style.safetensors
strength_model: 0.5-0.7
正向提示词: "landscape, <lora:ghibli:0.6>, hills, river, peaceful"
```

### 场景三：服装/道具

为角色添加特定服装或道具。

```
基础模型 + 角色 LoRA + 服装 LoRA
```

**配置**
```
LoRA 1: main_character.safetensors (0.8)
LoRA 2: medieval_armor.safetensors (0.6)
正向提示词: "1girl, <lora:character:0.8>, wearing armor, warrior pose"
```

### 场景四：光影/氛围

添加特定的光影效果。

```
基础模型 + 光影 LoRA
```

**配置**
```
LoRA: cinematic_lighting.safetensors
strength_model: 0.4-0.6
正向提示词: "portrait, <lora:lighting:0.5>, dramatic lighting, rim light"
```

## 高级技巧

### 分层控制

使用 Latent 混合实现分层效果：

```
Step 1: 不带 LoRA 生成基础构图 (denoise 0.6)
Step 2: 带 LoRA 在局部区域应用 (denoise 0.3-0.5)
```

### LoRA + ControlNet

结合使用实现更精准的控制：

```
LoRA 影响风格 + ControlNet 控制结构
```

### LoRA 强度衰减

对同一图像渐进式应用：

```
Frame 1: strength 0.8 → 清晰风格
Frame 2: strength 0.6 → 中等风格
Frame 3: strength 0.4 → 微妙风格
```

### LoRA 版本兼容

| 版本 | 兼容性 | 说明 |
|------|--------|------|
| SD 1.x LoRA | SD 1.x 模型 | 标准格式 |
| SDXL LoRA | SDXL 模型 | 需要匹配模型 |
| A1111 格式 | ComfyUI | 可直接使用 |
| Kohya 格式 | ComfyUI | 需要转换 |

## 常见问题

### Q: LoRA 不生效

**A**:
1. 确认 LoRA 文件在正确目录 (`models/loras/`)
2. 检查提示词格式 `<lora:name:strength>`
3. 确认 strength 值 > 0

### Q: 效果过于强烈

**A**: 降低 strength_model 值到 0.5-0.6。

### Q: 出现伪影/变形

**A**:
1. 降低 LoRA 强度
2. 增加负向提示词
3. 尝试不同的 seed

### Q: 显存不足

**A**:
1. 降低图像分辨率
2. 减少 LoRA 数量
3. 使用量化版 LoRA

### Q: LoRA 与基础模型冲突

**A**:
1. 调整 LoRA 强度
2. 更换基础模型
3. 使用兼容性更好的 LoRA

## LoRA 资源推荐

### 热门平台

| 平台 | 特点 |
|------|------|
| Civitai | 最大的 LoRA 分享平台 |
| Hugging Face | 官方和学术资源 |
| CKPT | 精选合集 |

### 下载后放置位置

```
ComfyUI/
└── models/
    └── loras/
        ├── character_lora.safetensors
        ├── style_lora.safetensors
        └── ...
```

## 下一步

- [高清放大](./upscaling) - 提升输出质量
- [完整工作流](../) - 组合多种技术