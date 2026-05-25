# SDXL Workflow Tutorial

Learn to use SDXL model for high-quality images.

## SDXL Introduction

SDXL (Stable Diffusion XL) is the latest model series with excellent image quality and prompt following.

### Features

| Feature | Description |
|---------|-------------|
| High Resolution | Native 1024x1024 |
| Better Composition | Improved composition |
| Diverse Styles | Various art styles |
| Text Rendering | Better text generation |

### Versions

| Model | Description |
|--------|-------------|
| SDXL Base | Base model |
| SDXL Refiner | Refinement model |
| SDXL Turbo | Fast generation |
| SDXL Lightning | High speed |

## Installation

### Download Models

```
ComfyUI/models/checkpoints/
stable-diffusion-xl-base-1.0.safetensors

# Optional: Refinement model
stable-diffusion-xl-refiner-1.0.safetensors
```

### Download VAE

SDXL uses dedicated VAE:

```
ComfyUI/models/vae/
sdxl-vae-fp16-fix.safetensors
```

## Basic Workflow

### Classic Workflow

```
┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│ CheckpointL │ →  │ CLIPTextEn  │ →  │ KSampler    │
│ oaderSDXL   │    │ (positive)  │    │            │
└─────────────┘    └─────────────┘    └─────────────┘
                        ↓
┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│ CLIPTextEn  │    │ VAEDecode   │ ←  │ EmptyLatent│
│ (negative) │    │             │    │ Image      │
└─────────────┘    └─────────────┘    └─────────────┘
```

## Prompt Tips

### Basic Format

SDXL supports longer prompts:

```bash
# Single line
a beautiful landscape with mountains, sunset, golden hour, cinematic, 8k

# Multi-part (optional)
# Subject
masterpiece, best quality, a young woman with long flowing hair
# Outfit
wearing elegant white dress with floral patterns
# Background
standing in flower garden, butterflies around, magical atmosphere
# Quality
ultra detailed, 8k, professional photography
```

### Quality Tags

| Tag | Effect |
|-----|--------|
| masterpiece, best quality | Overall improvement |
| extremely detailed, intricate | More details |
| 8k, high resolution | High resolution |
| professional, studio lighting | Professional look |

## Sampling Parameters

### Recommended Settings

| Parameter | Value | Description |
|-----------|-------|-------------|
| Steps | 30-50 | Quality-speed balance |
| CFG | 7-12 | Prompt following |
| Sampler | DPM++ 2M Karras | Recommended |
| Size | 1024x1024 | Native resolution |

### Quality Levels

| Level | Steps | CFG | Use |
|-------|-------|-----|-----|
| Fast Preview | 20 | 7-8 | Quick test |
| Standard | 30 | 8-10 | Daily use |
| High Quality | 50 | 10-12 | Important work |

## Using Refiner

### Two-stage Generation

SDXL can use Refiner for better quality:

```
Base Model → Generate base (1024x1024)
Refiner Model → Refine details
```

### Workflow

```
┌─────────────┐
│ Base Model  │
│ (KSampler1) │ → Base image
└──────┬──────┘
       ↓
┌─────────────┐    ┌─────────────┐
│ Refiner     │ →  │ KSampler2   │ → Final image
│ Model       │    │ (refine)     │
└─────────────┘    └─────────────┘
```

## Image Sizes

### Native Resolution

| Size | Ratio | Use |
|------|-------|-----|
| 1024x1024 | 1:1 | Portrait, square |
| 1152x896 | 9:7 | Landscape |
| 1216x832 | 3:2 | Photo |
| 1344x768 | 7:4 | Widescreen |

### Recommended Ratios

```bash
# Portrait
1024x1024, 896x1152, 768x1024

# Landscape
1024x1024, 1216x832, 832x1216

# Full body
768x1344, 576x1024
```

## LoRA Usage

### SDXL LoRA

SDXL needs SDXL-specific LoRA:

```
ComfyUI/models/loras/
sdxl_style_name.safetensors
```

### Apply LoRA

```
1. Use Load LoRA node
2. Connect model
3. Set strength 0.5-0.8
4. Optional: Adjust CLIPS strength
```

## ControlNet

### SDXL ControlNet

| ControlNet | Use |
|------------|-----|
| canny | Edge control |
| depth | Depth control |
| openpose | Pose control |

## Troubleshooting

### Q: Out of VRAM

**A**: 
- Use SDXL Lite version
- Reduce image size
- Use fp16 models

### Q: Prompt not working

**A**:
- Use more detailed description
- Increase CFG
- Check prompt format

### Q: How to improve quality

**A**:
- Use Refiner
- Increase steps
- Add quality tags
- Use high resolution

## Next Steps

- [ControlNet](./advanced/controlnet) - Structure control
- [LoRA](../tutorial/lora) - Style models