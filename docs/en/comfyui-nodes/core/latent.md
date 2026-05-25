# Latent Operations

Encode and decode images in latent space.

## VAEEncode

Converts image to latent representation.

### Inputs

| Input | Type | Description |
|-------|------|-------------|
| pixels | image | Image to encode |
| vae | vae | VAE model |

### Outputs

| Output | Type | Description |
|--------|------|-------------|
| LATENT | latent | Encoded latent |

### Usage

```
LoadImage → VAEEncode → KSampler
              ↑
         VAE (from checkpoint)
```

## VAEDecode

Converts latent to visible image.

### Inputs

| Input | Type | Description |
|-------|------|-------------|
| samples | latent | Latent to decode |
| vae | vae | VAE model |

### Outputs

| Output | Type | Description |
|--------|------|-------------|
| IMAGE | image | Decoded image |

### Usage

```
KSampler → VAEDecode → SaveImage
              ↑
         VAE (from checkpoint)
```

## EmptyLatentImage

Creates initial noise for generation.

### Inputs

| Input | Type | Description |
|-------|------|-------------|
| (none) | - | - |

### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| width | int | Image width |
| height | int | Image height |
| batch_size | int | Number to generate |

### Outputs

| Output | Type | Description |
|--------|------|-------------|
| LATENT | latent | Empty latent noise |

### Common Sizes

| Size | Use Case |
|------|----------|
| 512x512 | Standard |
| 768x768 | Higher quality |
| 1024x1024 | SDXL native |

## LatentUpscale

Upscale latent image before decoding.

### Inputs

| Input | Type | Description |
|-------|------|-------------|
| samples | latent | Latent to upscale |
| method | dropdown | Upscale method |

### Parameters

| Method | Description |
|--------|-------------|
| nearest | Fast, lower quality |
| bilinear | Medium |
| lanczos | Good quality |
| area | Best quality |

## Inpainting Nodes

### VAEEncode (Inpainting)

Uses mask to encode only unmasked areas.

### Mask Handling

```
LoadImage (RGBA) → VAEEncode
                       ↓
                  Mask preserved for KSampler
```

## Tips

1. **Match resolution**: Ensure latent size matches desired output
2. **Batch generation**: Use batch_size for multiple images
3. **Inpainting**: Use masked encoding for area editing

## Next Steps

- [KSampler](./sampler) - Sample in latent space
- [Image I/O](./image-io) - Load/save images