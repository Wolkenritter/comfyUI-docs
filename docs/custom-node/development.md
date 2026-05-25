# 自定义节点开发

本指南详细介绍如何开发自己的 ComfyUI 自定义节点。

## 开发环境

### 基础要求

| 要求 | 说明 |
|------|------|
| Python | 3.10+ |
| ComfyUI | 最新版本 |
| pip | 包管理 |

### 推荐工具

- VS Code / PyCharm - 代码编辑
- Git - 版本控制
- Python 虚拟环境 - 环境隔离

## 项目结构

### 标准结构

```
my_custom_node/
├── __init__.py              # 模块初始化
├── pyproject.toml          # 项目配置
├── README.md               # 说明文档
├── requirements.txt        # 依赖列表
└── nodes/                  # 节点代码
    ├── __init__.py
    ├── basic_node.py      # 基础节点
    ├── image_node.py      # 图像节点
    └── utils.py           # 工具函数
```

### 最简结构

```
my_node/
├── __init__.py
└── node_file.py
```

## 基础节点开发

### Hello World 示例

```python
# __init__.py
from .hello_node import NODE_CLASS_MAPPINGS, NODE_DISPLAY_NAME_MAPPINGS

__all__ = [
    'NODE_CLASS_MAPPINGS',
    'NODE_DISPLAY_NAME_MAPPINGS'
]
```

```python
# hello_node.py
from typing import Tuple

class HelloWorldNode:
    """简单的 Hello World 节点"""

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "text": ("STRING", {"default": "Hello, World!"}),
            }
        }

    RETURN_TYPES = ("STRING",)
    FUNCTION = "say_hello"
    CATEGORY = "custom/examples"

    def say_hello(self, text: str) -> Tuple[str]:
        print(f"[HelloNode] {text}")
        return (text,)

NODE_CLASS_MAPPINGS = {
    "HelloWorldNode": HelloWorldNode
}

NODE_DISPLAY_NAME_MAPPINGS = {
    "HelloWorldNode": "Hello World"
}
```

### 运行测试

1. 将节点目录放入 `custom_nodes/`
2. 重启 ComfyUI
3. 双击画布搜索 "Hello World"
4. 添加节点，输入文本，查看输出

## 图像处理节点

### 基础图像节点

```python
# image_node.py
import torch
import numpy as np
from typing import Tuple

def tensor_to_numpy(tensor: torch.Tensor) -> np.ndarray:
    """Tensor 转 NumPy"""
    if len(tensor.shape) == 4:
        tensor = tensor[0]
    return tensor.cpu().numpy()

def numpy_to_tensor(array: np.ndarray) -> torch.Tensor:
    """NumPy 转 Tensor"""
    if len(array.shape) == 3:
        array = array[np.newaxis, ...]
    return torch.from_numpy(array)

class BrightnessNode:
    """调整图像亮度"""

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "image": ("IMAGE",),
                "brightness": ("FLOAT", {
                    "default": 1.0,
                    "min": 0.0,
                    "max": 2.0,
                    "step": 0.1
                }),
            }
        }

    RETURN_TYPES = ("IMAGE",)
    FUNCTION = "adjust_brightness"
    CATEGORY = "custom/image"

    def adjust_brightness(self, image, brightness):
        # 转换格式
        img = tensor_to_numpy(image)

        # 调整亮度
        img = np.clip(img * brightness, 0, 1)

        # 转回 Tensor
        result = numpy_to_tensor(img)

        return (result,)
```

### 带遮罩的节点

```python
class BlendNode:
    """混合两张图像"""

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "image1": ("IMAGE",),
                "image2": ("IMAGE",),
                "alpha": ("FLOAT", {
                    "default": 0.5,
                    "min": 0.0,
                    "max": 1.0
                }),
            }
        }

    RETURN_TYPES = ("IMAGE",)
    FUNCTION = "blend_images"
    CATEGORY = "custom/image"

    def blend_images(self, image1, image2, alpha):
        # 确保尺寸一致
        if image1.shape[1:3] != image2.shape[1:3]:
            # 需要添加缩放逻辑
            pass

        # 混合
        result = image1 * (1 - alpha) + image2 * alpha

        return (result,)
```

## 复杂节点示例

### 自定义采样器

```python
class CustomSamplerNode:
    """自定义采样器节点"""

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "model": ("MODEL",),
                "positive": ("CONDITIONING",),
                "negative": ("CONDITIONING",),
                "latent_image": ("LATENT",),
                "seed": ("INT", {"default": 0}),
                "steps": ("INT", {"default": 20, "min": 1}),
                "cfg": ("FLOAT", {"default": 8.0}),
                "sampler_name": (["euler", "dpmpp_2m", "ddim"],),
            }
        }

    RETURN_TYPES = ("LATENT",)
    FUNCTION = "custom_sample"
    CATEGORY = "custom/sampling"

    @torch.no_grad()
    def custom_sample(self, model, positive, negative,
                     latent_image, seed, steps, cfg, sampler_name):
        # 生成噪声
        torch.manual_seed(seed)
        noise = torch.randn_like(latent_image["samples"])

        # 这里简化处理，实际需要完整采样逻辑
        result = model.apply_model(latent_image, ...)  # 简化

        return ({"samples": result},)
```

### 区域处理节点

```python
class RegionProcessNode:
    """区域处理节点"""

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "image": ("IMAGE",),
                "x": ("INT", {"default": 0}),
                "y": ("INT", {"default": 0}),
                "width": ("INT", {"default": 256}),
                "height": ("INT", {"default": 256}),
            },
            "optional": {
                "operation": (["brightness", "blur", "sharpen"],),
            }
        }

    RETURN_TYPES = ("IMAGE",)
    FUNCTION = "process_region"
    CATEGORY = "custom/image"

    def process_region(self, image, x, y, width, height, operation="brightness"):
        h, w = image.shape[1:3]

        # 边界检查
        x = min(x, w - 1)
        y = min(y, h - 1)
        width = min(width, w - x)
        height = min(height, h - y)

        # 提取区域
        region = image[:, y:y+height, x:x+width, :]

        # 应用操作
        if operation == "blur":
            # 简单的模糊处理
            kernel_size = 5
            kernel = torch.ones(1, 1, kernel_size, kernel_size) / (kernel_size ** 2)
            region = torch.nn.functional.conv2d(
                region.permute(0, 3, 1, 2),
                kernel.repeat(region.shape[-1], 1, 1, 1),
                padding=kernel_size//2,
                groups=region.shape[-1]
            ).permute(0, 2, 3, 1)

        return (image,)
```

## 高级特性

### 节点状态

```python
class StatefulNode:
    """带状态的节点"""

    def __init__(self):
        self.cache = {}

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "data": ("STRING",),
            }
        }

    RETURN_TYPES = ("STRING",)
    FUNCTION = "process_with_cache"
    CATEGORY = "custom/advanced"

    def process_with_cache(self, data):
        if data in self.cache:
            print(f"Using cached result for: {data}")
            return (self.cache[data],)

        # 处理
        result = f"Processed: {data}"
        self.cache[data] = result

        return (result,)
```

### 异步处理

```python
import asyncio

class AsyncNode:
    """异步处理节点"""

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "image": ("IMAGE",),
                "delay": ("INT", {"default": 1}),
            }
        }

    RETURN_TYPES = ("IMAGE",)
    FUNCTION = "async_process"
    CATEGORY = "custom/advanced"

    async def async_process(self, image, delay):
        # 模拟异步操作
        await asyncio.sleep(delay)

        return (image,)
```

### 自定义 UI

```python
class CustomUINode:
    """自定义 UI 节点"""

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "image": ("IMAGE",),
                "mode": (["default", "advanced", "expert"],),
            }
        }

    # 自定义 UI 标题
    def get_title(self):
        return "Custom Node"

    # 自定义侧边栏宽度
    @classmethod
    def get_sidebar(cls):
        return ["200px", "400px"]

    RETURN_TYPES = ("IMAGE",)
    FUNCTION = "process"
    CATEGORY = "custom"

    def process(self, image, mode):
        return (image,)
```

## 调试技巧

### 日志输出

```python
import logging

logger = logging.getLogger(__name__)

class DebugNode:
    @classmethod
    def INPUT_TYPES(cls):
        return {"required": {"image": ("IMAGE",)}}

    RETURN_TYPES = ("IMAGE",)
    FUNCTION = "debug"
    CATEGORY = "custom/debug"

    def debug(self, image):
        logger.info(f"Input shape: {image.shape}")
        logger.info(f"Input dtype: {image.dtype}")
        logger.info(f"Value range: {image.min()} ~ {image.max()}")

        # 打印张量详情
        logger.debug(f"Full tensor: {image}")

        return (image,)
```

### 错误处理

```python
class SafeNode:
    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "image": ("IMAGE",),
                "scale": ("FLOAT", {"min": 0.1}),
            }
        }

    RETURN_TYPES = ("IMAGE",)
    FUNCTION = "safe_process"
    CATEGORY = "custom"

    def safe_process(self, image, scale):
        try:
            result = image * scale
            return (result,)

        except Exception as e:
            logger.error(f"Error processing: {e}")
            # 返回原始图像或空结果
            raise ValueError(f"Processing failed: {e}")
```

## 测试

### 单元测试

```python
# test_node.py
import pytest
import torch
from nodes.hello_node import HelloWorldNode

def test_hello_world():
    node = HelloWorldNode()
    result = node.say_hello("Test")
    assert result == ("Test",)

def test_image_processing():
    # 创建测试图像
    test_image = torch.rand(1, 64, 64, 3)

    node = BrightnessNode()
    result = node.adjust_brightness(test_image, 1.5)

    assert result.shape == test_image.shape
```

### 运行测试

```bash
pytest test_node.py -v
```

## 发布节点

### GitHub 发布

1. 创建仓库
2. 添加 README.md
3. 设置许可证
4. 添加 requirements.txt

### README 模板

```markdown
# My Custom Node

## 安装

```bash
git clone https://github.com/username/my-custom-node.git
cd my-custom-node
pip install -r requirements.txt
```

## 功能

- 功能 1
- 功能 2

## 使用方法

1. 在 ComfyUI 中添加节点
2. 配置参数
3. 运行

## 依赖

- Python 3.10+
- numpy
- torch

## 许可证

MIT License
```

## 下一步

- [节点参考](/node/) - 内置节点详解
- [工作流示例](/workflow/) - 实用工作流