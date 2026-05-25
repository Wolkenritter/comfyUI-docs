# LoRA Models

Learn how to use LoRA (Low-Rank Adaptation) models.

## What is LoRA

LoRA is a lightweight model that modifies the base model to add specific styles, characters, or concepts.

```
Base Model + LoRA = Styled Output
```

### Characteristics

| Feature | Description |
|---------|-------------|
| Size | ~100MB-200MB (vs GB for full model) |
| Loading | Separate node or combined |
| Effect | Strong style influence |
| Flexibility | Can combine multiple |

## LoRA Types

### Style LoRA

| Type | Effect |
|------|--------|
| Anime | Anime art style |
| Photorealistic | Photo-like output |
| Oil Painting | Painting style |
| Cyberpunk | Futuristic style |

### Character LoRA

| Type | Effect |
|------|--------|
| Face | Specific face likeness |
| Full body | Character appearance |
| Outfit | Specific clothing |

### Concept LoRA

| Type | Effect |
|------|--------|
| Pose | Specific poses |
| Environment | Specific scenes |
| Lighting | Lighting styles |

## Installation

### Location

```
ComfyUI/models/loras/
├── anime_style.safetensors
├── portrait_photo.safetensors
└── hanfu_style.safetensors
```

### Download

From:
- [Civitai](https://civitai.com/?tags=25)
- [Hugging Face](https://huggingface.co/sdromised/Lora)

## Usage

### Basic Workflow

```
┌─────────────┐
│ Checkpoint  │
│ Loader      │
└──────┬──────┘
       │ MODEL
       ↓
┌─────────────┐
│ LoadLoRA   │ ← Load LoRA here
└──────┬──────┘
       │ MODEL
       ↓
┌─────────────┐
│ KSampler   │
└─────────────┘
```

### Node: LoadLoRA

| Input | Description |
|-------|-------------|
| model | From CheckpointLoader |
| clip | From CheckpointLoader |
| lora_name | LoRA file name |
| strength_model | Model strength (0-2) |
| strength_clip | CLIP strength (0-2) |

### Parameters

| Parameter | Default | Effect |
|-----------|---------|--------|
| strength_model | 1.0 | LoRA influence |
| strength_clip | 1.0 | Text matching |

## Strength Settings

### Recommended Values

| LoRA Type | strength_model | strength_clip |
|-----------|----------------|---------------|
| Style | 0.6-0.8 | 0.5-1.0 |
| Character | 0.7-1.0 | 0.5-0.8 |
| Clothing | 0.5-0.7 | 0.5-1.0 |

### When to Adjust

- **Too strong**: Lower to 0.5-0.7
- **Too weak**: Raise to 0.8-1.0
- **Unwanted effects**: Lower CLIP strength

## Multiple LoRA

### Stacking

Apply multiple LoRAs:

```
Checkpoint → LoRA1 → LoRA2 → LoRA3 → KSampler
             0.7      0.5      0.3
```

### Order Matters

- Earlier LoRA has more influence
- General style first, specific last

## Prompts

### Trigger Words

Some LoRAs need trigger words:

```
# Check LoRA description
Trigger: "1girl, masterpiece"

# Use in prompt
1girl, masterpiece, beautiful
```

### Example

```bash
# LoRA: Anime Style
Prompt: "1girl, anime style, detailed illustration"
Strength: 0.7

# LoRA: Specific character
Prompt: "character_name, (same pose), high quality"
Strength: 0.8
```

## Common Issues

### Q: LoRA not taking effect

**A**:
- Check trigger words
- Increase strength
- Verify LoRA in correct directory

### Q: Effect too strong

**A**: Lower strength to 0.5-0.7.

### Q: Version mismatch

**A**: SD1.5 LoRA ≠ SDXL LoRA. Match versions.

## Search Tips

On Civitai, search with:

| Search | Result |
|--------|--------|
| `lora:keyword` | Exact search |
| `base model:SDXL` | Filter version |
| `trending` | Popular |
| `new` | Recent |

## Best Practices

1. **Start conservative** - Use lower strength first
2. **Check trigger words** - Read LoRA description
3. **Match versions** - Use correct SD version
4. **Combine wisely** - Don't stack too many

## Next Steps

- [ControlNet](../tutorial/advanced/controlnet) - Advanced control
- [Upscale](./upscale) - Enhance quality