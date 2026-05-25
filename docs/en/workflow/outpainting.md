# Outpainting Workflow

Extend image beyond original boundaries.

## Concept

Outpainting generates new content outside the original image frame.

## Methods

### Method 1: Canvas Extension

1. Extend canvas in external editor
2. Fill new areas with white (to generate)
3. Keep original areas black (preserve)

### Method 2: Node-Based

Use nodes like:

```
ImagePadForInpaint
- Pad image with mask
- Extend boundaries
```

### Method 3: Crop and Expand

```
1. Load full image
2. Crop to edge region
3. Generate extension
4. Composite back
```

## Workflow

```
[LoadImage] → [ImagePad/Canvas] → [VAEEncode] → [KSampler] → [VAEDecode] → [SaveImage]
                                           ↑
[CLIPTextEncode]
```

## Step-by-Step

### Step 1: Prepare Image

Extend canvas:

```bash
# Example: 512x512 to 768x512
# Add 256px on right side
# Fill new area with white
```

### Step 2: Create Mask

In new areas:
- White = generate
- Black = preserve original

### Step 3: Connect Nodes

```
LoadImage → VAEEncode → KSampler → VAEDecode → SaveImage
     ↑           ↑           ↑
  Image     CLIPTextEncode
```

### Step 4: Generate

```
Prompt: "continuation of scene, matching style"
Denoise: 0.6-0.8
```

## Parameters

| Parameter | Value | Effect |
|-----------|-------|--------|
| Denoise | 0.6-0.8 | Balance original/new |
| Steps | 25-35 | Quality |
| CFG | 7-9 | Prompt following |

## Tips

### Seamless Blend

1. Use feather on mask edges
2. Match lighting and style
3. Check color consistency

### Aspect Ratio Changes

| Original | Target | Action |
|----------|--------|--------|
| 1:1 | 16:9 | Extend width |
| 1:1 | 9:16 | Extend height |

## Common Issues

| Issue | Solution |
|-------|----------|
| Disconnected | Higher denoise |
| Style mismatch | Match prompt style |
| Visible seam | Feather mask edges |

## Next Steps

- [Upscaling](./upscaling) - Increase resolution
- [Inpainting](./inpainting) - Fix areas