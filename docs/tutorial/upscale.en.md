# Upscale (Resolution Enhancement)

Increase image resolution and quality.

## Why Upscale

| Need | Solution |
|------|----------|
| Larger print | Upscale to 4K+ |
| Better quality | Enhance details |
| Fix low res | Recover quality |

## Upscale Methods

### Method 1: Ultimate SD Upscale

Most popular method in ComfyUI.

#### Workflow

```
┌─────────────┐    ┌─────────────────┐    ┌─────────────┐
│ LoadImage   │ →  │ UltimateSD     │ →  │ SaveImage   │
│             │    │ Upscale       │    │             │
└─────────────┘    └─────────────────┘    └─────────────┘
```

#### Parameters

| Parameter | Value | Description |
|-----------|-------|-------------|
| upscale_by | 2.0 | Scale factor |
| seed | any | Random seed |
| steps | 20-30 | Sampling |
| denoise | 0.4-0.6 | Low for upscaling |

### Method 2: Image Scale + SD

Scale first, then refine.

```
LoadImage → ImageScale → VAEEncode → KSampler → VAEDecode → SaveImage
```

### Method 3: Hires Fix (2-pass)

#### First Pass (Base)

```
Create base image at lower resolution
Steps: 20-30, CFG: 7-8
Size: 512x512
```

#### Second Pass (Upscale)

```
Upscale to target resolution
Steps: 15-25, CFG: 6-7
Denoise: 0.4-0.6
Size: 1024x1024
```

## Upscale Models

### Recommended Models

| Model | Scale | Use Case |
|-------|-------|----------|
| 4x-UltraSharp | 4x | Universal |
| RealESRGAN_x4plus | 4x | General |
| RealESRGAN_x4plus_anime | 4x | Anime |

### Download Models

Install in: `models/upscale_models/`

## Parameters Guide

### Denoise Strength

| Value | Effect |
|-------|--------|
| 0.2-0.4 | Light upscale, keep original |
| 0.4-0.6 | Balanced |
| 0.6-0.8 | More changes, may alter content |

### Sampling Steps

| Steps | Quality | Speed |
|-------|---------|-------|
| 10-15 | Fast preview | Quick |
| 20-30 | Standard | Medium |
| 35-50 | High quality | Slower |

### Scale Factor

| Scale | Use Case |
|-------|----------|
| 1.5x | Subtle enhancement |
| 2x | Standard upscale |
| 4x | Maximum quality |

## Common Workflows

### Basic Upscale

```
1. LoadImage
2. UltimateSDUpscale
   - upscale_by: 2
   - denoise: 0.5
3. SaveImage
```

### 4x Upscale

```
1. LoadImage
2. ImageScale (4x)
3. UltimateSDUpscale
   - denoise: 0.5
4. SaveImage
```

### Face Enhancement

```
1. LoadImage
2. UltimateSDUpscale (2x)
3. FaceDetailer (optional)
4. UltimateSDUpscale (2x)
5. SaveImage
```

## Tile-based Upscaling

For large images or limited VRAM.

### Parameters

| Parameter | Value | Description |
|-----------|-------|-------------|
| tile_size | 512-768 | Size of tiles |
| tile_padding | 64-128 | Overlap for blending |

### How it works

```
1. Split image into tiles
2. Upscale each tile
3. Blend edges
4. Stitch back together
```

## Tips and Tricks

### Before Upscaling

1. **Start with good quality** - Best base = best result
2. **Fix issues first** - Correct problems before upscale
3. **Use appropriate model** - Match image style

### During Upscaling

1. **Lower denoise** - Preserves original look
2. **Match scale** - Don't over-scale
3. **Multiple passes** - 2x twice instead of 4x once

### Best Practices

- Upscale in stages (2x → 2x) for very large targets
- Use 4x model for 2x upscale to add details
- Adjust tile_size based on VRAM

## Troubleshooting

### Q: Out of memory

**A**:
- Reduce tile_size
- Use fp16 models
- Lower resolution

### Q: Artifacts

**A**:
- Lower denoise
- Use different model
- Reduce scale factor

### Q: Blurry result

**A**:
- Increase denoise
- Use better upscale model
- Add quality tags

## Next Steps

- [LoRA](./lora) - Style models
- [ControlNet](../tutorial/advanced/controlnet) - Advanced features