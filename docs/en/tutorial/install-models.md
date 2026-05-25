# Model Installation Guide

Learn how to install various model types.

## Model Types

| Type | Location | Description |
|------|----------|-------------|
| Checkpoint | models/checkpoints/ | Base models |
| VAE | models/vae/ | Encoder/decoder |
| LoRA | models/loras/ | Style modifiers |
| Embedding | models/embeddings/ | Text enhancements |
| ControlNet | models/controlnet/ | Structure control |
| Upscale | models/upscale_models/ | Resolution enhancement |

## Checkpoint Models

### Download Locations

- [Civitai](https://civitai.com)
- [Hugging Face](https://huggingface.co/models)
- [Stability AI](https://stability.ai/stablediffusion)

### File Formats

| Format | Extension | Safety |
|--------|-----------|--------|
| SafeTensors | .safetensors | Recommended |
| PyTorch | .ckpt, .pth | Use carefully |
| Pickle | .pkl | Avoid |

### Installation

1. Download model file
2. Place in appropriate folder:

```
# Stable Diffusion
ComfyUI/models/checkpoints/

# SDXL
ComfyUI/models/checkpoints/
# SDXL uses same folder
```

3. Refresh ComfyUI or restart

## VAE Models

### Why VAE Matters

- Affects image quality
- Some checkpoints need specific VAE
- Can improve color/smoothness

### Popular VAE

| VAE | Use For |
|-----|---------|
| autoencoder_kl-f8.pt | SD 1.x |
| autoencoder_kl-f8-fp16-fix.safetensors | SDXL |
| vae-ft-mse-840000-ema-pruned.safetensors | General |

### Installation

```
ComfyUI/models/vae/
  your-vae.safetensors
```

## LoRA Models

### Installation

```
ComfyUI/models/loras/
  your-lora.safetensors
```

### Trigger Words

Check model page for required trigger words.

## Embeddings

### Installation

```
ComfyUI/models/embeddings/
  your-embedding.pt
  your-embedding.safetensors
```

### Usage in Prompt

```bash
embedding:embedding-name
```

## ControlNet Models

### Required Files

```
ComfyUI/models/controlnet/
  control_v11p_sd15_canny.pth
  control_v11p_sd15_depth.pth
  control_v11f1p_sd15_depth.pth
  control_v11p_sd15_openpose.pth
  # ... more models
```

### Preprocessor Models

Located in custom node folders:

```
ComfyUI/custom_nodes/comfyui_controlnet_aux/
  models/
    midas/
    openpose/
```

## Upscale Models

### Popular Options

| Model | Use For |
|-------|---------|
| 4x-UltraSharp.pth | Photos, general |
| 4x_NickelSSR_900000.pth | Anime |
| RealESRGAN_x4.pth | General |

### Installation

```
ComfyUI/models/upscale_models/
  4x-UltraSharp.pth
```

## Model Management

### Organize by Type

```
models/
  checkpoints/
  vae/
  loras/
  embeddings/
  controlnet/
  upscale_models/
```

### Cleanup

- Remove unused models
- Keep multiple versions if needed
- Backup important models

## Troubleshooting

### Model Not Showing

1. Check file location
2. Verify file is complete
3. Restart ComfyUI
4. Check file permissions

### Corrupted Model

- Re-download file
- Check file hash
- Try different source

## Next Steps

- [Getting Started](../tutorial/getting-started) - Use installed models
- [Share Models](../tutorial/share-models) - Share across installations