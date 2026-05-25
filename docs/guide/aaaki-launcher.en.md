# Qiuye Launcher Guide

Visual launcher for ComfyUI, popular among Chinese users.

## About Qiuye Launcher

A third-party launcher providing:
- Visual interface
- One-click model management
- Built-in node manager
- Easy updates

## Download

Search "秋叶 ComfyUI 启动器" on Bilibili or visit the author's homepage.

## Installation

### Step 1: Download Launcher Package

Download the compressed package from the author's page.

### Step 2: Extract

Extract to your desired location (recommended: D:\ComfyUI or ~/ComfyUI).

### Step 3: Launch

Double-click `秋叶启动器.exe` or `AakiUI.exe`.

## Interface

```
┌─────────────────────────────────────────────────────┐
│  ComfyUI Launcher                                   │
├─────────────────────────────────────────────────────┤
│ [Start] [Stop] [Update] [Settings]                  │
├─────────────────────────────────────────────────────┤
│                                                     │
│  ┌─────────────────────────────────────────────┐   │
│  │                                             │   │
│  │              Status Panel                   │   │
│  │                                             │   │
│  └─────────────────────────────────────────────┘   │
│                                                     │
├─────────────────────────────────────────────────────┤
│  [模型管理]  [节点管理]  [设置]  [工作流]          │
└─────────────────────────────────────────────────────┘
```

## Features

### Model Management

| Feature | Description |
|---------|-------------|
| Browse Models | View available models |
| Download | One-click model download |
| Import | Import external models |
| Cleanup | Remove unused models |

### Node Management

| Feature | Description |
|---------|-------------|
| Install | One-click node installation |
| Update | Update existing nodes |
| Disable | Disable problematic nodes |
| Remove | Uninstall nodes |

### Settings

| Setting | Description |
|---------|-------------|
| VRAM Mode | Optimize for low VRAM |
| Port | Change default port |
| Auto-start | Launch on system startup |
| Theme | Light/Dark mode |

## Update

### Check for Updates

1. Click the update button
2. Download latest version
3. Replace files (backup first)

### Manual Update

1. Download from author page
2. Backup current installation
3. Extract new version
4. Copy custom_nodes and models

## Common Issues

### Q: Cannot start ComfyUI

**A**: 
- Check if port 8188 is occupied
- Verify GPU driver is installed
- Run as administrator

### Q: Model download fails

**A**:
- Check internet connection
- Try with VPN
- Download models manually

### Q: Node installation fails

**A**:
- Check Git is installed
- Verify internet connection
- Try manual installation

## Comparison

| Feature | Qiuye Launcher | Git Install |
|---------|-----------------|-------------|
| Difficulty | Easy | Medium |
| Updates | One-click | Manual |
| Model Management | Built-in | Manual |
| Customization | Limited | Full |
| Portability | Portable | Flexible |

## Next Steps

- [Installation Guide](./installation) - Other installation methods
- [Model Installation](./model-install) - Model management