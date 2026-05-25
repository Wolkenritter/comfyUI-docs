# Git Installation Guide

Install ComfyUI using Git for better version control and updates.

## Prerequisites

- Git installed: https://git-scm.com/download
- Python 3.10-3.11
- NVIDIA GPU with CUDA support

## Installation Steps

### Step 1: Install Git

#### Windows

1. Download from https://git-scm.com/download/win
2. Run installer with default options
3. Restart terminal

#### macOS

```bash
# Install Homebrew if not installed
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Install Git
brew install git
```

#### Linux

```bash
# Ubuntu/Debian
sudo apt update && sudo apt install git

# Fedora
sudo dnf install git
```

### Step 2: Clone Repository

```bash
# Navigate to desired directory
cd ~/projects

# Clone ComfyUI
git clone https://github.com/comfyanonymous/ComfyUI.git

# Enter directory
cd ComfyUI
```

### Step 3: Create Virtual Environment (Recommended)

```bash
# Create virtual environment
python -m venv venv

# Activate
# Windows:
.\venv\Scripts\activate

# macOS/Linux:
source venv/bin/activate
```

### Step 4: Install Dependencies

```bash
# Install with pip
pip install -r requirements.txt

# For NVIDIA GPU (ensure CUDA is installed)
pip install torch torchvision --index-url https://download.pytorch.org/whl/cu121
```

### Step 5: Run ComfyUI

```bash
# Windows
.\run_nvidia_gpu.bat

# macOS
./run_mps.sh

# Linux
./run_nvidia_gpu.sh
```

Visit http://127.0.0.1:8188

## Update ComfyUI

### Pull Latest Changes

```bash
# Navigate to ComfyUI directory
cd ComfyUI

# Activate virtual environment
source venv/bin/activate  # or .\venv\Scripts\activate on Windows

# Pull updates
git pull

# Reinstall dependencies if needed
pip install -r requirements.txt
```

### Manage Branches

```bash
# Check current branch
git branch

# List all branches
git branch -a

# Switch to stable branch
git checkout stable

# Switch to latest
git checkout master
```

## Troubleshooting

### Q: "git" command not found

**A**: Restart terminal or add Git to PATH. On Windows, reinstall with "Git from command line" option checked.

### Q: Requirements installation fails

**A**: 
- Update pip: `python -m pip install --upgrade pip`
- Install Visual Studio Build Tools (Windows)
- Check Python version: `python --version`

### Q: torch not found after update

**A**: Reinstall torch with specific CUDA version.

## Directory Structure

```
ComfyUI/
├── main.py              # Main entry point
├── run_nvidia_gpu.bat   # Windows launcher
├── run_cpu.bat          # CPU launcher
├── requirements.txt     # Python dependencies
├── custom_nodes/        # Custom node extensions
└── models/              # Model files (create manually)
```

## Next Steps

- [Installation Guide](./installation) - More installation methods
- [Model Installation](./model-install) - Install models