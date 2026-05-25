# ControlNet - Canny Edge

Learn to use Canny edge ControlNet.

## What is Canny ControlNet

Canny edge detection extracts edges from input image, providing structure guidance for generation.

## Installation

### Download ControlNet Model

```
ComfyUI/models/controlnet/
  control_v11p_sd15_canny.pth
```

### Download Preprocessor

ComfyUI usually includes preprocessors in:
```
ComfyUI/custom_nodes/comfyui_controlnet_aux/
```

## Workflow

```
[LoadImage] → [CannyEdgePreprocessor] → [ControlNet] → [Apply ControlNet]
                                    ↑
[CLIPTextEncode(positive)] → [KSampler] ← [CLIPTextEncode(negative)]
```

## Parameters

### Canny Preprocessor

| Parameter | Description | Recommended |
|-----------|-------------|-------------|
| Low Threshold | Lower edge detection | 100-150 |
| High Threshold | Upper edge detection | 200-250 |

Lower values detect more edges (potential noise).
Higher values detect only strong edges.

### ControlNet Settings

| Parameter | Description | Recommended |
|-----------|-------------|-------------|
| Strength | Control intensity | 0.5-0.8 |
| Start | Begin control at step | 0.0 |
| End | End control at step | 1.0 |

## Use Cases

### Architecture

```bash
# Prompt
modern building exterior, glass facade, clean design, professional photography

# Input
Floor plan or line drawing
```

### Product Design

```bash
# Prompt
sleek smartphone design, white, minimal, product photography

# Input
Product sketch or outline
```

### Character Line Art

```bash
# Prompt
beautiful woman, detailed face, portrait

# Input
Line art drawing
```

## Tips

1. **Threshold adjustment**: Start with 100/200, adjust based on results
2. **Edge quality**: Use clean, clear input images
3. **Strength balance**: Too high can flatten details

## Common Issues

| Issue | Solution |
|-------|----------|
| Too many edges | Increase threshold |
| Too few edges | Decrease threshold |
| Style too rigid | Lower strength to 0.3-0.5 |

## Next Steps

- [ControlNet Depth](./controlnet-depth) - Depth control
- [ControlNet OpenPose](./controlnet-openpose) - Pose control
- [Multi-ControlNet](./multi-controlnet) - Combine multiple