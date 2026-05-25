# Inpainting

Fix specific parts of an image using inpainting.

## What is Inpainting

Inpainting repairs or replaces specific areas of an image while preserving the rest.

```
Original Image → Mask Area → Generate → Final Image
                    ↓
              New content fills area
```

## When to Use

| Use Case | Description |
|----------|-------------|
| Fix face | Correct facial features |
| Remove object | Remove unwanted elements |
| Add object | Insert new elements |
| Fix hands | Repair hand details |
| Extend scene | Add to existing scene |

## Basic Workflow

### Step 1: Load Image

1. Load your original image
2. Ensure good quality input

### Step 2: Create Mask

**Option A: Draw Mask**
1. Create empty mask
2. Use Mask Draw to paint white area (edit area)
3. Black area = keep, White area = edit

**Option B: Load Mask**
1. Create black/white image in external editor
2. Load as mask
3. White = edit area

### Step 3: Setup Workflow

```
┌─────────────┐    ┌─────────────┐
│ LoadImage   │ →  │ VAEEncode   │
│ (original)  │    │ (with mask) │
└─────────────┘    └──────┬──────┘
                          ↓
┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│ CLIPTextEn  │ →  │ KSampler    │ ←  │ Checkpoint  │
│ code        │    │             │    │ Loader      │
└─────────────┘    └──────┬──────┘    └─────────────┘
                          ↓
                    ┌─────────────┐
                    │ VAEDecode   │
                    └─────────────┘
```

### Step 4: Set Parameters

| Parameter | Value | Description |
|-----------|-------|-------------|
| Denoise | 0.6-0.9 | How much to change |
| Steps | 20-30 | Sampling quality |
| CFG | 7-9 | Prompt following |

### Step 5: Generate

Click "Queue Prompt" and review result.

## Mask Creation Tips

### Feather Edges

Smooth transitions between original and new:
- Use Mask Blur (10-30 pixels)
- Prevents hard edges

### Precise Selection

1. Zoom in for accuracy
2. Use small brush for details
3. Multiple passes for refinement

### Mask Size

Make mask slightly larger than edit area:
- Prevents cut-off edges
- Allows natural blending

## Parameter Adjustment

### Denoise Strength

| Value | Effect |
|-------|--------|
| 0.3-0.5 | Subtle changes |
| 0.5-0.7 | Moderate changes |
| 0.7-0.9 | Major changes |

### When to Adjust

- **Too similar**: Increase denoise
- **Too different**: Decrease denoise
- **Artifacts**: Adjust prompt

## Common Use Cases

### Fix Face

```
1. Load image with face
2. Create mask around face
3. Prompt: "beautiful face, clear skin, detailed features"
4. Denoise: 0.5-0.7
```

### Remove Object

```
1. Load image
2. Create mask over object
3. Prompt: "natural background, seamless fill"
4. Denoise: 0.7-0.9
```

### Add Element

```
1. Load image
2. Create mask where new element goes
3. Prompt: "describe new element"
4. Denoise: 0.6-0.8
```

### Fix Hands

```
1. Load image with hand issues
2. Create mask over hands
3. Prompt: "natural hands, correct anatomy, detailed fingers"
4. Negative: "deformed hands, extra fingers, poorly drawn"
5. Denoise: 0.5-0.7
```

## Advanced Techniques

### Multi-stage Inpainting

1. First pass: Rough edit (denoise 0.8)
2. Second pass: Refine edges (denoise 0.4)
3. Final pass: Blend (denoise 0.2)

### ControlNet Inpainting

Add ControlNet to maintain structure:
1. Load original image
2. Canny or Depth for structure
3. Apply to inpainting workflow
4. Better consistency

## Troubleshooting

### Q: Edges visible

**A**: 
- Increase mask feather
- Lower denoise
- Multiple passes

### Q: Generated content wrong

**A**:
- Refine prompt
- Adjust denoise
- Check mask accuracy

### Q: Color mismatch

**A**:
- Add color description to prompt
- Use lower denoise
- Reference surrounding colors

## Best Practices

1. **High quality input** → Better output
2. **Precise masks** → Cleaner edits
3. **Iterative refinement** → Natural results
4. **Match style** → Consistent look

## Next Steps

- [Outpainting](./outpainting) - Extend image borders
- [Upscale](./upscale) - Increase resolution
- [ControlNet](../tutorial/advanced/controlnet) - Advanced control