# Outpainting

Extend image borders to add more content.

## What is Outpainting

Outpainting expands the image boundaries, adding new content beyond the original frame.

```
Original     →     Extended
┌────────┐         ┌────────────┐
│        │         │            │
│ Image  │   →     │   Image    │
│        │         │   + New    │
└────────┘         │   Content   │
                   └────────────┘
```

## When to Use

| Use Case | Description |
|----------|-------------|
| Expand composition | Add more background |
| Change aspect ratio | Portrait to landscape |
| Add framing | Add borders/objects |
| Complete scene | Extend partial scenes |

## Basic Workflow

### Step 1: Load Image

Load the image to extend.

### Step 2: Set New Dimensions

Create larger latent:
- Original: 512x512
- Extended: 768x512 (wider)
- Or: 512x768 (taller)

### Step 3: Encode with Extension

```
VAEEncode:
- Original image → Position in center
- Remaining area → Random noise
```

### Step 4: Generate

Prompt describes what to add in extended areas.

## Methods

### Method 1: Latent Expand

1. Create larger EmptyLatentImage
2. Encode original to center position
3. Leave extension areas as noise
4. Generate

### Method 2: Image Pad + Generate

1. Use ImagePad node to extend
2. Add extension areas
3. VAEEncode entire image
4. Generate

### Method 3: Multi-step Expand

1. Extend one direction
2. Merge result
3. Extend another direction
4. Repeat

## Parameter Settings

### Denoise Strength

| Value | Use Case |
|-------|----------|
| 0.6-0.7 | Match original style |
| 0.7-0.8 | Moderate new content |
| 0.8-0.9 | Significant new content |

### CFG

| Value | Effect |
|-------|--------|
| 6-7 | Soft blending |
| 7-9 | Clear continuation |
| 9-12 | Strong style |

## Extension Tips

### Seamless Blending

1. **Match lighting**: Describe same light source
2. **Match style**: Reference original art style
3. **Smooth transition**: Use feather mask
4. **Iterate**: Multiple passes for better blend

### Prompt Examples

**Landscape Extension:**
```
continuation of mountain landscape, seamless sky extension
same sunset colors, matching clouds, natural transition
```

**Portrait Extension:**
```
same woman, extended background with garden
matching lighting, soft bokeh, seamless blend
```

**Art Style:**
```
matching oil painting style, continuous brushstrokes
same color palette, artistic continuation
```

## Aspect Ratio Changes

### Portrait → Landscape

```
Original: 512x768 → Extended: 1024x768

Prompt: "wide landscape extending from scene, panoramic view"
```

### Landscape → Portrait

```
Original: 768x512 → Extended: 768x768

Prompt: "taller composition, extending upward with sky"
```

### Square → Any

```
Original: 512x512 → Any size

Adjust prompt to describe content in new areas
```

## Multi-direction Extension

### Extend All Sides

1. **Top**: Add sky, clouds, upper elements
2. **Bottom**: Add ground, foreground
3. **Left**: Add left-side elements
4. **Right**: Add right-side elements

### Process Order

1. Extend top (denoise 0.7)
2. Merge result
3. Extend bottom (denoise 0.6)
4. Continue for remaining sides

## Common Use Cases

### Panoramic

```
1. Start with center section
2. Extend left
3. Extend right
4. Result: Wide panoramic
```

### Add Framing

```
1. Add decorative borders
2. Add foreground elements
3. Add atmospheric particles
```

### Scene Completion

```
1. Load partial scene
2. Identify missing areas
3. Extend to complete
4. Add natural transitions
```

## Troubleshooting

### Q: Visible seam

**A**:
- Lower denoise
- Add feather transition
- Match lighting/colors

### Q: Style mismatch

**A**:
- Include style in prompt
- Use lower denoise
- Reference original explicitly

### Q: Content doesn't fit

**A**:
- Adjust prompt
- Use multiple passes
- Blend gradually

## Best Practices

1. **Start simple** → Single extension first
2. **Match style** → Consistent appearance
3. **Iterate** → Multiple small extensions
4. **Reference** → Mention original in prompt

## Next Steps

- [Inpainting](./inpainting) - Fix local areas
- [Upscale](./upscale) - Increase resolution
- [ControlNet](../tutorial/advanced/controlnet) - Structure control