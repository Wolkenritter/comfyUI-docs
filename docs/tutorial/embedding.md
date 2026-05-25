# Embedding 使用教程

学习在 ComfyUI 中使用 Textual Inversion / Embedding。

## 什么是 Embedding

Embedding（文本嵌入）是一种小型模型，用于编码特定概念或风格到提示词中。

## 用途

### 负向 Embedding

快速避免常见问题：

```
easynegative      → 通用负面
bad-hands-5       → 修复手部
ng_deepnegative   → 强力负面
```

### 正向 Embedding

添加特定概念：

```
good-hands       → 好的手部
detailed-face     → 细节面部
```

## 安装

### 1. 下载 Embedding

从以下网站下载：
- [Civitai](https://civitai.com/)
- [Embedding 资源合集](https://civitai.com/?tags=101105)

### 2. 安装位置

将 `.pt` 或 `.safetensors` 文件放入：

```
ComfyUI/models/embeddings/
```

### 3. 重启 ComfyUI

确保新 Embedding 被识别。

## 使用方法

### 在提示词中使用

```javascript
// 语法
<embedding:embedding_name>

// 示例
<embedding:easynegative>
<embedding:bad-hands-5>
```

### 使用位置

- **正向提示词**：增强特定效果
- **负向提示词**：避免问题

## 常用 Embedding 推荐

### 负向 Embedding

| 名称 | 效果 | 适用场景 |
|------|------|----------|
| easynegative | 通用负面 | 日常使用 |
| bad-hands-5 | 修复手部 | 人物 |
| ng_deepnegative_v1_75t | 强力负面 | 高质量 |
| fast_negative_v2 | 快速负面 | 加速 |

### 正向 Embedding

| 名称 | 效果 |
|------|------|
| easypositive | 增强正面细节 |
| veryoku | 通用正向 |
| masterpiece | 质量增强 |

## 结合使用

### 提示词示例

```
正向：
1girl, portrait, beautiful face, detailed eyes,
<embedding:easypositive>, masterpiece

负向：
<embedding:easynegative>, <embedding:bad-hands-5>,
deformed, blurry
```

## 创建自定义 Embedding

### 使用 WebUI 训练

1. 在 WebUI 中打开训练标签页
2. 选择 Textual Inversion
3. 准备训练图片
4. 开始训练

### 导出到 ComfyUI

训练完成后：
1. 找到 Embedding 文件
2. 复制到 ComfyUI 的 embeddings 目录

## 高级技巧

### 权重调整

```javascript
<embedding:name:1.5>  // 增强效果
<embedding:name:0.8>  // 减弱效果
```

### 组合使用

```
<embedding:negative1> AND <embedding:negative2>
```

## 常见问题

### Q: Embedding 不生效

**A**: 检查文件名是否匹配，使用正确的语法。

### Q: 效果不明显

**A**: 尝试调整权重，或使用不同的 Embedding。

### Q: 显存不足

**A**: Embedding 很小，通常不会导致显存问题。

## 下一步

- [LoRA 使用](./lora) - 使用 LoRA 风格模型
- [提示词基础](./prompt-basic) - 提示词技巧