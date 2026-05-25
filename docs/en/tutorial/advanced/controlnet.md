# ControlNet Tutorial

Learn to install and use ControlNet.

## What is ControlNet

ControlNet provides additional input control for image generation:

- Edge detection
- Pose detection
- Depth mapping

## Installation

### Download Models

```
ComfyUI/models/controlnet/
control_v11p_sd15_canny.pth    # Canny
control_v11p_sd15_depth.pth    # Depth
control_v11p_sd15_openpose.pth # OpenPose
```

### Download Preprocessor Models

Install via ComfyUI Manager:

```
comfyui_controlnet_aux
```

Contains:
- Canny
- Depth (MiDaS)
- OpenPose
- Normal

## Basic Workflow

```
┌─────────────┐    ┌─────────────┐
│ LoadImage   │ →  │ Preprocess  │ → ControlNet
│ (input)     │    │ (Canny/etc) │
└─────────────┘    └─────────────┘
                        ↓
┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│ CLIPTextEn │ →  │ KSampler    │ ←  │ ControlNet │
│ code       │    │             │    │ Apply      │
└─────────────┘    └─────────────┘    └─────────────┘
                                           ↑
┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│ Checkpoint  │    │ EmptyLatent│    │ ControlNet │
│ Loader      │    │ Image      │    │ Loader     │
└─────────────┘    └─────────────┘    └─────────────┘
```

## Parameters

### Strength

| Value | Effect |
|-------|--------|
| 0.0-0.3 | Slight influence |
| 0.4-0.6 | Balanced |
| 0.7-1.0 | Strong control |

### Start/End

| Setting | Effect |
|--------|--------|
| start=0, end=1 | Full control |
| start=0.2, end=0.8 | Mid control |

## Control Types

### Canny

Edge detection:

```bash
# Threshold settings
low: 100, high: 200

# Use case
- Keep structure
- Product outlines
- Architecture
```

### Depth

Depth map:

```bash
# Model: MiDaS
# Use case
- 3D scenes
- Person composition
- Building structure
```

### OpenPose

Pose detection:

```bash
# Detection types
- body: Body keypoints
- face: Face keypoints
- hand: Hand keypoints

# Use case
- Character poses
- Action scenes
- Dance poses
```

## Tips

### Preprocessing

1. Use appropriate resolution
2. Adjust thresholds
3. Preview results before generation

### Combined Use

Multiple ControlNets:

```
ControlNet1 (Canny) → Combine → KSampler
ControlNet2 (Depth) → Combine    ↑
```

## Troubleshooting

### Q: ControlNet not working

**A**: Check model is loaded correctly.

### Q: Too much control

**A**: Lower strength to 0.3-0.5.

## Next Steps

- [Canny Control](./controlnet-canny) - Edge control
- [Depth Control](./controlnet-depth) - Depth control
- [OpenPose](./controlnet-openpose) - Pose control