# CLIP Text Encode 节点

将文本编码为模型可理解的向量。

## 节点信息

| 属性 | 说明 |
|------|------|
| 类别 | 文本处理 |
| 输入 | CLIP, text |

## 输入

| 输入 | 类型 | 说明 |
|------|------|------|
| clip | CLIP | 从 CheckpointLoader 获取 |
| text | STRING | 提示词文本 |

## 输出

| 输出 | 类型 | 说明 |
|------|------|------|
| CONDITIONING | CONDITIONING | 编码后的条件 |

## 使用方法

### 正向提示词

```
输入: a beautiful landscape, mountains, sunset
输出: 条件向量（正向引导）
```

### 负向提示词

```
输入: blurry, low quality, distorted, ugly
输出: 条件向量（负向引导）
```

### 完整工作流

```
CheckpointLoader
     CLIP → CLIPTextEncode(+) → KSampler
           → CLIPTextEncode(-)
```

## 提示词格式

### 基础格式

```
# 单一描述
a cat

# 多重描述
1 cat, sitting, orange color

# 分层描述
(1cat:1.2), (beautiful:1.1), (sitting:1.0)
```

### 权重语法

| 语法 | 效果 |
|------|------|
| (word:1.5) | 增强 50% |
| (word:0.5) | 减弱 50% |
| [word] | 降低权重 |
| word | 默认权重 1.0 |

### 负面提示词

```bash
# 常用负面
blurry, low quality, distorted, ugly, bad anatomy
extra fingers, deformed hands, poorly drawn face
```

## SDXL 版本

### CLIPTextEncodeSDXL

专为 SDXL 模型设计：

| 差异 | SD 1.5 | SDXL |
|------|--------|------|
| 编码器 | SD CLIP | SDXL CLIP |
| 支持长度 | 较长 | 更长 |
| 效果 | 标准 | 更好 |

### 双 CLIP

SDXL 有两个 CLIP 模型：

```
CLIPTextEncode (clip_l)
CLIPTextEncode (clip_g)
```

需要两个编码器分别编码，然后用 `Concat Conditionings` 合并。

## 进阶技巧

### 分段提示词

```
# 格式
前置内容 | 分隔符 | 背景内容

# 示例
1girl, beautiful face | , detailed background, flowers
```

### Embedding 引用

```bash
# 使用 Embedding
<embedding:easynegative>

# 组合
1girl, beautiful, <embedding:masterpiece>
negative: <embedding:bad-hands-5>
```

### 词汇替换

```
# 替换同义词
cat → feline
dog → canine
```

## 常见问题

### Q: 提示词不生效

**A**:
- 检查连接是否正确
- 尝试增加 CFG 值
- 简化提示词

### Q: 英文还是中文

**A**: ComfyUI 主要支持英文，中文支持有限。

### Q: 提示词太长

**A**: 
- 精简描述
- 使用权重强调重点
- 分段处理

## 下一步

- [KSampler](./sampler) - 采样器
- [CheckpointLoader](./checkpoint) - 模型加载