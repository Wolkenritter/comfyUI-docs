# KSampler 节点

核心采样器，负责生成过程。

## 节点信息

| 属性 | 说明 |
|------|------|
| 类别 | 采样器 |
| 输入 | MODEL, CONDITIONING(x2), LATENT |

## 输入

| 输入 | 类型 | 说明 |
|------|------|------|
| model | MODEL | 从 CheckpointLoader 获取 |
| positive | CONDITIONING | 正向条件 |
| negative | CONDITIONING | 负向条件 |
| latent_image | LATENT | 潜在空间图像 |

## 输出

| 输出 | 类型 | 说明 |
|------|------|------|
| LATENT | LATENT | 处理后的潜在空间 |

## 参数

### 基本参数

| 参数 | 类型 | 说明 | 范围 |
|------|------|------|------|
| seed | INT | 随机种子 | 0-18446744073709551615 |
| steps | INT | 采样步数 | 1-10000 |
| cfg | FLOAT | CFG 强度 | 0-100 |
| sampler_name | STRING | 采样器 | DPM++, Euler, etc. |
| scheduler | STRING | 调度器 | normal, karras, etc. |

### 参数详解

#### Seed（种子）

```
作用: 控制随机性
相同种子+相同参数 = 相同结果

技巧:
- 锁定种子复现结果
- 变化种子探索创意
- 使用 seed++ 批量生成
```

#### Steps（步数）

| 步数 | 质量 | 速度 | 适用 |
|------|------|------|------|
| 10-15 | 较低 | 快 | 快速预览 |
| 20-30 | 标准 | 中 | 日常使用 |
| 35-50 | 高 | 慢 | 重要作品 |

#### CFG（引导强度）

| CFG | 效果 |
|------|------|
| 1-5 | 创意自由，可能偏离提示 |
| 6-8 | 平衡，推荐 |
| 9-12 | 严格遵循提示 |
| 13+ | 过度，可能变形 |

## 采样器类型

### 常用采样器

| 采样器 | 特点 | 推荐场景 |
|--------|------|----------|
| DPM++ 2M | 平衡 | 通用 |
| DPM++ 2M Karras | 更平滑 | 高质量 |
| Euler | 快速 | 预览 |
| Euler a | 细节丰富 | 创意 |
| DDIM | 经典 | 稳定 |

### Karras 变体

```
特点: 噪声计划优化
优点: 更好的收敛
适用: 高质量需求
```

## 调度器

| 调度器 | 说明 |
|--------|------|
| normal | 标准调度 |
| karras | Karras 优化 |
| exponential | 指数衰减 |
| simple | 简单线性 |

## KSampler Advanced

### 额外参数

| 参数 | 说明 |
|------|------|
| start_at_step | 开始步数 |
| end_at_step | 结束步数 |
| return_with_leftover_noise | 保留噪声 |

### 使用技巧

#### 分步生成

```
start_at_step: 0
end_at_step: 15
→ 第一阶段：粗略生成

start_at_step: 15
end_at_step: 30
→ 第二阶段：精细调整
```

#### 噪声控制

```
return_with_leftover_noise: enable
→ 保留部分噪声，可继续处理
```

## 工作流示例

### 基础文生图

```
CheckpointLoader
     MODEL → KSampler(seed=1234, steps=20, cfg=7)
     CLIP → CLIPTextEncode(+) → KSampler
           → CLIPTextEncode(-)
     
EmptyLatentImage → KSampler
                        ↓
                   VAEDecode → SaveImage
```

### 图生图

```
LoadImage → VAEEncode → KSampler
                              ↓
                         VAEDecode → SaveImage
```

### 局部重绘

```
LoadImage → VAEEncode(MASK) → KSampler
                                    ↓
                               VAEDecode → SaveImage
```

## 常见问题

### Q: 生成结果全黑/全白

**A**:
- 检查提示词
- 降低 CFG 值
- 确认模型正常

### Q: 结果与提示词不符

**A**:
- 提高 CFG 值到 7-10
- 增加步数
- 优化提示词

### Q: 如何批量生成

**A**:
- 固定 seed 值改变其他参数
- 使用 seed++ 自动递增
- 调整 batch_size

## 下一步

- [VAEDecode](./latent) - 解码输出
- [EmptyLatentImage](./latent) - 创建 Latent