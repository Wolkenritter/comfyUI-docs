# Upscale Tutorial

Increase image resolution and quality.

## Why Upscale

- Higher resolution for print
- Better quality for large displays
- Enhance old/low-quality images
- Prepare for specific use cases

## Upscaling Methods

### Method 1: AI Upscale (Recommended)

Uses AI models for better quality.

```
Nodes needed:
- UltimateSDUpscale
- OR 4xUltraSharp
```

#### Workflow

```
[LoadImage] → [UltimateSDUpscale] → [SaveImage]
              ↑
[Model (upscale model)]
```

#### Parameters

| Parameter | Value | Description |
|-----------|-------|-------------|
| Scale | 2x, 4x | Upscale factor |
| Tile Size | 512, 768 | Processing size |
| Tile Padding | 64 | Overlap for blending |

### Method 2: Basic Upscale

Simple resize without enhancement.

```
Node: ImageScale
- mode: lanczos / bilinear
- scale: 2
```

### Method 3: Latent Upscale

Upscale in latent space, then decode.

```
[EmptyLatent (upscaled)] → [VAEDecode] → [SaveImage]
```

## Upscale Models

| Model | Use | Quality |
|-------|-----|---------|
| 4x-UltraSharp | Photos | Excellent |
| 4x-NickelSSR | Anime | Good |
| RealESRGAN | General | Good |
| SwinIR | Photos | Excellent |

## Step-by-Step: Ultimate SD Upscale

### Step 1: Load Image

```
LoadImage node
- Upload your image
```

### Step 2: Add Upscale Node

```
UltimateSDUpscale
- Load upscale model
- Set scale factor (2x recommended)
- Set tile size (512 or 768)
```

### Step 3: Configure

| Setting | Value |
|---------|-------|
| Scale | 2 |
| Tile Size | 512 |
| Tile Padding | 64 |
| Seam Fix | Enabled |
| Seam Resolution | 64 |

### Step 4: Generate

Click "Queue Prompt"

## Tips for Better Results

### Resolution Limits

| Original | Target | Recommended |
|----------|--------|-------------|
| 512x512 | 1024x1024 | 2x upscale |
| 512x512 | 2048x2048 | 4x (2x twice) |
| 768x768 | 1536x1536 | 2x |

### Memory Management

- Use smaller tiles if VRAM limited
- Process in sections for large images
- Use fp16 models to save memory

### Quality Improvement

1. Use dedicated upscale models
2. Apply at 2x first, then again if needed
3. Combine with denoising for enhancement

## Common Issues

| Issue | Solution |
|-------|----------|
| Out of memory | Reduce tile size |
| Artifacts | Enable seam fix |
| Too soft | Add slight denoise |
| Not sharp enough | Use sharper upscale model |

## Next Steps

- [Embedding](./embedding) - Improve quality with embeddings
- [LoRA](./lora) - Apply styles
- [Model Merging](../workflow/model-merging) - Combine models