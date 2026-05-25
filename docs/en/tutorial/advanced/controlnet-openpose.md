# ControlNet - OpenPose

Learn to use pose detection ControlNet.

## What is OpenPose

OpenPose detects human body keypoints, allowing pose control in generation.

## Installation

### Download Model

```
ComfyUI/models/controlnet/
  control_v11p_sd15_openpose.pth
```

### Preprocessor Models

```
comfyui_controlnet_aux/
  models/openpose/
```

## Keypoint Detection Types

### Body Keypoints

| Keypoint | Description |
|----------|-------------|
| Nose | Head position |
| Eyes, Ears | Face direction |
| Shoulders | Upper body |
| Elbows, Wrists | Arms |
| Hips | Lower body |
| Knees, Ankles | Legs |

### Additional Detection

| Option | Description |
|--------|-------------|
| Face | Facial features |
| Hands | Hand keypoints |
| Whole Body | Full detection |

## Workflow

```
[LoadImage] → [OpenPosePreprocessor] → [ControlNet] → [Apply ControlNet]
                                    ↑
[CLIPTextEncode] → [KSampler] ← [CLIPTextEncode]
```

## Parameters

### OpenPose Preprocessor

| Parameter | Description |
|-----------|-------------|
| Detect | body / face / hand / full |
| Resolution | Detection quality |

### ControlNet Settings

| Parameter | Recommended |
|-----------|-------------|
| Strength | 0.6-0.85 |
| Start | 0.0 |
| End | 0.7 |

## Use Cases

### Character Poses

```bash
# Prompt
beautiful woman, standing pose, elegant dress, detailed

# Input
OpenPose from reference image
```

### Action Scenes

```bash
# Prompt
person dancing, dynamic pose, flowing dress, magical

# Input
Dance pose reference
```

### Fashion

```bash
# Prompt
model wearing summer dress, fashion photography

# Input
Fashion pose reference
```

## Creating Pose References

### Method 1: Photo

1. Take photo of person in desired pose
2. Run through OpenPose preprocessor
3. Use detected keypoints

### Method 2: Rendered Image

Use 3D pose software:
- Blender
- DAZ Studio
- Poser

### Method 3: Manual

Draw skeleton with keypoints (advanced).

## Tips

1. **Clear pose**: Use simple, clear references
2. **Multiple poses**: Combine different detections
3. **Strength adjustment**: Lower if too rigid

## Common Issues

| Issue | Solution |
|-------|----------|
| Missing keypoints | Use higher resolution |
| Wrong pose | Check source image quality |
| Too stiff | Lower end parameter |

## Next Steps

- [Multi-ControlNet](./multi-controlnet) - Combine with other ControlNets
- [Canny Control](./controlnet-canny) - Edge guidance
- [Depth Control](./controlnet-depth) - Structure control