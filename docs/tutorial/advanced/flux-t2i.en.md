# Flux Text-to-Image Tutorial

Learn to use Flux model for text-to-image generation.

## Flux Model Introduction

Flux is the latest image generation model by Black Forest Labs, with excellent prompt following.

### Model Versions

| Version | Features | Use Case |
|---------|----------|----------|
| Flux.1 Dev | Open source, high quality | Quality pursuit |
| Flux.1 Schnell | Fast, 4-8 steps | Quick preview |
| Flux.1 Pro | Closed API | Best results |

## Installation

### Download Models

```
ComfyUI/models/unet/
flux1-dev.safetensors    # Dev version (~23GB)
flux1-schnell.safetensors # Schnell version
```

### Download VAE

Flux needs separate VAE:

```
ComfyUI/models/vae/
flux_vae.safetensors     # Flux VAE
```

## Basic Workflow

```
┌─────────────┐    ┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│ LoadCheckp │ →  │ CLIPTextEn │ →  │ KSampler   │ →  │ VAEDecode  │
│ oint       │    │ code (x2)  │    │            │    │            │
└─────────────┘    └─────────────┘    └─────────────┘    └─────────────┘
     CLIPTextEncode  CLIPTextEncode
```

## Sampling Settings

### Dev Version Recommended

| Parameter | Value | Description |
|-----------|-------|-------------|
| Steps | 20-50 | More steps, higher quality |
| CFG | 3.5-7 | Flux less sensitive to CFG |
| DPM++ 2M | Recommended | Sampler |
| Karras | Optional | Smoother |

### Schnell Version

| Parameter | Value |
|-----------|-------|
| Steps | 4-8 |
| CFG | 1.0 |

## Prompt Tips

### Clear Description

```bash
# Clear
a beautiful sunset over the ocean, golden hour lighting, cinematic

# Avoid too long
1 girl, beautiful face, long hair, blue eyes, smile, 8k, detailed
```

### Quality Tags

| Tag | Effect |
|-----|--------|
| 8k, high detail | More details |
| masterpiece | Quality boost |
| best quality | High quality |
| photorealistic | Realistic style |

### Style Control

```bash
# Art style
oil painting style, impressionist

# Photography style
shot on Canon 5D, film grain

# Illustration
digital art, flat illustration
```

## Negative Prompt

Flux needs less negative prompting, but can add:

```bash
# Common negatives
blurry, low quality, distorted, ugly
```

## Image Sizes

| Size | Use |
|------|-----|
| 512x512 | Quick preview |
| 768x768 | Balance |
| 1024x1024 | High quality |
| Custom | As needed |

## Advanced

### LoRA Support

Flux supports LoRA:

```
1. Use Apply Flux LoRA node
2. Set LoRA strength 0.5-0.8
3. Adjust CFG strength
```

### ControlNet

Flux supports ControlNet:

```
1. Load ControlNet
2. Preprocess image
3. Adjust control weight 0.5-0.8
```

## Troubleshooting

### Q: Slow generation

**A**: 
- Use Schnell version
- Reduce steps
- Use quantized models (FP8)

### Q: Poor results

**A**:
- Check prompt clarity
- Try different CFG values
- Increase steps

### Q: Out of VRAM

**A**:
- Use FP8 quantization
- Reduce image size
- Close other applications

## Next Steps

- [Flux Image-to-Image](./flux-i2i) - I2I tutorial
- [Flux ControlNet](./flux-controlnet) - ControlNet usage