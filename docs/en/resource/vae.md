# VAE Models

Encoder/decoder models.

## What is VAE

VAE (Variational Autoencoder) encodes images to latent space and decodes back.

## Popular VAE

### SD 1.x VAE

| VAE | Description |
|-----|-------------|
| autoencoder_kl-f8 | Standard SD 1.x |
| vae-ft-mse-840000-ema-pruned | Better quality |

### SDXL VAE

| VAE | Description |
|-----|-------------|
| sdxl-vae-fp16-fix | SDXL专用 |
| sdxl-vae | Original |

### Other VAE

| VAE | Use |
|-----|-----|
| vae-approx | Fast approximation |
| stabilityai/vae-fp16 | Stability version |

## Download

### SD 1.x

```
ComfyUI/models/vae/
  autoencoder_kl-f8.pt
  vae-ft-mse-840000-ema-pruned.safetensors
```

### SDXL

```
ComfyUI/models/vae/
  sdxl-vae-fp16-fix.safetensors
```

## Usage

### Auto-select

Most checkpoints include VAE, auto-selected.

### Manual Select

```
Node: VAELoader
Select: Your VAE
```

### In Checkpoint

Some checkpoints embed VAE:
- No separate load needed
- May need external VAE for best quality

## When to Use External VAE

| Situation | Use External VAE |
|-----------|-------------------|
| Colors off | Yes |
| Artifacts | Yes |
| Want better quality | Yes |

## Tips

1. **Match model**: Use VAE for your model type
2. **Test quality**: Compare with/without external VAE
3. **SDXL**: SDXL works better with external VAE

## Next Steps

- [Upscale Models](./upscale-models) - Resolution enhancement
- [Custom Nodes](./custom-nodes) - Extensions