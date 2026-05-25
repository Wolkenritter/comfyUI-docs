# Image-to-Image Workflow

Transform existing images using AI.

## Concept

Image-to-image (I2I) uses an existing image as starting point, modifying it based on your prompt.

## Workflow

```
[LoadImage] → [VAEEncode] → [KSampler] → [VAEDecode] → [SaveImage]
               ↑                           ↑
[CheckpointLoader] → [CLIPTextEncode(positive)]
                  ↓ CLIP
                  [CLIPTextEncode(negative)]
```

## Step-by-Step

### Step 1: Load Image

```
Node: LoadImage
Upload: Your source image
```

### Step 2: Encode to Latent

```
Node: VAEEncode
Pixels: from LoadImage
VAE: from CheckpointLoader
```

### Step 3: Enter Prompt

```
Node: CLIPTextEncode
Text: "describe what you want to change"
Example: "same person with longer hair, artistic style"
```

### Step 4: Set Denoise Strength

```
Node: KSampler
Denoise: 0.5-0.8

Lower = more like original
Higher = more creative changes
```

### Step 5: Decode and Save

```
VAEDecode → SaveImage
```

## Key Parameter: Denoise

| Denoise | Effect | Use Case |
|---------|--------|----------|
| 0.1-0.3 | Very subtle | Color adjustment |
| 0.4-0.6 | Moderate | Style transfer |
| 0.7-0.9 | Strong | Major changes |
| 1.0 | Complete new | From scratch |

## Use Cases

### Style Transfer

```
Input: Portrait photo
Prompt: "oil painting style, impressionist"
Denoise: 0.5-0.7
```

### Age/Gender Change

```
Input: Face photo
Prompt: "same person, younger, smooth skin"
Denoise: 0.4-0.6
```

### Background Change

```
Input: Person with busy background
Prompt: "same person, clean white background"
Denoise: 0.6-0.8
```

### Colorization

```
Input: Black and white photo
Prompt: "same scene, vibrant colors, natural lighting"
Denoise: 0.6-0.8
```

## Tips

1. **Start low**: 0.4-0.6 for subtle changes
2. **Match resolution**: Keep same aspect ratio
3. **Use ControlNet**: For structure preservation

## Advanced: With ControlNet

```
[LoadImage] → [Preprocessor] → [ControlNet] → [Apply ControlNet]
                                        ↓
[Checkpoint] → [CLIPTextEncode] → [KSampler]
```

## Next Steps

- [Inpainting](./inpainting) - Fix specific areas
- [Outpainting](./outpainting) - Extend image
- [ControlNet](./controlnet) - Structure control