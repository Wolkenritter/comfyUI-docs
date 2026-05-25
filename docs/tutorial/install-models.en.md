# Model Installation

Learn how to install various models.

## Checkpoint Models

### Download

From [Civitai](https://civitai.com), [Hugging Face](https://huggingface.co), or [ModelScope](https://www.modelscope.cn/home).

### Install

Place in: `ComfyUI/models/checkpoints/`

### Popular Models

| Model | Size | Use Case |
|-------|------|----------|
| SD 1.5 | ~4GB | General |
| SDXL | ~6.5GB | High quality |
| Anime models | Varies | Anime art |

## VAE Models

### Download

- [Stability AI VAE](https://huggingface.co/stabilityai/sd-vae)
- ModelScope

### Install

Place in: `ComfyUI/models/vae/`

### Built-in VAE

Most checkpoints have built-in VAE, usually no separate installation needed.

## LoRA Models

### Download

[Civitai](https://civitai.com) is main source.

### Install

Place in: `ComfyUI/models/loras/`

### Using LoRA

1. Load Checkpoint
2. Add LoadLoRA node
3. Connect model and clip
4. Set strength

## ControlNet Models

### Download

- [lllyasviel ControlNet](https://huggingface.co/lllyasviel/ControlNet)
- [ModelScope](https://www.modelscope.cn/home)

### Install

Place in: `ComfyUI/models/controlnet/`

### Preprocessor Models

Install via ComfyUI Manager → `comfyui_controlnet_aux`

## Embeddings

### Download

Various sources online.

### Install

Place in: `ComfyUI/models/embeddings/`

### Usage

In prompt: `<embedding:name>`

## Upscale Models

### Download

- [RealESRGAN](https://github.com/xinntao/Real-ESRGAN)
- Various sources

### Install

Place in: `ComfyUI/models/upscale_models/`

### Popular Models

| Model | Scale | Use |
|-------|-------|-----|
| RealESRGAN_x4plus | 4x | General |
| 4x-UltraSharp | 4x | High quality |

## Troubleshooting

### Q: Model not showing

**A**:
- Restart ComfyUI
- Check file format
- Verify path is correct

### Q: Wrong version

**A**: SD1.5 LoRA ≠ SDXL LoRA. Match model versions.

### Q: Out of VRAM

**A**: Use fp16 models or reduce image size.

## Next Steps

- [First Image](../tutorial/first-image) - Generate first image
- [LoRA](../tutorial/lora) - Learn LoRA