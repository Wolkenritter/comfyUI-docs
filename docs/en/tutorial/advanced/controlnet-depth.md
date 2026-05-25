# ControlNet - Depth Map

Learn to use depth map ControlNet.

## What is Depth ControlNet

Uses depth map to provide 3D structure information, maintaining spatial relationships.

## Installation

### Download Model

```
ComfyUI/models/controlnet/
  control_v11f1p_sd15_depth.pth
```

### Preprocessor

Uses MiDaS for depth estimation:

```
comfyui_controlnet_aux/
  models/midas/
```

## Workflow

```
[LoadImage] → [DepthMapPreprocessor] → [ControlNet] → [Apply ControlNet]
                                    ↑
[CLIPTextEncode] → [KSampler] ← [CLIPTextEncode]
```

## Parameters

### Depth Preprocessor

| Preprocessor | Description |
|--------------|-------------|
| MiDaS (DPT-Large) | High quality, slower |
| MiDaS (DPT-Small) | Faster, less detailed |
| LeReS | Good for outdoors |

### ControlNet Settings

| Parameter | Recommended |
|-----------|-------------|
| Strength | 0.6-0.9 |
| Start | 0.0 |
| End | 1.0 |

## Use Cases

### 3D Scene Generation

```bash
# Prompt
cozy living room, modern furniture, warm lighting, interior design

# Input
Reference image or manually created depth
```

### Character Composition

```bash
# Prompt
beautiful woman standing in garden, detailed, 8k

# Input
Depth map from pose reference
```

### Architecture

```bash
# Prompt
modern architecture, concrete and glass, minimalist design

# Input
Depth from reference or sketch
```

## Creating Depth Maps

### Method 1: From Photo

Use preprocessor to generate from existing image.

### Method 2: Manual Creation

Create depth map manually (darker = further).

### Method 3: Using LoRA

Train depth LoRA for consistent depth patterns.

## Tips

1. **Depth quality**: Use high quality source images
2. **Combine with canny**: Can use both for better structure
3. **Adjust strength**: Higher for stronger structure influence

## Common Issues

| Issue | Solution |
|-------|----------|
| Flat depth | Check source image quality |
| Wrong perspective | Verify depth direction |
| Too controlling | Lower strength |

## Next Steps

- [ControlNet OpenPose](./controlnet-openpose) - Pose control
- [Canny ControlNet](./controlnet-canny) - Edge control
- [Multi-ControlNet](./multi-controlnet) - Combine controls