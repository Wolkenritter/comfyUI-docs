# LoRA Tutorial

Use LoRA models for style and content control.

## What is LoRA

LoRA (Low-Rank Adaptation) is a lightweight model that modifies the base model's behavior without changing the entire model.

## Use Cases

- Apply specific art styles
- Character consistency
- Special effects
- Concept modification

## LoRA Files

Format: `.safetensors` or `.pt`

Location: `ComfyUI/models/loras/`

## Basic Usage

### Step 1: Load LoRA

```
Node: LoraLoader
- Select your LoRA file
- Set strength (typically 0.5-1.0)
```

### Step 2: Connect

```
[CheckpointLoader] → [LoraLoader] → [CLIP/Model outputs]
```

### Step 3: Use in Prompt

Some LoRAs require trigger words:

```bash
# Check LoRA description for trigger
trigger-word, another-trigger

# Or use embedding style
embedding:my-lora-name
```

## LoRA Parameters

### Strength

| Value | Effect |
|-------|--------|
| 0.1-0.3 | Subtle influence |
| 0.4-0.7 | Balanced |
| 0.8-1.2 | Strong effect |
| >1.5 | May cause artifacts |

### Multiple LoRAs

```bash
# Use multiple LoRAs
<lora:style1:0.8> <lora:style2:0.5>
```

## Popular LoRA Types

### Style LoRA

| LoRA | Style |
|------|-------|
| anime | Anime style |
| portrait | Photorealistic portrait |
| watercolor | Watercolor painting |
| pixel | Pixel art |

### Character LoRA

- Maintain consistent character
- Use trigger words from model page
- Adjust strength for best results

### Concept LoRA

- Add specific concepts
- Custom poses
- Special effects (lighting, atmosphere)

## SDXL LoRA

SDXL models require SDXL-specific LoRAs:

```
ComfyUI/models/loras/
  sdxl-compatible-lora.safetensors
```

### SDXL LoRA Settings

| Parameter | Value |
|-----------|-------|
| Model Strength | 0.5-1.0 |
| CLIP Strength | 0.5-1.0 |
| Both | Match for best results |

## Advanced: Custom LoRA Training

### Training Requirements

- 10-50 sample images
- Consistent subject/style
- Quality over quantity
- GPU with 8GB+ VRAM

### Training Process

1. Prepare dataset
2. Configure training parameters
3. Train model
4. Test and iterate

## Tips

1. **Start low**: Try 0.5-0.7 strength first
2. **Check trigger words**: Read LoRA description
3. **Combine with prompts**: Describe desired result
4. **Test variations**: Adjust strength and prompts

## Troubleshooting

| Issue | Solution |
|-------|----------|
| No effect | Check if LoRA loaded correctly |
| Too strong | Lower strength value |
| Artifacts | Reduce strength or try different LoRA |
| Not matching | Use trigger words |

## Next Steps

- [ControlNet](../tutorial/advanced/controlnet) - Structure control
- [Inpainting](./inpainting) - Fix specific areas
- [SDXL Workflow](../workflow/sdxl) - SDXL features