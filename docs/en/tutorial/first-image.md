# Generate Your First Image

Step-by-step guide to generating your first image.

## Prerequisites

- ComfyUI is installed
- A checkpoint model is downloaded
- Stable Diffusion model in ComfyUI/models/checkpoints/

## Basic Steps

### Step 1: Start ComfyUI

```bash
python main.py
```

Open browser: http://127.0.0.1:8188

### Step 2: Load a Checkpoint

1. Right-click on canvas
2. Search "CheckpointLoader"
3. Click to add node
4. Select your model from dropdown

### Step 3: Enter Positive Prompt

1. Right-click → "CLIP Text Encode"
2. Connect: Checkpoint → CLIP
3. Enter your prompt in text box

Example prompts:

```bash
# Portrait
a beautiful woman, detailed face, soft lighting, 8k

# Landscape
mountain landscape at sunset, golden hour, detailed

# Fantasy
magical forest, floating islands, fantasy art style
```

### Step 4: Enter Negative Prompt

1. Add another "CLIP Text Encode" node
2. Connect to negative slot of KSampler
3. Enter things to avoid

Common negatives:

```bash
blurry, low quality, distorted, ugly, bad anatomy
```

### Step 5: Set Sampler

1. Right-click → "KSampler"
2. Connect: Checkpoint → positive CLIP
3. Connect: Checkpoint → negative CLIP
4. Set parameters:

| Parameter | Recommended | Description |
|-----------|-------------|-------------|
| Steps | 20-30 | Sampling steps |
| CFG | 7-8 | Prompt influence |
| Sampler | euler | Algorithm |
| Denoise | 1.0 | Full denoise |

### Step 6: Decode and Save

1. Add "VAEDecode" node
2. Connect KSampler → VAEDecode
3. Add "SaveImage" node
4. Connect VAEDecode → SaveImage

### Step 7: Generate

Click "Queue Prompt" button (top right)

## Complete Workflow

```
[CheckpointLoader]
      ↓
[CLIPTextEncode(positive)] → [KSampler] → [VAEDecode] → [SaveImage]
      ↑
[CLIPTextEncode(negative)]
```

## Parameters Explained

### Steps

| Value | Effect |
|-------|--------|
| 10-15 | Fast, lower quality |
| 20-30 | Balanced |
| 35-50 | High quality, slower |

### CFG Scale

| Value | Effect |
|-------|--------|
| 3-5 | More creative |
| 6-8 | Balanced |
| 9-12 | Strict following |

### Resolution

| Size | Use Case |
|------|----------|
| 512x512 | Quick preview |
| 768x768 | Standard |
| 1024x1024 | High quality |

## Tips

### Better Results

- Use detailed prompts
- Add quality tags: "masterpiece, best quality"
- Use appropriate negative prompts
- Start with 512x512 for faster iteration

### Common Issues

| Issue | Solution |
|-------|----------|
| Black image | Check model file |
| Slow generation | Lower steps or use fp16 |
| Out of memory | Reduce resolution |

## Next Steps

- [Prompt Basics](./prompt-basic) - Write better prompts
- [Share Models](./share-models) - Share models
- [Inpainting](./inpainting) - Fix specific areas