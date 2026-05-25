# Inpainting Tutorial

Fix specific areas of an image.

## What is Inpainting

Inpainting allows you to regenerate specific parts of an image while keeping other areas unchanged.

## Use Cases

- Fix faces or hands
- Add or remove objects
- Change clothing or background
- Remove watermarks or text

## Workflow

### Step 1: Load Image

```
Node: LoadImage
- Upload your image
- This will be the base for inpainting
```

### Step 2: Create Mask

Use one of these methods:

#### Method A: Built-in Mask Editor

1. In SaveImage node, click "Mask" tab
2. Paint white areas to indicate what to change
3. Black areas will be preserved

#### Method B: Use Pre-trained Mask

1. Load image with alpha channel (RGBA)
2. White areas = mask

### Step 3: Connect Nodes

```
[LoadImage] → [VAEEncode] → [KSampler] → [VAEDecode] → [SaveImage]
                ↑
[CLIPTextEncode(positive)]
[CLIPTextEncode(negative)]
```

### Step 4: Adjust Parameters

| Parameter | Value | Reason |
|-----------|-------|--------|
| Denoise | 0.6-0.9 | Lower = more faithful to original |
| Steps | 20-30 | Quality-speed balance |
| CFG | 7-10 | Standard setting |

### Step 5: Generate

Click "Queue Prompt"

## Mask Editor Features

### Brush Settings

| Setting | Function |
|---------|----------|
| Size | Brush radius |
| Hardness | Edge softness |
| Feather | Blur edges |

### Tools

| Tool | Use |
|------|-----|
| Brush | Paint mask |
| Eraser | Remove mask |
| Fill | Fill large area |
| Invert | Flip mask |

## Tips for Better Results

### Mask Creation

- **Feather edges**: Use 5-10 pixel feather for natural transitions
- **Cover enough area**: Include surrounding context
- **Avoid hard edges**: Blend with surrounding areas

### Prompts

- Describe what you want to see in the masked area
- Keep same style as original image
- Use lower denoise (0.5-0.7) for subtle changes

### Common Issues

| Issue | Solution |
|-------|----------|
| Visible seams | Increase feather on mask edges |
| Style mismatch | Use consistent prompts |
| Color inconsistency | Lower denoise value |

## Advanced: Regional Inpainting

For multiple areas:

```
1. Create separate masks for each region
2. Run inpainting sequentially
3. Or use multiple KSampler nodes
```

## Next Steps

- [Outpainting](./outpainting) - Extend image
- [Upscale](./upscale) - Increase resolution
- [LoRA](./lora) - Apply styles