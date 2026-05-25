# Embedding Tutorial

Use text embeddings for better generation control.

## What is Embedding

Embedding (or Textual Inversion) is a technique to represent specific concepts, styles, or objects as custom tokens in the model's vocabulary.

## Use Cases

- Add new concepts or styles
- Character consistency
- Specific art styles
- Custom objects or poses

## Embedding Files

Format: `.pt`, `.safetensors`, or `.png`

Location: `ComfyUI/models/embeddings/`

## Basic Usage

### Step 1: Download Embedding

Get embedding files from sources like:

- Civitai
- Hugging Face
- Civitai embeddings

### Step 2: Place File

```
ComfyUI/models/embeddings/
  embedding-name.safetensors
```

### Step 3: Use in Prompt

```bash
# Use embedding by name
embedding:embedding-name

# Example
a person embedding:my-character
```

## Common Embeddings

### Style Embeddings

| Embedding | Effect |
|-----------|--------|
| bad-artist | Negative for bad anatomy |
| bad-hands | Fix hand issues |
| easynegative | General quality improvement |
| deep-negative | Stronger negatives |

### Character Embeddings

- Character-specific trained embeddings
- Maintain consistent appearance
- Use: `embedding:character-name`

## Using Negative Embeddings

### bad-artist-anime

```bash
# Negative prompt
(bad-artist-anime:0.8), (bad-hands:1.2)
```

### easynegative

```bash
# Much simpler than listing all negatives
easynegative
```

### deep-negative

```bash
# Stronger effect
deep-negative
```

## Advanced: Custom Embeddings

### Training Embedding

Requires:
- 5-20 example images
- Subject representation images
- Training script (for A1111)

### Using Custom Embedding

```bash
# In prompt
my-custom-concept

# With weight
(my-custom-concept:1.2)
```

## Tips

1. **Naming**: Use descriptive names
2. **Organization**: Group by type/style
3. **Testing**: Try different weights
4. **Combination**: Mix multiple embeddings

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Not loading | Check file location |
| No effect | Check spelling in prompt |
| Too strong | Lower weight (0.5-0.8) |

## Next Steps

- [LoRA](./lora) - Use LoRA models
- [ControlNet](../tutorial/advanced/controlnet) - Structure control
- [Prompt Basics](./prompt-basic) - Better prompts