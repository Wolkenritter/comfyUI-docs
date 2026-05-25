# 提示词基础

学习 ComfyUI 中提示词的基本编写规则和技巧。

## 正向提示词 vs 负向提示词

### 正向提示词 (Positive Prompt)

描述你想生成的内容：

```
1girl, portrait, beautiful face, detailed eyes, long wavy hair
```

### 负向提示词 (Negative Prompt)

描述你想避免的内容：

```
ugly, deformed, blurry, low quality, text, watermark
```

## 基础语法

### 权重调整

```javascript
(word:1.5)   // 增强权重
(word:0.8)   // 减弱权重
```

### 组合

```javascript
(word1 AND word2)  // 同时强调
```

### 否定

```javascript
[word]  // 减弱效果
```

## 质量提示词

### 高质量标签

```
masterpiece, best quality, highly detailed, ultra-detailed,
professional, 8k, HDR, volumetric lighting
```

### 摄影风格

```
professional photograph, Canon 85mm f/1.4, studio lighting,
bokeh, shallow depth of field, film grain
```

### 艺术风格

```
oil painting, impressionist, soft brushstrokes, classical style
```

## 常见提示词模板

### 人物肖像

```
正向：
1girl, young woman, beautiful face, detailed eyes, natural lighting,
soft smile, studio background, professional photo, 8k, masterpiece

负向：
ugly, deformed, low quality, blurry, oversaturated, artificial lighting
```

### 风景

```
正向：
landscape, mountain, golden hour, clear sky, flowing river,
green meadow, dramatic clouds, epic composition, photorealistic

负向：
low quality, blurry, cartoon, oversaturated, artificial
```

### 动漫风格

```
正向：
anime style, cel shading, vibrant colors, detailed background,
beautiful scenery, dynamic pose

负向：
realistic, photograph, 3d render, low quality
```

## Embedding 使用

### 语法

```
<embedding:embedding_name>
```

### 示例

```
正向：
1girl, <embedding:good-hands>

负向：
<embedding:easynegative>, <embedding:bad-hands-5>
```

## 提示词顺序

提示词的顺序影响注意力权重：

1. **质量标签** - 放最前面
2. **主体描述** - 核心内容
3. **细节** - 补充说明
4. **风格** - 最后指定风格

### 示例结构

```
(质量标签), (主体), (特征), (姿态/动作), (背景), (风格)
```

## CFG 参数

CFG (Classifier-Free Guidance) 控制提示词的影响强度：

| CFG 值 | 效果 |
|--------|------|
| 1-4 | 提示词影响很弱 |
| 5-7 | 轻微遵循 |
| 7-9 | 平衡（推荐） |
| 10-12 | 强遵循 |
| 13+ | 可能变形 |

## 常用提示词速查

### 质量
```
masterpiece, best quality, highly detailed, ultra-detailed
```

### 光照
```
natural lighting, studio lighting, dramatic lighting, rim light
```

### 构图
```
full body, portrait, close-up, wide shot, centered
```

### 风格
```
anime, realistic, oil painting, watercolor, sketch
```

## 下一步

- [局部重绘](./inpainting) - 修复图像细节
- [LoRA 使用](./lora) - 使用风格模型