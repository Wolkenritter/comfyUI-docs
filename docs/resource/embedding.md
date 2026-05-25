# Embedding 文档

Embedding（文本嵌入/概念嵌入）是 ComfyUI 中的重要功能。

## 什么是 Embedding

Embedding 是一种小型模型，用于扩展提示词能力：

- 添加训练过的概念
- 触发特定风格/角色
- 简化长提示词

### 与 LoRA 的区别

| 特性 | Embedding | LoRA |
|------|-----------|------|
| 大小 | 几十 KB | 几十到几百 MB |
| 用途 | 概念/风格 | 整体风格/角色 |
| 加载 | 文本提示词 | 独立节点 |
| 效果 | 精准控制 | 全面影响 |

## Embedding 格式

| 格式 | 扩展名 | 说明 |
|------|--------|------|
| SD 1.5 | .pt, .bin, .safetensors | 通用 |
| SDXL | .safetensors (fp8) | SDXL 专用 |
| Torch | .pt, .pth | 经典格式 |

## 安装位置

```
ComfyUI/models/embeddings/
├── bad-hands-5.pt
├── easynegative.safetensors
└── ultra-detailed.pt
```

### 安装方法

```
方法 1: 手动下载放入
- 下载 .pt / .safetensors 文件
- 放入 embeddings 目录

方法 2: Manager 安装
- 通过 Manager 搜索安装
```

## 使用方法

### 基本语法

在提示词中引用：

```bash
# 格式: embedding:名称
# 或: <embedding:名称>

# 示例
1girl, beautiful, <embedding:easynegative>
```

### 调用 Embedding

```bash
# 负面 Embedding
embedding:easynegative

# 正面 Embedding
embedding:masterpiece

# 组合使用
1girl, beautiful, <embedding:masterpiece>, <embedding:ultra-detailed>
negative: <embedding:bad-hands-5>
```

## 推荐 Embedding

### 通用负面

| Embedding | 说明 | 效果 |
|-----------|------|------|
| easynegative | 综合负面 | 提升质量 |
| bad-hands-5 | 手部修复 | 改善手部 |
| bad-artist | 艺术风格 | 避免低质量 |
| bad-prompt | 通用负面 | 基础修复 |

### 质量增强

| Embedding | 说明 | 效果 |
|-----------|------|------|
| masterpiece | 杰作级别 | 提升质量 |
| best-quality | 最佳质量 | 高质量 |
| very-bad-hands-neg | 手部负面 | 修复手部 |
| deformed | 变形修复 | 避免变形 |

### 艺术家风格

| Embedding | 风格 |
|-----------|------|
| art by artstation | 艺术站风格 |
| art by greg-rutkowski | Greg 风格 |
| art by magdalena | 艺术风格 |

## 自定义 Embedding

### 训练 Embedding

使用 Textual Inversion 训练：

```
训练数据:
- 10-20 张同类图像
- 统一风格/角色

训练参数:
- 学习率: 0.00005
- 步数: 1000-5000
- 正则化: 可选
```

### 训练工具

| 工具 | 说明 |
|------|------|
| Stable Diffusion WebUI | 训练 Embedding |
| Kohya-ss | 训练脚本 |
| 自定义工具 | 按需选择 |

### Embedding 命名

```
推荐命名:
- concept_name.pt
- style_name.pt
- character_name.pt

避免:
- 中文名
- 特殊字符
- 过长的名字
```

## Embedding 技巧

### 组合使用

```
# 多 Embedding 组合
<embedding:masterpiece>, <embedding:easynegative>, <embedding:ultra-detailed>

效果: 综合提升质量
```

### 权重调整

```
# 调整强度（部分支持）
(embedding:name:0.8)

# 降低强度
(embedding:name:0.5)
```

### 负面使用

```
正向:
1girl, beautiful, <embedding:masterpiece>

负向:
<embedding:bad-hands-5>, <embedding:deformed>
```

## 常见问题

### Q: Embedding 不生效

**A**:
- 检查文件名是否正确
- 确认放在正确目录
- 重启 ComfyUI

### Q: 名称大小写

**A**: 大多数情况下不区分大小写，建议使用小写。

### Q: 如何卸载

**A**: 删除 embeddings 目录中的文件即可。

## 下一步

- [VAE 文档](./vae) - 编解码器说明
- [提示词教程](../tutorial/prompt-basic) - 提示词编写