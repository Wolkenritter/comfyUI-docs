# CheckpointLoader Node

Load Stable Diffusion checkpoint models.

## Function

Loads checkpoint files (.safetensors, .ckpt) containing model weights.

## Inputs

| Input | Type | Description |
|-------|------|-------------|
| model | (from node) | Model file selection |

## Outputs

| Output | Type | Description |
|--------|------|-------------|
| MODEL | model | Model for KSampler |
| CLIP | clip | CLIP model for text encoding |
| VAE | vae | VAE model for encoding/decoding |

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| checkpoint_name | dropdown | Available model files |

## Usage

### Basic Setup

```
CheckpointLoader
    ↓ MODEL → KSampler
    ↓ CLIP → CLIPTextEncode → KSampler
    ↓ VAE → VAEDecode
```

### With SDXL

SDXL checkpoints have different structure:

```
CheckpointLoader (SDXL)
    ↓ MODEL → KSampler
    ↓ CLIP1 → CLIPTextEncode (positive)
    ↓ CLIP2 → CLIPTextEncode (negative) / combined
    ↓ VAE → VAEDecode
```

## Model Files

### Location

```
ComfyUI/models/checkpoints/
```

### Supported Formats

| Format | Extension | Recommended |
|--------|-----------|-------------|
| SafeTensors | .safetensors | ✅ |
| PyTorch | .ckpt, .pth | Use if needed |

## Tips

1. **Model selection**: Choose based on your needs
2. **SDXL models**: Use SDXL-specific checkpoints
3. **Refresh**: Click refresh if model not showing

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Model not found | Check file location |
| Out of memory | Use fp16 or smaller model |
| Slow loading | Normal for large models |

## Next Steps

- [CLIPTextEncode](./text) - Encode prompts
- [KSampler](./sampler) - Sample image
- [VAE operations](./latent) - Encode/decode