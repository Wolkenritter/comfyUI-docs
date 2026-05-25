# 自定义节点

ComfyUI 的扩展性极强，可以通过自定义节点添加新功能。本指南介绍自定义节点的创建、安装和使用。

## 自定义节点概述

### 什么是自定义节点？

自定义节点是 ComfyUI 官方未内置但由社区开发的扩展节点，提供额外的功能。

### 优势

| 特性 | 优势 |
|------|------|
| 功能扩展 | 添加官方没有的功能 |
| 效率提升 | 简化复杂工作流 |
| 社区支持 | 丰富的开源资源 |

## 常用自定义节点推荐

### 图像处理

| 节点 | 功能 | 安装方式 |
|------|------|----------|
| Impact Pack | 丰富的图像处理节点 | ComfyUI-Manager |
| was-node-suite | 多功能工具集合 | custom_nodes |
| ComfyUI-Advanced-ControlNet | 增强版 ControlNet | custom_nodes |

### 工作流增强

| 节点 | 功能 | 安装方式 |
|------|------|----------|
| ComfyUI Manager | 节点管理更新 | 必须安装 |
| ComfyUI_UltimateSDUpscale | 智能放大 | 内置/Manager |
| ComfyUI_FizzNodes | 序列/动画处理 | custom_nodes |

### 实用工具

| 节点 | 功能 | 安装方式 |
|------|------|----------|
| ImageInspect | 图像信息检查 | custom_nodes |
| AnyNode | 通用节点 | custom_nodes |
| PromptHelp | 提示词助手 | custom_nodes |

## 安装自定义节点

### 方法一：Git 克隆

```bash
# 进入 custom_nodes 目录
cd ComfyUI/custom_nodes

# 克隆节点仓库
git clone https://github.com/ltdrdata/ComfyUI-Manager.git

# 重启 ComfyUI
```

### 方法二：ComfyUI Manager

1. 安装 ComfyUI Manager
2. 打开 Manager 界面
3. 搜索并安装所需节点

### 方法三：手动下载

1. 下载节点压缩包
2. 解压到 `custom_nodes/` 目录
3. 重启 ComfyUI

## ComfyUI Manager 使用

### 安装 Manager

```bash
cd ComfyUI/custom_nodes
git clone https://github.com/ltdrdata/ComfyUI-Manager.git
```

### 界面说明

```
┌─────────────────────────────────────────┐
│  Manager                                │
├─────────────────────────────────────────┤
│  [Install Custom Nodes]  安装自定义节点 │
│  [Install Missing Nodes] 安装缺失节点   │
│  [Update All]           更新全部        │
│  [Install Models]       安装模型        │
├─────────────────────────────────────────┤
│  搜索框                                 │
└─────────────────────────────────────────┘
```

### 功能介绍

| 选项 | 功能 |
|------|------|
| Install Custom Nodes | 安装节点（浏览目录） |
| Install Missing Nodes | 一键安装缺失节点 |
| Update All | 更新所有已安装节点 |
| Install Models | 下载模型 |
| Clean Data | 清理缓存数据 |

## 热门节点详细说明

### ComfyUI-Manager

**功能**：管理和安装其他自定义节点的必装工具

**安装**
```bash
git clone https://github.com/ltdrdata/ComfyUI-Manager.git
```

**使用**
- 管理所有自定义节点
- 一键安装/更新/卸载
- 修复缺失依赖

### Impact Pack

**功能**：包含大量图像处理节点的综合包

**包含节点**

| 节点 | 功能 |
|------|------|
| FaceDetailer | 面部细节修复 |
| Detailer For AnimateDiff | 细节增强 |
| BboxDetectorForEach | 区域检测 |
| SAMDetector | 分割模型检测 |
| SegmentsMask | 区域遮罩处理 |
| KSampler Adv (AnimateDiff) | 动画采样器 |

**安装**：通过 Manager 安装

### was-node-suite

**功能**：多功能工具集合

**包含节点**

| 节点 | 功能 |
|------|------|
| VAE Decode Tiled | 分块解码 |
| Image Resize Relative | 相对缩放 |
| Image Blend Gulop | 混合模式 |
| Text Box Node | 文本框 |
| Image Crop by Bounds | 按边界裁剪 |
| LLM Completion | AI 文本生成 |

**安装**
```bash
git clone https://github.com/WASasquive/was-node-suite-comfyui.git
```

### Ultimate SD Upscale

**功能**：智能图像放大

**特点**
- 自动分块处理
- 边缘自然融合
- 多模型支持

**安装**：内置，无需额外安装

## 创建自定义节点

### 基本结构

```
ComfyUI/custom_nodes/
└── my_custom_node/
    ├── __init__.py           # 节点注册
    ├── my_node.py            # 节点实现
    └── requirements.txt      # 依赖
```

### 节点模板

```python
# __init__.py
from .my_node import NODE_CLASS_MAPPINGS, NODE_DISPLAY_NAME_MAPPINGS

__all__ = ['NODE_CLASS_MAPPINGS', 'NODE_DISPLAY_NAME_MAPPINGS']
```

```python
# my_node.py
import torch
from typing import Tuple

class MyCustomNode:
    """自定义节点类"""

    @classmethod
    def INPUT_TYPES(cls):
        """定义输入端口"""
        return {
            "required": {
                "image": ("IMAGE",),
                "scale": ("FLOAT", {"default": 2.0, "min": 1.0, "max": 4.0}),
            },
            "optional": {
                "mask": ("MASK",),
            }
        }

    RETURN_TYPES = ("IMAGE",)
    FUNCTION = "process_image"
    CATEGORY = "custom/image"

    def process_image(self, image, scale, mask=None):
        """处理逻辑"""
        # 实现图像处理
        return (processed_image,)

# 注册节点
NODE_CLASS_MAPPINGS = {
    "MyCustomNode": MyCustomNode
}

NODE_DISPLAY_NAME_MAPPINGS = {
    "MyCustomNode": "My Custom Node"
}
```

### 核心概念

#### INPUT_TYPES

定义节点的输入端口：

```python
@classmethod
def INPUT_TYPES(cls):
    return {
        "required": {           # 必需输入
            "param_name": (TYPE, options),
        },
        "optional": {           # 可选输入
            "param_name": (TYPE, options),
        },
        "hidden": {             # 隐藏参数
            "prompt": "PROMPT",
            "extra_pnginfo": "EXTRA_PNGINFO",
        }
    }
```

#### 返回类型

| 类型标识 | 说明 | 示例 |
|----------|------|------|
| IMAGE | 图像 | RGB(A) 张量 |
| MASK | 遮罩 | 灰度张量 |
| LATENT | 潜在空间 | 潜在表示 |
| MODEL | 模型 | CLIP/UNet 模型 |
| CONDITIONING | 条件 | 文本条件 |
| FLOAT | 浮点数 | 数值参数 |
| INT | 整数 | 数值参数 |
| STRING | 字符串 | 文本参数 |

#### FUNCTION

处理函数：

```python
def FUNCTION(self, **kwargs):
    """处理输入，返回结果"""
    input_data = kwargs.get("image")
    # 处理逻辑
    return (output_data,)
```

## 常用开发资源

### 官方文档

- [ComfyUI 节点开发文档](https://github.com/comfyanonymous/ComfyUI)
- [Python API 参考](https://docs.comfyui.com/)

### 社区资源

| 资源 | 说明 |
|------|------|
| ComfyUI Examples | 官方示例工作流 |
| ComfyUI Registry | 节点索引 |
| GitHub Topics | 按主题搜索 |

### 开发工具

| 工具 | 用途 |
|------|------|
| ComfyUI Portable | 便携开发环境 |
| custom_node_builder | 节点脚手架 |

## 节点调试

### 查看日志

```
ComfyUI/logs/
└── last_errors.log
```

### 常见错误

| 错误 | 解决方法 |
|------|----------|
| ModuleNotFoundError | 安装依赖 `pip install -r requirements.txt` |
| ImportError | 检查导入路径 |
| TypeError | 检查参数类型 |

### 调试技巧

```python
# 添加日志
import logging
logger = logging.getLogger(__name__)

def process_image(self, image, ...):
    logger.info(f"Processing image shape: {image.shape}")
    # 处理逻辑
```

## 发布节点

### 准备工作

1. 确保代码结构清晰
2. 编写 README 文档
3. 创建 requirements.txt
4. 添加许可证

### 发布平台

| 平台 | 说明 |
|------|------|
| GitHub | 主流托管平台 |
| Civitai | AI 资源平台 |
| ComfyUI Registry | 官方节点索引 |

## 下一步

- [节点参考](/node/) - 内置节点详解
- [工作流示例](/workflow/) - 实用工作流