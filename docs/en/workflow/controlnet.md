# ControlNet Workflow

Use ControlNet for structure control.

## What is ControlNet

ControlNet provides additional control over image generation using:
- Edge detection
- Pose detection
- Depth mapping

## Basic Workflow

```
┌─────────────┐    ┌─────────────┐
│ LoadImage   │ →  │ Preprocess  │ → ControlNet
│ (control)  │    │ (Canny/etc) │
└─────────────┘    └─────────────┘
                        ↓
┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│ CLIPTextEn │ →  │ KSampler    │ ←  │ ApplyContro│
│ code       │    │             │    │ lNet       │
└─────────────┘    └─────────────┘    └─────────────┘
                                           ↑
┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│ Checkpoint  │    │ EmptyLatent│    │ ControlNet │
│ Loader      │    │ Image      │    │ Loader     │
└─────────────┘    └─────────────┘    └─────────────┘
```

## Control Types

### Canny

Edge detection for structure:

```
Input: Edge map
Effect: Keeps outlines
Best for: Architecture, products
```

### Depth

3D structure:

```
Input: Depth map
Effect: Maintains depth
Best for: Scenes, compositions
```

### OpenPose

Pose control:

```
Input: Skeleton
Effect: Character pose
Best for: Character images
```

## Parameters

### Strength

| Value | Effect |
|-------|--------|
| 0.3-0.5 | Subtle influence |
| 0.6-0.8 | Balanced |
| 0.9-1.2 | Strong control |

### Start/End

| Setting | Effect |
|--------|--------|
| 0.0 - 1.0 | Full control |
| 0.0 - 0.7 | Stop early |

## Tips

1. **Preview preprocessor**: Check result before generating
2. **Adjust strength**: Find balance for your needs
3. **Combine ControlNets**: Use multiple for complex control

## Next Steps

- [Canny Control](./controlnet-canny) - Edge control
- [Depth Control](./controlnet-depth) - Depth control
- [OpenPose Control](./controlnet-openpose) - Pose control