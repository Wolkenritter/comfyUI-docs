# 与WebUI共用模型

让你的 ComfyUI 和 Stable Diffusion WebUI 共用同一个模型目录。

## 为什么要共用模型

| 优势 | 说明 |
|------|------|
| 节省空间 | 不需要重复下载相同模型 |
| 方便管理 | 统一管理更简单 |
| 快速切换 | 可以使用 WebUI 的模型 |

## 配置方法

### 1. 创建配置文件

在 ComfyUI 根目录创建 `extra_model_paths.yaml`

### 2. 编辑配置

Windows 示例（WebUI 在 D 盘）：

```yaml
base_path: D:/AI/stable-diffusion-webui
```

Mac/Linux 示例：

```yaml
base_path: /Users/name/stable-diffusion-webui
```

### 3. 重启 ComfyUI

配置生效后，自动加载 WebUI 的模型。

## 目录映射

配置后自动映射以下目录：

| WebUI 目录 | ComfyUI 目录 |
|------------|-------------|
| models/Stable-diffusion | models/checkpoints |
| models/VAE | models/vae |
| models/Lora | models/loras |
| models/ControlNet | models/controlnet |
| embeddings | models/embeddings |

## 验证配置

1. 在 ComfyUI 中打开 Checkpoint Loader
2. 检查下拉列表是否包含 WebUI 的模型
3. 加载一个模型测试

## 常见问题

### Q: 模型不显示

**A**: 检查路径是否正确，确保斜杠方向正确（Windows 用 `/` 或 `\\`）。

### Q: 路径包含中文

**A**: 尽量使用英文路径，避免问题。

### Q: 部分模型不显示

**A**: 确认 WebUI 目录结构是否标准。

## 下一步

- [安装不同类型模型](./install-models) - 了解更多模型安装
- [模型资源](../resource/models) - 推荐模型下载