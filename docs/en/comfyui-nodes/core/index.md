# Core Nodes

Core nodes are built-in to ComfyUI.

## Node List

| Node | Description |
|------|-------------|
| [CheckpointLoader](./checkpoint) | Load model checkpoints |
| [CLIPTextEncode](./text) | Encode text prompts |
| [KSampler](./sampler) | Sample latent images |
| [VAE operations](./latent) | Encode/decode latent |
| [Image I/O](./image-io) | Load and save images |

## Common Patterns

### Basic Generation

```
Checkpoint → Text(positive) → KSampler → Decode → Save
          ↘ Text(negative) ↗
```

### With ControlNet

```
Checkpoint → Text → KSampler → Decode → Save
              ↑         ↑
ControlNet ← Image → Preprocessor
```

## Node Categories

### Model Loading

- CheckpointLoader
- UnetLoader
- VAELoader

### Text Processing

- CLIPTextEncode
- CLIPTextEncodeSDXL
- StringLiteral

### Sampling

- KSampler
- KSamplerAdvanced
- SamplerCustom

### Latent Operations

- VAEEncode
- VAEDecode
- EmptyLatentImage
- LatentUpscale

### Image Operations

- LoadImage
- SaveImage
- ImageScale
- ImageCrop

## Next Steps

- [CheckpointLoader](./checkpoint) - Load models
- [CLIPTextEncode](./text) - Text encoding
- [KSampler](./sampler) - Sampling
- [Image I/O](./image-io) - Image operations