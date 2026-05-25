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
masterpiece, best quality, a young woman with long flowing hair, wearing elegant white dress, flower garden background, butterflies, magical atmosphere, ultra detailed, 8k, professional photography
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

## Image Sizes

### Native Resolution

| Size | Ratio | Use |
|------|-------|-----|
| 1024x1024 | 1:1 | Portrait, square |
| 1152x896 | 9:7 | Landscape |
| 1216x832 | 3:2 | Photo |

## Troubleshooting

### Q: Out of VRAM

**A**: 
- Use SDXL Lite version
- Reduce image size
- Use fp16 models

### Q: How to improve quality

**A**:
- Use Refiner
- Increase steps
- Add quality tags

## Next Steps

- [ControlNet](./controlnet) - Structure control
- [LoRA](./lora) - Style models