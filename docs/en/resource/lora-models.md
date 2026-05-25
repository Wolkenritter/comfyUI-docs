# LoRA Models

Style and effect modifiers.

## What is LoRA

LoRA (Low-Rank Adaptation) modifies base models without changing the entire model.

## Popular LoRA Types

### Style LoRA

| LoRA | Style |
|------|-------|
| anime-style | Anime aesthetic |
| pixel-art | Pixel art |
| watercolor | Watercolor painting |
| oil-painting | Oil painting |

### Character LoRA

- Specific character appearance
- Consistent character across images
- Use with trigger words

### Concept LoRA

- Custom concepts
- Special effects
- Unique styles

## Download Sources

### Civitai

Primary source for LoRA models:

- [LoRA category](https://civitai.com/models?type=LoRA)
- Search by style, character, concept

### Hugging Face

- Some official LoRAs available

## Installation

```
ComfyUI/models/loras/
  anime-style-v1.safetensors
  character-name-v1.safetensors
```

## Usage

### Basic

```
Node: LoraLoader
Select: Your LoRA
Strength: 0.5-1.0
```

### In Prompt

```bash
# Some LoRAs need trigger words
trigger-word, another-trigger
```

## Parameters

| Parameter | Value | Effect |
|-----------|-------|--------|
| Strength | 0.5-0.8 | Balanced |
| Strength | 0.8-1.0 | Strong effect |
| Strength | 0.3-0.5 | Subtle |

## SDXL LoRA

SDXL requires SDXL-compatible LoRAs:

```
ComfyUI/models/loras/
  sdxl-compatible-lora.safetensors
```

## Tips

1. **Check trigger words**: Read model description
2. **Start low**: 0.5-0.7 for new LoRA
3. **Combine**: Use multiple LoRAs

## Next Steps

- [ControlNet Models](./controlnet-models) - Structure control
- [Embedding](./embedding) - Text embeddings