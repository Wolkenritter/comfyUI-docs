# 云端运行 ComfyUI

如果没有本地 GPU，或想在任何设备上使用 ComfyUI，可以选择云端运行。

## 云平台推荐

### 1. RunComfy

官方推荐的云服务。

| 特点 | 说明 |
|------|------|
| 官方支持 | ComfyUI 官方出品 |
| 易用 | 浏览器直接访问 |
| 免费额度 | 有免费试用 |

访问地址：https://www.runcomfy.com/

### 2. ComfyUI Online

在线版 ComfyUI。

| 特点 | 说明 |
|------|------|
| 即用 | 无需配置 |
| 模型 | 内置多种模型 |
| 工作流 | 支持导入工作流 |

### 3. 其他云服务

| 平台 | 说明 |
|------|------|
| Modal | 按需计费 GPU |
| Vast.ai | 便宜 GPU 租赁 |
| Paperspace | 梯度平台 |

## API 调用

如果需要程序化调用，可以使用 ComfyUI 的 API。

### 启动 API 模式

```bash
# 命令行启动时添加 API 参数
python main.py --listen 0.0.0.0 --port 8188 --api
```

### 发送请求

```python
import requests
import json

# 工作流 JSON
workflow = {
    "3": {
        "inputs": {
            "ckpt_name": "v1-5-pruned.safetensors"
        },
        "class_type": "CheckpointLoaderSimple"
    }
}

# 发送请求
response = requests.post(
    "http://localhost:8188/prompt",
    json={"prompt": workflow}
)

print(response.json())
```

### 获取结果

```python
# 获取历史记录
history = requests.get("http://localhost:8188/history/{prompt_id}")
```

## 本地 API 配置

如果想在局域网内访问 ComfyUI：

### 1. 修改配置

```bash
python main.py --listen 0.0.0.0
```

### 2. 允许局域网访问

在设置中启用相关选项。

### 3. 防火墙设置

确保端口 8188 可访问。

## 注意事项

| 事项 | 说明 |
|------|------|
| 网络 | 需要稳定的网络连接 |
| 费用 | 云服务可能产生费用 |
| 数据安全 | 谨慎处理敏感数据 |
| 模型 | 注意云平台的模型许可 |

## 下一步

- [API 调用教程](../tutorial/api-usage) - 程序化使用 ComfyUI
- [工作流使用](../guide/interface-workflow) - 了解工作流