# ControlNet Nodes

Extended ControlNet functionality in ComfyUI.

## Required Nodes

### ControlNet Loader

Load ControlNet models.

```
Inputs:
  - model (from checkpoint)

Outputs:
  - CONTROL_NET

Parameters:
  - control_net_name: Selected model
```

### Apply ControlNet

Apply ControlNet to conditioning.

```
Inputs:
  - positive/negative conditioning
  - control_net
  - image (control image)

Outputs:
  - adjusted conditioning

Parameters:
  - strength: Control intensity (0-2)
  - start_percent: When to start (0-1)
  - end_percent: When to end (0-1)
```

## Preprocessors

### Available Preprocessors

| Preprocessor | Use For |
|--------------|---------|
| CannyEdge | Edge detection |
| DepthMap | Depth estimation |
| OpenPose | Pose detection |
| NormalMap | Surface normals |
| Lineart | Line drawing |
| SoftEdge | Soft edge detection |

### CannyEdge Preprocessor

```
Inputs:
  - image

Parameters:
  - low_threshold: 1-255
  - high_threshold: 1-255

Lower = more edges detected
```

### DepthMap Preprocessor

```
Inputs:
  - image

Parameters:
  - model: MiDaS variant

Models:
  - dpt_large: High quality
  - dpt_small: Fast
  - le_resnet: Outdoor scenes
```

## Workflow

### Basic Setup

```
[LoadImage] → [Preprocessor] → [ControlNet Loader]
                                    ↓
[Checkpoint] → [CLIPTextEncode] → [KSampler]
                 ↑                    ↑
[Apply ControlNet] ← [Conditioning]

KSampler → VAEDecode → SaveImage
```

### Advanced: Multiple ControlNets

```
[Image A] → [Preprocessor A] → [ControlNet A]
                                    ↓
[Image B] → [Preprocessor B] → [ControlNet B]
                                    ↓
                              Combine → KSampler
```

## Parameters Explained

### Strength

| Value | Effect |
|-------|--------|
| 0.3-0.5 | Subtle influence |
| 0.6-0.8 | Balanced |
| 0.9-1.2 | Strong control |

### Timing

| Start | End | Effect |
|-------|-----|--------|
| 0.0 | 1.0 | Full control throughout |
| 0.0 | 0.7 | Stop early |
| 0.3 | 1.0 | Start late |

## Common Use Cases

### Edge Control

```
Input: Canny edge map
Control: Canny ControlNet
Strength: 0.7-0.9

Use: Keep structure consistent
```

### Pose Control

```
Input: OpenPose skeleton
Control: OpenPose ControlNet
Strength: 0.6-0.85

Use: Character pose
```

### Depth Control

```
Input: Depth map
Control: Depth ControlNet
Strength: 0.6-0.9

Use: 3D scene composition
```

## Tips

1. **Preprocess first**: Preview preprocessed result
2. **Adjust thresholds**: Find right balance for your input
3. **Combine ControlNets**: Use multiple for complex control

## Next Steps

- [Impact Pack](./impact-pack) - Advanced features
- [LayerStyle](./layer-style) - Visual effects