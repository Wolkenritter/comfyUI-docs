# 实用工具节点

常用工具节点合集。

## 常用节点包

### KJNodes

全面的工具节点集合。

**安装**: 通过 Manager 安装 `ComfyUI-KJNodes`

#### 核心节点

| 节点 | 说明 |
|------|------|
| GetValue | 获取变量值 |
| SetValue | 设置变量 |
| IntToString | 整数转字符串 |
| StringToNumber | 字符串转数字 |
| FloatToInt | 浮点转整数 |
| BooleanToNumber | 布尔转数值 |

#### 流程控制

| 节点 | 说明 |
|------|------|
| Note | 备注节点 |
| Route | 路由 |
| SplitPath | 路径分割 |

### WAS Node Suite

多功能工具节点。

**安装**: 通过 Manager 安装 `was-node-suite-comfyui`

#### 图像工具

| 节点 | 说明 |
|------|------|
| Image Resize | 调整尺寸 |
| Image Crop | 裁剪 |
| Image Blend | 混合 |
| Image Threshold | 阈值 |

#### 文本工具

| 节点 | 说明 |
|------|------|
| Text Concatenate | 文本连接 |
| Text Find/Replace | 查找替换 |
| String Function | 字符串函数 |

## 变量节点

### SetVariable / GetVariable

设置和获取变量。

```javascript
// 设置
SetVariable(name: "my_seed", value: 1234)

// 获取
GetVariable(name: "my_seed") → KSampler(seed)
```

#### 用途

```
- 共享参数
- 条件逻辑
- 批量处理
```

### Counter

计数器，生成序列号。

```javascript
Counter(start: 0, step: 1)
// 输出: 0, 1, 2, 3, ...
```

#### 用途

```
- 批量命名
- 循环控制
- 编号生成
```

## 流程控制

### Note

备注节点，用于文档化。

```javascript
Note: "这是文生图工作流"
Note: """
提示词格式：
- 主语放前面
- 风格放后面
"""
```

### Router

路由节点，条件分支。

```javascript
Router(condition: "seed_even")
    → KSampler A (seed % 2 == 0)
    → KSampler B (seed % 2 != 0)
```

## 图像工具

### ImageBlend

图像混合。

```javascript
// 输入
image_a: 图像 A
image_b: 图像 B
mode: "add"  // add, subtract, multiply, screen, overlay
opacity: 0.5  // 0-1
```

#### 模式

| 模式 | 效果 |
|------|------|
| add | 叠加 |
| subtract | 减去 |
| multiply | 正片叠底 |
| screen | 滤色 |
| overlay | 叠加 |

### ImageResize

调整图像尺寸。

```javascript
// 参数
width: 1024
height: 1024
method: "bilinear"  // nearest, bilinear, lanczos
crop: true  // 是否裁剪适应
```

### ImageThreshold

阈值处理。

```javascript
value: 0.5  // 阈值
mode: "binary"  // binary, grayscale
```

## 数值工具

### Math Operations

数学运算。

| 节点 | 运算 |
|------|------|
| Add | 加 |
| Subtract | 减 |
| Multiply | 乘 |
| Divide | 除 |
| Power | 幂 |
| Modulo | 取模 |

### Random

随机数生成。

```javascript
min: 0
max: 100
seed: 1234
// 输出: 0-100 之间的随机数
```

## 文本工具

### Concatenate

文本连接。

```javascript
text_a: "Hello"
text_b: "World"
separator: " "
// 输出: "Hello World"
```

### Find/Replace

查找替换。

```javascript
text: "Hello World"
find: "World"
replace: "ComfyUI"
// 输出: "Hello ComfyUI"
```

### SplitText

分割文本。

```javascript
text: "a, b, c"
separator: ", "
// 输出: ["a", "b", "c"]
```

## 高级用法

### 参数共享

```
┌─────────────┐
│ SetVariable │
│ name: scale│
│ value: 512  │
└──────┬──────┘
       ↓
┌─────────────┐    ┌─────────────┐
│ GetVariable │    │ GetVariable │
│ name: scale │    │ name: scale │
└──────┬──────┘    └──────┬──────┘
       ↓                   ↓
┌─────────────┐    ┌─────────────┐
│ImageScale A │    │ImageScale B │
└─────────────┘    └─────────────┘
```

### 批量处理

```
Counter → SetFilenamePrefix
      → KSampler(seed)
      → SaveImage
```

## 常见问题

### Q: 节点搜索不到

**A**:
- 确认已安装
- 重启 ComfyUI
- 检查 custom_nodes 目录

### Q: 变量不生效

**A**: 确保在同一帧执行，变量跨帧无效。

## 下一步

- [界面指南](../../guide/interface-nodes) - 节点操作
- [工作流](../../workflow/) - 更多工作流