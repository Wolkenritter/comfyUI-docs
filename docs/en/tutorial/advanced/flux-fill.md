# Flux Fill Tutorial

Learn to use Flux Fill for inpainting and outpainting.

## What is Flux Fill

Flux Fill is Flux's native inpainting/outpainting model, providing high-quality area editing.

## Installation

### Required Files

```
ComfyUI/models/unet/
  flux1-schnell-fill-dev.safetensors  # Fill model

ComfyUI/models/vae/
  flux_vae.safetensors
```

## Fill Workflow

### Basic Inpainting

```
[LoadImage + Mask] → [VAEEncode (with mask)] → [FluxTextEncoder] → [FluxSampler] → [VAEDecode] → [SaveImage]
```

### With Mask Input

Flux Fill uses image+mask as input:
- Original image defines content
- Mask defines area to regenerate

## Parameters

### Flux Sampler Settings

| Parameter | Value | Description |
|-----------|-------|-------------|
| Steps | 4-8 | Schnell is fast |
| CFG | 1.0-3.5 | Lower than T2I |
| Denoise | 0.5-0.9 | Blend strength |

### Mask Settings

| Parameter | Effect |
|-----------|--------|
| Denoise high | More changes |
| Denoise low | Subtle edits |
| Soft edges | Natural blend |

## Use Cases

### Object Removal

```
Input: Image with unwanted object
Mask: Cover object
Prompt: "clean background, no object"
Result: Object removed
```

### Object Addition

```
Input: Image
Mask: Area to add to
Prompt: "add a red vase on the table"
Result: Vase added naturally
```

### Scene Extension

```
Input: Landscape image
Mask: Sky area to expand
Prompt: "expansive sky with dramatic clouds"
Result: Extended scene
```

## Tips

1. **Mask quality**: Clean edges for natural results
2. **Prompt specificity**: Describe what you want clearly
3. **Denoise balance**: Adjust for subtle vs major changes

## Prompt Examples

### Inpainting

```bash
# Object removal
remove the person, clean background, seamless

# Style change
change to oil painting style, artistic

# Content addition
add a wooden table with books
```

### Outpainting

```bash
# Extend scene
continuation of landscape, mountains in distance

# Add elements
add ocean horizon with sunset

# Style match
maintain the same lighting and style
```

## Next Steps

- [Flux I2I](./flux-i2i) - Image to image
- [Flux T2I](./flux-t2i) - Text to image
- [Inpainting Basics](./inpainting) - General inpainting