# Multi-ControlNet

Combine multiple ControlNets for better control.

## Why Multi-ControlNet

Combine different control types:
- Structure + Pose
- Edge + Depth
- More precise control

## Workflow

```
[Image A] → [Preprocessor A] → [ControlNet A] ─┐
                                                 ├→ [Apply ControlNets] → [KSampler]
[Image B] → [Preprocessor B] → [ControlNet B] ─┘
                                    ↑
[CLIPTextEncode(positive)]
[CLIPTextEncode(negative)]
```

## Common Combinations

### Pose + Edge

```
OpenPose → Character pose
Canny → Clothing/outline
```

### Depth + Canny

```
Depth → 3D structure
Canny → Edge details
```

### Pose + Depth

```
OpenPose → Character position
Depth → Scene composition
```

## Parameters

### ControlNet Weights

| ControlNet | Weight | Start | End |
|------------|--------|-------|-----|
| Pose | 0.7 | 0.0 | 0.8 |
| Canny | 0.5 | 0.3 | 1.0 |

### Balance

Adjust weights based on importance:
- Higher weight = more influence
- Lower start = earlier control
- Lower end = stop earlier

## Implementation

### Node Setup

```
1. Load multiple images
2. Apply different preprocessors
3. Connect to separate ControlNet nodes
4. Combine in Multi-ControlNet or manually
```

### Control Settings

```javascript
// Example settings
ControlNet 1 (Pose):
  strength: 0.8
  start: 0.0
  end: 0.7

ControlNet 2 (Canny):
  strength: 0.6
  start: 0.2
  end: 1.0
```

## Tips

1. **Order matters**: Different results based on order
2. **Strength balance**: Adjust to find right balance
3. **Start/end timing**: Control when each applies

## Use Cases

### Character with Scene

- OpenPose for character
- Depth for environment
- Combined for cohesive result

### Architecture Detail

- Depth for structure
- Canny for fine edges
- Best for building/ interiors

### Complex Scenes

- Multiple poses
- Multiple depth maps
- Highest control level

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Too controlling | Lower weights |
| Conflicting controls | Adjust timing |
| Artifacts | Balance strengths |

## Next Steps

- [ControlNet Index](../controlnet) - All ControlNet tutorials
- [Flux ControlNet](./flux-controlnet) - Use with Flux