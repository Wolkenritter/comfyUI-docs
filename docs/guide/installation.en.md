# Installation Guide

ComfyUI supports multiple installation methods. Choose the one that best fits your needs and technical level.

## System Requirements

### Minimum Requirements
- **OS**: Windows 10/11, macOS 10.15+, Linux
- **RAM**: 8GB
- **GPU**: NVIDIA GPU with 4GB+ VRAM (recommended)
- **Storage**: 20GB+ free space

### Recommended Configuration
- **RAM**: 16GB+
- **GPU**: NVIDIA GPU with 8GB+ VRAM (RTX 3070 or higher)
- **Storage**: SSD for faster loading

## Windows Installation

### Method 1: Portable Version (Recommended for Beginners)

1. Visit [ComfyUI GitHub Releases](https://github.com/comfyanonymous/ComfyUI/releases)
2. Download the latest Windows portable archive (`*_windows_amd64_cu121*.7z`)
3. Extract to your desired location
4. Run `run_nvidia_gpu.bat` (NVIDIA GPU) or `run_cpu.bat` (CPU only)

### Method 2: Git Clone

```bash
# Clone repository
git clone https://github.com/comfyanonymous/ComfyUI.git

# Enter directory
cd ComfyUI

# Install dependencies (recommended to create a virtual environment first)
pip install -r requirements.txt
```

### Method 3: Using Manager

[ComfyUI Manager](https://github.com/ltdrdata/ComfyUI-Manager) provides a graphical interface for installation and updates:

1. Install ComfyUI (any method)
2. Download Manager:
   ```bash
   cd custom_nodes
   git clone https://github.com/ltdrdata/ComfyUI-Manager.git
   ```
3. Restart ComfyUI, you'll see the Manager entry in the interface

## macOS Installation

### Apple Silicon (M1/M2/M3)

```bash
# Clone repository
git clone https://github.com/comfyanonymous/ComfyUI.git
cd ComfyUI

# Create virtual environment (recommended)
python3 -m venv venv
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt
```

Run: `./run_mps.sh` or `python3 main.py --force-fp16`

### Intel Mac

For Intel Mac, consider using [RyzenAI](https://github.com/rk132/RyzenAI) or CPU-only mode.

## Linux Installation

### Basic Installation

```bash
# Clone repository
git clone https://github.com/comfyanonymous/ComfyUI.git
cd ComfyUI

# Install system dependencies (Ubuntu/Debian)
sudo apt update
sudo apt install python3 python3-pip python3-venv

# Create virtual environment and install
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

### NVIDIA GPU Configuration

Ensure CUDA drivers are installed:

```bash
# Check driver
nvidia-smi

# Install CUDA (example: CUDA 12.1)
wget https://developer.download.nvidia.com/compute/cuda/repos/ubuntu2204/x86_64/cuda-keyring_1.0-1_all.deb
sudo dpkg -i cuda-keyring_1.0-1_all.deb
sudo apt update
sudo apt install cuda-12-1
```

## Verify Installation

After installation, start ComfyUI with:

- **Windows**: Double-click `run_nvidia_gpu.bat`
- **macOS/Linux**: Run `./run_nvidia_gpu.sh` or `./run_cpu.sh`

Visit http://127.0.0.1:8188 . If you see the ComfyUI interface, the installation is successful.

## Initial Configuration

### Download Models

ComfyUI doesn't include models by default. You need to download separately:

1. **Base Models**: Download from [Civitai](https://civitai.com/) or [Hugging Face](https://huggingface.co/models?other=stable-diffusion)
2. **Placement**: Usually in `models/checkpoints/` directory

### Model Directory Structure

```
ComfyUI/
├── models/
│   ├── checkpoints/      # Base models (SD1.5, SDXL)
│   ├── vae/              # VAE models
│   ├── loras/             # LoRA models
│   ├── controlnet/        # ControlNet models
│   ├── embeddings/        # Textual Inversion embeddings
│   └── upscale_models/    # Super-resolution models
```

## Troubleshooting

### Q: "CUDA out of memory" error on startup

**A**: Try reducing batch size or use smaller models. You can also enable "Low VRAM mode" in settings.

### Q: Missing Visual Studio Build Tools

**A**: Windows users need to install [Visual Studio Build Tools](https://visualstudio.microsoft.com/downloads/#build-tools-for-visual-studio-2022), select "C++ build tools".

### Q: pip install fails

**A**: Ensure you're using Python 3.10-3.11, avoid Python 3.12.

## Next Steps

After installation, continue reading:

- [Interface Guide](/guide/interface-basic) - Learn interface layout and basic operations
- [Node Reference](/comfyui-nodes/) - Master node workflows