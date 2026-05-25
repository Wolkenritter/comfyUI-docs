# Text-to-Image Workflow

Basic text-to-image generation workflow.

## Workflow Overview

```
[CheckpointLoader] → [CLIPTextEncode(positive)] → [KSampler] → [VAEDecode] → [SaveImage]
                    ↓ CLIP
                    [CLIPTextEncode(negative)]
```

## Step-by-Step

### Step 1: Load Checkpoint

```
Node: CheckpointLoader
Select: Your model (e.g., v1-5-pruned-emaonly.safetensors)
```

### Step 2: Encode Positive Prompt

```
Node: CLIPTextEncode
Input: clip from CheckpointLoader

Text: "masterpiece, best quality, a beautiful landscape with mountains and sunset"
```

### Step 3: Encode Negative Prompt

```
Node: CLIPTextEncode
Input: clip from CheckpointLoader

Text: "blurry, low quality, distorted, ugly"
```

### Step 4: Create Latent Image

```
Node: EmptyLatentImage
Width: 512
Height: 512
Batch size: 1
```

### Step 5: Sample

```
Node: KSampler
Model: from CheckpointLoader
Positive: from CLIPTextEncode (positive)
Negative: from CLIPTextEncode (negative)
Latent: from EmptyLatentImage

Steps: 20
CFG: 8
Sampler: euler
```

### Step 6: Decode

```
Node: VAEDecode
Samples: from KSampler
VAE: from CheckpointLoader
```

### Step 7: Save

```
Node: SaveImage
Images: from VAEDecode
Filename prefix: output
```

## Parameters Reference

| Parameter | Recommended | Description |
|-----------|-------------|-------------|
| Width | 512-768 | Image width |
| Height | 512-768 | Image height |
| Steps | 20-30 | Sampling steps |
| CFG | 7-10 | Prompt influence |
| Sampler | euler | Algorithm |

## Prompt Tips

### Quality Tags

```bash
# Always add
masterpiece, best quality, ultra detailed

# Style
digital art, photorealistic, 8k
```

### Negative Prompt

```bash
blurry, low quality, distorted, ugly
bad anatomy, extra fingers, mutation
```

## Advanced Options

### SDXL

Use SDXL checkpoint for higher quality:

```
Workflow: Same structure, SDXL checkpoint
Parameters: 1024x1024, 30-50 steps
```

### Higher Resolution

```
Width: 768, Height: 768
Steps: 30-40
CFG: 8-10
```

## Next Steps

- [Image-to-Image](./image-to-image) - Transform image
- [Inpainting](./inpainting) - Fix areas
- [ControlNet](./controlnet) - Add control