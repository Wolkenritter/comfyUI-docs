# ControlNet Models

Structure control models.

## Model Types

### Edge Detection

| Model | Description |
|-------|-------------|
| canny | Canny edge detection |
| hed | HED edge detection |
| lineart | Line art extraction |

### Depth Estimation

| Model | Description |
|-------|-------------|
| depth | MiDaS depth estimation |
| depth_leres | LeReS depth |
| normal | Normal map |

### Pose Detection

| Model | Description |
|-------|-------------|
| openpose | OpenPose skeleton |
| dw_openpose | Dense pose |

### Others

| Model | Description |
|-------|-------------|
| scribble | Scribble input |
| tile | Tiling control |
| inpaint | Inpainting control |

## Download Locations

### Hugging Face

```
models/controlnet/
  control_v11p_sd15_canny.pth
  control_v11f1p_sd15_depth.pth
  control_v11p_sd15_openpose.pth
```

### Civitai

[ControlNet collection](https://civitai.com/models?type=controlnet)

## Installation

```
ComfyUI/models/controlnet/
  control_v11p_sd15_canny.pth
  control_v11f1p_sd15_depth.pth
  control_v11p_sd15_openpose.pth
```

## Preprocessor Models

Some ControlNets need additional models:

```
ComfyUI/custom_nodes/comfyui_controlnet_aux/
  models/
    midas/
    openpose/
    anything/
```

## Model Versions

### For SD 1.5

- control_v11p_sd15_*.pth

### For SD 2.x

- control_v11f1e_sd15_tile.pth
- control_v11d_sd15_canny.pth

### For SDXL

- sdxl_controlnet/*.pth

## Tips

1. **Match model version**: Use correct ControlNet for your base
2. **Download preprocessors**: Some need additional models
3. **Check requirements**: Some need specific custom nodes

## Next Steps

- [Custom Nodes](../resource/custom-nodes) - Required nodes
- [Upscale Models](./upscale-models) - Resolution enhancement