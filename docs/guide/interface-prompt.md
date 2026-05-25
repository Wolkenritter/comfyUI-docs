# 提示词技巧

掌握 ComfyUI 中的提示词编写技巧，获得更好的生成效果。

## 基础语法

### 正向提示词

描述你想生成的内容：

```
1girl, beautiful face, detailed eyes, long hair, sunset background
```

### 负向提示词

描述你想避免的内容：

```
lowres, bad anatomy, bad hands, text, error
```

## 权重调整

### 增强权重

```
(word:1.5)  # 增强 1.5 倍
(word:1.2)  # 增强 1.2 倍
(word:2.0)  # 增强 2 倍
```

### 减弱权重

```
[word]  # 减弱效果
(word:0.8)  # 减弱到 0.8
```

### 数值范围

| 数值 | 效果 |
|------|------|
| 0.0 | 完全忽略 |
| 0.5 | 减弱 |
| 1.0 | 正常 |
| 1.2-1.5 | 轻微增强 |
| 1.5+ | 明显增强 |

## AND 组合

### 语法

```
(word1 AND word2)
```

### 示例

```
(red hair AND blue eyes)
```

效果：同时强调红色头发和蓝色眼睛。

## 分层强调

### 渐进式强调

```
masterpiece, best quality, highly detailed
```

从一般到具体的递进描述。

### 分组强调

```
((masterpiece:1.2), (best quality:1.1)), detailed
```

多层括号表示更强的权重。

## 常用提示词模板

### 质量提示词

```
masterpiece, best quality, highly detailed, ultra-detailed
```

### 摄影风格

```
professional photo, Canon 85mm, studio lighting, bokeh
```

### 艺术风格

```
oil painting, impressionist, soft brushstrokes
```

### 负向提示词模板

```
lowres, bad anatomy, bad hands, text, error, missing fingers,
extra digit, fewer digits, cropped, worst quality, low quality,
normal quality, jpeg artifacts, signature, watermark, username,
blurry, artist name
```

## Embedding 使用

### 语法

```
<embedding:embedding_name>
```

### 示例

```
# 使用负面 Embedding
<embedding:easynegative>, <embedding:bad-hands-5>

# 在正向中使用
1girl, <embedding:good-hands>, beautiful
```

## 提示词顺序

### 重要原则

1. **质量词放前面** - 更强的注意力权重
2. **主体描述在中间** - 核心内容
3. **细节描述在后** - 补充说明

### 示例结构

```
质量标签, 主体类型, 主体特征, 姿态/动作, 背景, 风格, 细节
```

## 高级技巧

### 否定提示词拆分

将长负面提示词分组，增强效果：

```
# 分组否定
(ugly:1.2), (deformed:1.1), (blurry:1.1)
```

### CLIP 跳层

某些高级节点支持跳过 CLIP 中间层：

```
影响文本理解的深度
```

## 常见问题

### Q: 提示词不生效

**A**: 检查 CFG 值，建议 7-9；检查权重数值。

### Q: 某些元素太强/太弱

**A**: 调整该元素周围的权重数值。

### Q: 生成结果与提示词不符

**A**: 
- 尝试不同的采样器
- 增加采样步数
- 调整 CFG 值

## 下一步

- [Embedding 使用](../tutorial/embedding) - 深入了解 Embedding
- [LoRA 使用](../tutorial/lora) - 使用风格模型