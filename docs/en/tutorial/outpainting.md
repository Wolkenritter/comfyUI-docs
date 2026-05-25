# Outpainting Tutorial

Extend image beyond original boundaries.

## What is Outpainting

Outpainting generates new content extending beyond the original image edges.

## Use Cases

- Create wider compositions
- Add more background
- Change aspect ratio
- Expand scene elements

## Basic Workflow

### Step 1: Load Image

```
Node: LoadImage
- Upload your base image
```

### Step 2: Create Expansion Mask

1. Extend canvas to desired size
2. Paint mask on new areas (white = generate)
3. Original image areas stay black (preserve)

### Step 3: Connect Nodes

```
[LoadImage] → [VAEEncode] → [KSampler] → [VAEDecode] → [ImagePad]
                                                   ↑
                                        [LoadImage (cropped)]
```

### Step 4: Parameters

| Parameter | Value | Description |
|-----------|-------|-------------|
| Denoise | 0.6-0.8 | Balance original vs new |
| Steps | 25-35 | Quality |
| CFG | 7-9 | Standard |

## Different Methods

### Method 1: Simple Expansion

1. Extend image in external editor
2. Load into ComfyUI
3. Use PaintHlight node for new areas

### Method 2: Crop and Expand

1. Load full image
2. Crop to region needing expansion
3. Generate new content
4. Composite back together

### Method 3: Pan and Zoom

Use nodes like:

```
ImagePanAndZoom
- Set start/end positions
- Generate intermediate frames
- Create expanded composition
```

## Aspect Ratio Changes

### 16:9 to 9:16 (Portrait)

1. Extend canvas height
2. Add top/bottom content
3. Keep center same

### Square to Wide

1. Extend canvas width
2. Add left/right content
3. Maintain subject position

## Tips

### Smooth Transitions

- Use feather on mask edges
- Blend generated content with original
- Check lighting consistency

### Style Consistency

- Match original image style
- Use similar prompts
- Check color palette

### Resolution

- Work at same resolution as original
- Upscale after if needed

## Common Issues

| Issue | Solution |
|-------|----------|
| Disconnected content | Use higher denoise |
| Style mismatch | Match prompt style |
| Visible seams | Use edge blending |

## Next Steps

- [Upscale](./upscale) - Increase resolution
- [Inpainting](./inpainting) - Fix specific areas
- [SDXL Workflow](../workflow/sdxl) - Use SDXL model