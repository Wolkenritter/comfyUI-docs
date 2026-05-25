# CLIPTextEncode Node

Encode text prompts for image generation.

## Function

Converts text into token embeddings that the model can understand.

## Inputs

| Input | Type | Description |
|-------|------|-------------|
| clip | clip | CLIP model from CheckpointLoader |
| text | string | Prompt text |

## Outputs

| Output | Type | Description |
|--------|------|-------------|
| CONDITIONING | conditioning | Encoded prompt for KSampler |

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| text | text | Prompt or negative prompt |

## Usage

### Positive Prompt

```
CheckpointLoader
    ↓ CLIP
CLIPTextEncode ("a beautiful landscape")
    ↓ CONDITIONING
KSampler (positive)
```

### Negative Prompt

```
CheckpointLoader
    ↓ CLIP
CLIPTextEncode ("blurry, low quality")
    ↓ CONDITIONING
KSampler (negative)
```

### SDXL Usage

SDXL uses two CLIP encoders:

```
CheckpointLoader
    ↓ CLIP (1)
CLIPTextEncodeSDXL → KSampler
    ↓ CLIP (2)
CLIPTextEncodeSDXL (same text)
```

## Prompt Syntax

### Quality Tags

```bash
# Add quality tags
masterpiece, best quality, ultra detailed

# Use parentheses for emphasis
(red hair) = more important
[(blue eyes)] = less important
```

### Weights

```bash
# Increase weight
(blue eyes:1.3)  # 30% more

# Decrease weight
(background:0.8)  # 20% less
```

## Tips

1. **Be specific**: More detail = better results
2. **Quality tags**: Add "masterpiece, best quality"
3. **Negative prompts**: Exclude unwanted elements

## Common Prompts

### Positive

```bash
masterpiece, best quality, detailed, 8k
```

### Negative

```bash
blurry, low quality, distorted, ugly
```

## Next Steps

- [KSampler](./sampler) - Use conditioning
- [Checkpoint](./checkpoint) - Load model