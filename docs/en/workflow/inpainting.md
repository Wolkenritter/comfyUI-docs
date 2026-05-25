# Inpainting Workflow

Fix specific areas of an image.

## Concept

Inpainting regenerates masked areas while preserving the rest.

## Workflow

```
[LoadImage] → [VAEEncode (with mask)] → [KSampler] → [VAEDecode] → [SaveImage]
               ↑ CLIP Text Encode                   
```

## Step-by-Step

### Step 1: Load Image

```
Node: LoadImage
- Load your image
- If using mask, load RGBA image
```

### Step 2: Create Mask

#### Option A: RGBA Image

Load PNG with transparency:

```
LoadImage (RGBA)
    ↓ IMAGE → VAEEncode
    ↓ MASK → Use as mask
```

#### Option B: Internal Mask Editor

In ComfyUI-Impact-Pack or similar:

1. Right-click → Mask Editor
2. Paint white areas to regenerate
3. Black areas stay unchanged

### Step 3: Encode

```
Node: VAEEncode (Inpainting or Masked)
- Connect image
- Connect mask (if separate)
```

### Step 4: Set Parameters

```
Node: KSampler
Denoise: 0.6-0.9

Higher = more regeneration
Lower = more faithful to original
```

### Step 5: Generate

Click "Queue Prompt"

## Parameters

### Denoise Strength

| Value | Effect |
|-------|--------|
| 0.3-0.5 | Subtle fix |
| 0.6-0.7 | Moderate change |
| 0.8-0.9 | Major regeneration |

### Mask Settings

| Setting | Value | Description |
|---------|-------|-------------|
| Feather | 5-10px | Soft edges |
| Invert | Off | White = regenerate |

## Use Cases

### Fix Face

```
Input: Image with bad face
Mask: Cover face area
Prompt: "beautiful face, detailed features"
Denoise: 0.7-0.8
```

### Remove Object

```
Input: Image with unwanted object
Mask: Cover object
Prompt: "clean background, seamless"
Denoise: 0.8-0.9
```

### Add Object

```
Input: Image
Mask: Area to add to
Prompt: "add a red flower vase"
Denoise: 0.7-0.8
```

## Tips

1. **Feather edges**: Smooth transition for natural look
2. **Cover context**: Include surrounding area in mask
3. **Match style**: Use similar prompts to original

## Common Issues

| Issue | Solution |
|-------|----------|
| Visible seams | Increase feather |
| Style mismatch | Adjust prompt |
| Wrong content | Use lower denoise |

## Next Steps

- [Outpainting](./outpainting) - Extend image
- [Upscaling](./upscaling) - Increase resolution