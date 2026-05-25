# 设置指南

本指南详细介绍 ComfyUI 的各种设置选项，帮助您优化使用体验和性能。

## 设置界面

点击右上角的 ⚙️ 图标或通过菜单访问设置。

### 设置分类

- **基础设置** - 基本功能和界面
- **性能设置** - 显存和性能优化
- **显卡设置** - GPU 相关配置
- **文件输出** - 输出路径和格式
- **快捷键** - 自定义快捷键

## 基础设置

### 模型加载

| 设置 | 选项 | 说明 |
|------|------|------|
| auto_set_sdtxt | ON/OFF | 自动设置文本编码器 |
| cache_model_warmup | ON/OFF | 启动时预加载模型 |

### 界面显示

| 设置 | 选项 | 说明 |
|------|------|------|
| theme | light/dark/system | 界面主题 |
| node_size | small/medium/large | 节点大小 |
| snap_to_grid | ON/OFF | 节点对齐网格 |
| grid_size | number | 网格大小 |

### 语言设置

ComfyUI 支持多语言界面。

#### 切换语言

1. 打开设置
2. 找到 Language 选项
3. 选择 `简体中文` 或其他语言

## 性能设置

### 显存模式

根据您的显卡选择合适的模式：

| 模式 | 显存需求 | 速度 | 说明 |
|------|----------|------|------|
| Normal | 高 | 最快 | 默认模式 |
| Balanced | 中 | 较快 | 平衡模式 |
| Low | 低 | 较慢 | 低显存模式 |
| Automatic | 自动 | - | 自动检测 |

### VRAM 优化

| 设置 | 说明 |
|------|------|
| model_autosave | 模型自动保存 |
| vram_usage_mode | VRAM 使用模式 |

### CPU 模式

如无 GPU，可启用 CPU 模式：

```
⚠️ 注意：CPU 模式非常慢，仅建议测试使用
```

### 批处理设置

| 设置 | 默认值 | 说明 |
|------|--------|------|
| max_batch_size | 16 | 最大批处理数量 |
| async_loading | ON | 异步加载 |

## 显卡设置

### NVIDIA 显卡

| 设置 | 说明 |
|------|------|
| cuda_device | CUDA 设备编号 |
| cuda_num_threads | CUDA 线程数 |
| flash_attention | ON/OFF | 启用 Flash Attention |

#### Flash Attention

启用后可以加速某些操作并节省显存：

- 适合 RTX 30xx 及更新显卡
- 需要 CUDA 11.6+
- 可能不兼容所有模型

### AMD 显卡 (ROCm)

| 设置 | 说明 |
|------|------|
| use_amd | 启用 AMD 加速 |
| rocm_device | ROCm 设备编号 |

### Apple Silicon (MPS)

| 设置 | 说明 |
|------|------|
| use_mps | 启用 Metal 加速 |
| force_fp16 | 强制使用半精度 |

### Intel 显卡

| 设置 | 说明 |
|------|------|
| use_ipx | 启用 IPEX 加速 |

## 文件输出设置

### 输出路径

| 设置 | 默认值 | 说明 |
|------|--------|------|
| output_directory | `./output` | 输出目录 |
| temp_directory | `./temp` | 临时文件目录 |

### 图像格式

| 设置 | 选项 | 说明 |
|------|------|------|
| format | PNG/JPEG/WEBP | 输出格式 |
| quality | 0-100 | JPEG 质量 |
| lossless | ON/OFF | 无损压缩 |
| metadata | workflow/comfy | 元数据类型 |

### 图像命名

| 设置 | 说明 |
|------|------|
| filename_pattern | 命名模式 |
| filename_number_padding | 数字补零 |

#### 命名模式示例

```
{timestamp}           → 20240115_143052
{index}               → 00001
{node}                → checkpoint_name
{workflow}            → workflow_name
```

### 预览设置

| 设置 | 说明 |
|------|------|
| preview_method | 预览方式 |
| max_preview_size | 最大预览尺寸 |

## 快捷键设置

### 默认快捷键

| 操作 | 快捷键 |
|------|--------|
| 添加节点 | 双击画布 |
| 保存 | Ctrl+S |
| 打开 | Ctrl+O |
| 撤销 | Ctrl+Z |
| 重做 | Ctrl+Y |
| 删除 | Delete |
| 复制 | Ctrl+D |
| 全选 | Ctrl+A |
| 缩放 | 滚轮 |
| 平移 | 空格+拖拽 |

### 自定义快捷键

打开设置 → 快捷键，绑定自定义操作：

```javascript
{
  "add_node": "Space",
  "save": "Ctrl+S",
  "queue": "Ctrl+Enter",
  "toggle_sidebar": "Tab"
}
```

### 节点快捷键

为常用节点绑定快捷键：

```
K → KSampler
L → Load Checkpoint
S → Save Image
```

## 高级设置

### 内存管理

| 设置 | 说明 |
|------|------|
| unload_models_after_generation | 生成后卸载模型 |
| model_cleanup_mode | 模型清理模式 |
| force_fp16_optimization | 强制 FP16 优化 |

### 推理设置

| 设置 | 默认值 | 说明 |
|------|--------|------|
| vae_on_cpu | OFF | VAE 在 CPU 运行 |
| intermediate_precision | fp16 | 中间计算精度 |

### 模型格式

| 设置 | 说明 |
|------|------|
| prefer_safetensors | 优先使用 .safetensors |
| auto_download_models | 自动下载模型 |

## 配置文件

ComfyUI 的配置文件位于：

### Windows

```
C:\Users\<用户名>\AppData\Roaming\ComfyUI\
```

### macOS / Linux

```
~/.config/ComfyUI/
```

### 配置文件列表

| 文件 | 说明 |
|------|------|
| `config.json` | 主配置文件 |
| `extra_model_paths.yaml` | 外部模型路径 |
| `custom_nodes/` | 自定义节点 |
| `models/` | 模型目录 |

## 环境变量

### 常用环境变量

| 变量 | 说明 | 示例 |
|------|------|------|
| `COMFYUI_ROOT` | ComfyUI 根目录 | `E:\ComfyUI` |
| `PIP_INDEX_URL` | PyPI 镜像 | `https://pypi.tuna.tsinghua.edu.cn/simple` |
| `TRANSFORMERS_CACHE` | 模型缓存目录 | `D:\cache\huggingface` |

### 设置环境变量

#### Windows (PowerShell)

```powershell
$env:COMFYUI_ROOT = "E:\ComfyUI"
$env:PIP_INDEX_URL = "https://pypi.tuna.tsinghua.edu.cn/simple"
```

#### Linux / macOS

```bash
export COMFYUI_ROOT="/path/to/comfyui"
export PIP_INDEX_URL="https://pypi.tuna.tsinghua.edu.cn/simple"
```

## 外部模型路径

通过 `extra_model_paths.yaml` 配置外部模型目录：

```yaml
# extra_model_paths.yaml
comfyui:
  models: D:/AI/ComfyUI/models
  checkpoints: D:/AI/stable-diffusion-webui/models/Stable-diffusion
  vae: D:/AI/stable-diffusion-webui/models/VAE
  loras: D:/AI/stable-diffusion-webui/models/Lora
```

这样可以共享其他工具（如 SD WebUI）的模型。

## 常见问题

### 显存不足

1. 降低 VRAM 模式到 "Low"
2. 减少批量大小
3. 使用更小的分辨率
4. 启用 "model offloading"

### 模型加载慢

1. 将模型放在 SSD
2. 使用 .safetensors 格式
3. 启用模型预加载
4. 检查硬盘健康

### 设置不生效

1. 重启 ComfyUI
2. 清除缓存（删除 `temp/` 目录）
3. 检查配置文件语法

### 配置文件损坏

删除 `config.json`，ComfyUI 会自动创建默认配置。

## 性能优化建议

### 显卡设置

| 优化项 | 推荐值 |
|--------|--------|
| VRAM 模式 | Balanced |
| Flash Attention | ON (如支持) |
| 模型卸载 | OFF (频繁使用) / ON (偶尔使用) |

### 批处理

| 优化项 | 推荐值 |
|--------|--------|
| batch_size | 1-4 (显存允许可更高) |
| async_loading | ON |

### 输出设置

| 优化项 | 推荐值 |
|--------|--------|
| 预览尺寸 | 512x512 |
| 输出格式 | PNG (质量) / JPEG (速度) |
| 命名模式 | 简单模式 |

## 重置设置

如需恢复默认设置：

1. 关闭 ComfyUI
2. 删除或重命名 `config.json`
3. 重启 ComfyUI

## 下一步

- [安装指南](./installation) - 安装与配置
- [界面设置](./interface) - 界面操作
- [节点指南](/node/) - 节点使用
