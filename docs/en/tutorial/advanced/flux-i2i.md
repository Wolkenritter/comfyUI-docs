# Flux Image-to-Image Tutorial

Learn to use Flux model for image-to-image generation.

## Image-to-Image Concept

Image-to-image generates new image based on existing image, preserving structure or style.

## Installation

### Required Models

```
ComfyUI/models/unet/
flux1-dev.safetensors    # Flux Dev

ComfyUI/models/vae/
flux_vae.safetensors     # Flux VAE
```

## Basic Workflow

```
┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│ LoadImage   │ →  │ VAEEncode  │ →  │ KSampler   │
│             │    │             │    │ (latent)   │
└─────────────┘    └─────────────┘    └─────────────┘
                                              │
┌─────────────┐    ┌─────────────┐    ┌──────┴──────┐
│ LoadCheckp  │ →  │ CLIPTextEn  │    │ VAEDecode  │
│ oint        │    │ code        │    │             │
└─────────────┘    └─────────────┘    └─────────────┘
```

## Key Parameters

### Denoise Strength

| Value | Effect |
|-------|--------|
| 0.1-0.3 | Slight change, preserve original |
| 0.4-0.6 | Moderate change |
| 0.7-0.9 | Major change |
| 1.0 | Complete regeneration |

### Recommended Settings

| Use Case | Denoise | Steps |
|----------|---------|-------|
| Style transfer | 0.4-0.6 | 20-30 |
| Detail adjustment | 0.2-0.4 | 20-30 |
| Creative redraw | 0.6-0.8 | 30-50 |

## Applications

### Style Transfer

Transform photo to art style:

```
Input: Portrait photo
Prompt: oil painting style, portrait, classical art
Denoise: 0.5-0.7
```

### Color Adjustment

Adjust image tone and atmosphere:

```
Input: Ordinary photo
Prompt: warm golden hour lighting, sunset colors, cinematic
Denoise: 0.3-0.5
```

### Scene Redraw

Change elements in scene:

```
Input: Indoor scene
Prompt: transform to outdoor garden, flowers and trees
Denoise: 0.6-0.8
```

## Prompt Tips

### Structure Preservation

Use "in the style of", "like":

```bash
a cat in the style of Studio Ghibli animation
a portrait like a vintage photograph
```

### Element Replacement

Describe elements to change:

```bash
Original: a person with short hair
Prompt: the same person with long hair, flowing
Denoise: 0.5
```

## Advanced

### With ControlNet

```
┌─────────────┐    ┌─────────────┐
│ LoadImage   │ →  │ ControlNet │
│ (reference)│    │ Preprocessor│
└─────────────┘    └──────┬──────┘
                          ↓
┌─────────────┐    ┌─────────────┐
│ KSampler    │ ←  │ ApplyContro│
│             │    │ lNet       │
└─────────────┘    └─────────────┘
```

## Troubleshooting

### Q: Original image deformed

**A**: Lower denoise to 0.3-0.5, or use ControlNet for structure.

### Q: Style not obvious

**A**: Increase denoise, use clearer style description.

### Q: Generation time too long

**A**: Use Schnell version, or reduce steps.

## Next Steps

- [Flux ControlNet](./flux-controlnet) - Using ControlNet
- [Inpainting](./inpainting) - Local repair tutorial