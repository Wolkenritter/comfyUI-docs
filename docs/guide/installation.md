# 安装指南

ComfyUI 支持多种安装方式，您可以根据自己的需求和技术水平选择合适的方法。

## 系统要求

### 最低配置
- **操作系统**: Windows 10/11, macOS 10.15+, Linux
- **内存**: 8GB RAM
- **显卡**: NVIDIA GPU with 4GB+ VRAM (推荐)
- **硬盘空间**: 20GB+ 可用空间

### 推荐配置
- **内存**: 16GB+ RAM
- **显卡**: NVIDIA GPU with 8GB+ VRAM (RTX 3070 或更高)
- **硬盘**: SSD 以提升加载速度

## Windows 安装

### 方法一：便携版（推荐新手）

1. 访问 [ComfyUI GitHub Releases](https://github.com/comfyanonymous/ComfyUI/releases)
2. 下载最新的 Windows 便携版压缩包（`*_windows_amd64_cu121*.7z`）
3. 解压到您想要的位置
4. 运行 `run_nvidia_gpu.bat`（NVIDIA 显卡）或 `run_cpu.bat`（仅 CPU）

### 方法二：Git 克隆安装

```bash
# 克隆仓库
git clone https://github.com/comfyanonymous/ComfyUI.git

# 进入目录
cd ComfyUI

# 安装依赖（如使用独立 Python 环境，建议先创建虚拟环境）
pip install -r requirements.txt
```

### 方法三：使用 Manager 管理器

[ComfyUI Manager](https://github.com/ltdrdata/ComfyUI-Manager) 提供了图形化的安装和更新界面：

1. 安装 ComfyUI（任意方式）
2. 下载 Manager：
   ```bash
   cd custom_nodes
   git clone https://github.com/ltdrdata/ComfyUI-Manager.git
   ```
3. 重启 ComfyUI，即可在界面中看到 Manager 入口

## macOS 安装

### Apple Silicon (M1/M2/M3)

```bash
# 克隆仓库
git clone https://github.com/comfyanonymous/ComfyUI.git
cd ComfyUI

# 创建虚拟环境（推荐）
python3 -m venv venv
source venv/bin/activate

# 安装依赖
pip install -r requirements.txt
```

运行：`./run_mps.sh` 或 `python3 main.py --force-fp16`

### Intel Mac

对于 Intel Mac，建议使用 [RyzenAI](https://github.com/rk132/RyzenAI) 或仅 CPU 模式运行。

## Linux 安装

### 基础安装

```bash
# 克隆仓库
git clone https://github.com/comfyanonymous/ComfyUI.git
cd ComfyUI

# 安装系统依赖（Ubuntu/Debian）
sudo apt update
sudo apt install python3 python3-pip python3-venv

# 创建虚拟环境并安装
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

### NVIDIA 显卡配置

确保已安装 CUDA 驱动：

```bash
# 检查驱动
nvidia-smi

# 如需安装 CUDA（以 CUDA 12.1 为例）
wget https://developer.download.nvidia.com/compute/cuda/repos/ubuntu2204/x86_64/cuda-keyring_1.0-1_all.deb
sudo dpkg -i cuda-keyring_1.0-1_all.deb
sudo apt update
sudo apt install cuda-12-1
```

## 验证安装

安装完成后，运行以下命令启动 ComfyUI：

- **Windows**: 双击 `run_nvidia_gpu.bat`
- **macOS/Linux**: 运行 `./run_nvidia_gpu.sh` 或 `./run_cpu.sh`

访问 http://127.0.0.1:8188 ，如果看到 ComfyUI 界面即表示安装成功。

## 首次配置

### 下载模型

ComfyUI 本身不包含模型，需要额外下载：

1. **基础模型**: 从 [Civitai](https://civitai.com/) 或 [Hugging Face](https://huggingface.co/models?other=stable-diffusion) 下载
2. **放置位置**: 通常放在 `models/checkpoints/` 目录

### 模型目录结构

```
ComfyUI/
├── models/
│   ├── checkpoints/      # 基础模型（如 SD1.5, SDXL）
│   ├── vae/               # VAE 模型
│   ├── loras/             # LoRA 模型
│   ├── controlnet/        # ControlNet 模型
│   ├── embeddings/        # Textual Inversion 嵌入
│   └── upscale_models/    # 超分辨率模型
```

## 常见问题

### Q: 启动时报错 "CUDA out of memory"

**A**: 尝试减小批量大小（Batch Size）或使用更小的模型。也可在设置中启用 "VRAM usage mode" 为低显存模式。

### Q: 缺少 Visual Studio Build Tools

**A**: Windows 用户需要安装 [Visual Studio Build Tools](https://visualstudio.microsoft.com/downloads/#build-tools-for-visual-studio-2022)，选择 "C++ 生成工具"。

### Q: pip install 失败

**A**: 确保使用 Python 3.10-3.11 版本，避免使用 Python 3.12。

## 下一步

安装完成后，建议继续阅读：

- [界面设置指南](/guide/interface) - 了解界面布局和基本操作
- [节点指南](/node/) - 掌握节点工作流程
