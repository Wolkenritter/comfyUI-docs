# Resource Index

Model and resource downloads.

## Model Categories

### Checkpoint Models

| Category | Description |
|----------|-------------|
| [SD Models](./models) | Stable Diffusion models |
| [Flux Models](./flux-models) | Flux models |

### Model Components

| Category | Description |
|----------|-------------|
| [LoRA](./lora-models) | Style modifiers |
| [ControlNet](./controlnet-models) | Structure control models |
| [Embedding](./embedding) | Text embeddings |
| [VAE](./vae) | Encoder/decoder |
| [Upscale](./upscale-models) | Resolution enhancement |

### Tools

| Category | Description |
|----------|-------------|
| [Custom Nodes](./custom-nodes) | Custom node extensions |
| [Official](./official) | Official resources |

## Download Sources

- [Civitai](https://civitai.com) - Primary for LoRA, checkpoints
- [Hugging Face](https://huggingface.co) - Official models
- [Stability AI](https://stability.ai) - SD models

## Model Formats

| Format | Extension | Recommended |
|--------|-----------|-------------|
| SafeTensors | .safetensors | ✅ |
| PyTorch | .ckpt, .pth | Use if needed |

## Installation

Place files in appropriate folders:

```
ComfyUI/models/
  checkpoints/    # Base models
  vae/           # VAE models
  loras/         # LoRA models
  controlnet/    # ControlNet models
  embeddings/    # Text embeddings
  upscale_models/ # Upscale models
```

## Next Steps

- [SD Models](./models) - Stable Diffusion
- [LoRA](./lora-models) - Style models
- [ControlNet](./controlnet-models) - Structure control