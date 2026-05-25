# ComfyUI Desktop

Official desktop application for ComfyUI.

## Download

Visit the official website: https://www.comfy.org/zh-CN

### System Requirements

| Component | Requirement |
|-----------|-------------|
| OS | Windows 10/11, macOS 10.15+, Linux |
| GPU | NVIDIA with 6GB+ VRAM |
| RAM | 8GB+ |
| Storage | 10GB+ free space |

## Installation

### Windows

1. Download the installer from the official website
2. Run the `.exe` installer
3. Follow the installation wizard
4. Launch from Start Menu

### macOS

1. Download the `.dmg` file
2. Drag to Applications folder
3. Launch from Launchpad

### Linux

1. Download the AppImage
2. Make executable: `chmod +x ComfyUI-linux-amd64.AppImage`
3. Run: `./ComfyUI-linux-amd64.AppImage`

## Features

### Advantages

| Feature | Description |
|---------|-------------|
| One-click update | Automatic updates |
| GUI Manager | Visual node management |
| Built-in model management | Easy model installation |
| Cross-platform | Windows, Mac, Linux |

### Interface

```
┌─────────────────────────────────────────────────────┐
│  ComfyUI Desktop                                    │
├─────────────────────────────────────────────────────┤
│  [File] [Edit] [View] [Tools] [Help]                │
├─────────────────────────────────────────────────────┤
│                                                     │
│              Canvas Area                             │
│                                                     │
├──────────┬───────────────────────────────────────────┤
│ Workflow │  Node Library                             │
│ Panel    │  - Load                                   │
│          │  - Save                                   │
│          │  - Recent                                │
└──────────┴───────────────────────────────────────────┘
```

## Update

### Check for Updates

1. Click Help → Check for Updates
2. Or click the update icon in toolbar

### Automatic Updates

Desktop version will notify when new versions are available.

## Troubleshooting

### Q: GPU not detected

**A**: 
- Ensure NVIDIA driver is installed
- Check if CUDA is properly configured
- Restart the application

### Q: Update failed

**A**:
- Check internet connection
- Try manual download from GitHub
- Backup your workflows before updating

### Q: Model download stuck

**A**:
- Check network connection
- Try with VPN
- Download models manually

## Next Steps

- [Installation Guide](./installation) - Full installation guide
- [Interface Guide](./interface-basic) - Learn the interface