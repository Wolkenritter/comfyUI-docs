# Custom Nodes

Custom node extensions for ComfyUI.

## Popular Custom Nodes

### Essential

| Node | Description | Install |
|------|-------------|---------|
| ComfyUI-Manager | Node management | Required |
| Impact Pack | Advanced features | Recommended |
| ControlNet Auxiliary | Preprocessors | For ControlNet |

### Image Processing

| Node | Description |
|------|-------------|
| LayerStyle | Photoshop effects |
| image-operations | Basic utilities |

### Advanced

| Node | Description |
|------|-------------|
| ComfyUI-K炼 | Advanced sampling |
| ComfyUI-Advanced-ControlNet | Extended ControlNet |

## Installation Methods

### Via ComfyUI Manager

1. Right-click → Manager
2. Click "Custom Nodes Manager"
3. Search and install

### Manual Installation

```bash
cd ComfyUI/custom_nodes
git clone <repository-url>
pip install -r requirements.txt
```

## ComfyUI-Manager

Must-have for easy management:

```
https://github.com/ltdrdata/ComfyUI-Manager
```

Features:
- Install/update custom nodes
- One-click model downloads
- Workflow import

## Impact Pack

Comprehensive toolkit:

```
https://github.com/ltdrdata/ComfyUI-Impact-Pack
```

Features:
- Face detailer
- Object detection
- Advanced masking

## ControlNet Auxiliary

Preprocessors for ControlNet:

```
https://github.com/KohyaBlender/comfyui_controlnet_aux
```

Preprocessors:
- Canny
- Depth (MiDaS)
- OpenPose
- Lineart

## Finding More Nodes

- [ComfyUI Registry](https://registry.comfy.org)
- [GitHub Search](https://github.com/search?q=comfyui)
- [Civitai](https://civitai.com)

## Next Steps

- [Official Resources](./official) - Official links
- [Resource Index](../) - All resources