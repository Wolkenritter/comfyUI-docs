# First Image Generation

Generate your first image with ComfyUI.

## Prerequisites

1. ComfyUI is running
2. A checkpoint model is installed
3. Access to http://127.0.0.1:8188

## Basic Workflow

### Step 1: Create Basic Workflow

```
┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│ Checkpoint  │ →  │ CLIPTextEn │ →  │ KSampler   │
│ Loader      │    │ code (+)   │    │            │
└─────────────┘    └─────────────┘    └─────────────┘
                      ↑                   │
┌─────────────┐       │              ┌─────┴─────┐
│ CLIPTextEn │       │              │ VAEDecode│
│ code (-)   │       │              └─────┬─────┘
└─────────────┘       │                    │
                      │              ┌────┴────┐
┌─────────────┐       └──────────────│SaveImage│
│ EmptyLatent │ ──────────────────────→│         │
│ Image       │                       └─────────┘
└─────────────┘
```

### Step 2: Configure Checkpoint

1. Double-click canvas
2. Search "CheckpointLoader"
3. Click and select model from dropdown

### Step 3: Enter Prompts

**Positive Prompt:**
```
a beautiful landscape with mountains, sunset, golden hour
```

**Negative Prompt:**
```
blurry, low quality, distorted, ugly, bad anatomy
```

### Step 4: Set Parameters

| Parameter | Value | Description |
|-----------|-------|-------------|
| Steps | 20-30 | Sampling steps |
| CFG | 7-8 | Guidance scale |
| Sampler | DPM++ 2M | Sampling method |
| Size | 512x512 | Output size |

### Step 5: Generate

Click "Queue Prompt" button.

## Understanding Results

### Good Signs

| Sign | Meaning |
|------|---------|
| Progress bar moves | Generation in progress |
| Image appears | Success |
| No errors in console | Normal operation |

### Common Issues

| Issue | Solution |
|-------|----------|
| Black image | Check prompts, lower CFG |
| Blurry image | Increase steps, add quality tags |
| Wrong content | Adjust prompt wording |
| Slow generation | Reduce steps, use smaller model |

## Prompt Writing Tips

### Basic Structure

```
[Subject], [Style], [Details], [Quality]
```

### Examples

**Landscape:**
```
mountain landscape, sunset, golden hour lighting
crystal clear lake, pine trees, dramatic clouds
8k, highly detailed, masterpiece
```

**Portrait:**
```
1girl, beautiful face, long flowing hair, blue eyes
elegant white dress, flower garden background
soft lighting, bokeh, 8k, professional photo
```

**Art Style:**
```
oil painting of a cat, impressionist style
vibrant colors, thick brushstrokes, artistic
masterpiece, best quality
```

## Parameters Explained

### Steps

| Value | Use Case |
|-------|----------|
| 10-15 | Quick preview |
| 20-30 | Standard quality |
| 35-50 | High quality |
| 50+ | Maximum quality |

### CFG (Guidance Scale)

| Value | Effect |
|-------|--------|
| 1-5 | Creative, may not follow prompt |
| 6-8 | Balanced (recommended) |
| 9-12 | Strict prompt following |
| 13+ | May cause artifacts |

### Seed

- **Random**: Leave at 0 for different results
- **Fixed**: Set specific seed for reproducible results

## Batch Generation

### Multiple Images

Set `batch_size` in EmptyLatentImage:
- batch_size: 2 → Generate 2 images
- batch_size: 4 → Generate 4 images

### Variations

1. Fix seed
2. Change prompt slightly
3. Generate batch

## Saving Workflow

### Quick Save

`Ctrl + S` to save workflow

### Export

Save as JSON or PNG (with embedded workflow)

## Next Steps

- [Prompt Basics](./prompt-basic) - Learn more prompt techniques
- [Inpainting](./inpainting) - Fix parts of images
- [LoRA](./lora) - Use style models