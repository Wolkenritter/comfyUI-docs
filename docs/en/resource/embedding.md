# Embedding Models

Text embeddings for better generation.

## What is Embedding

Embedding (Textual Inversion) adds custom concepts to the model's vocabulary.

## Popular Embeddings

### Quality Embeddings

| Embedding | Effect | Use |
|-----------|--------|-----|
| easynegative | General improvement | Negative |
| deep-negative | Stronger negatives | Negative |
| bad-artist | Prevents bad art | Negative |
| bad-hands | Fix hand issues | Negative |

### Style Embeddings

| Embedding | Style |
|-----------|-------|
| artstyle | Various art styles |
| Disney | Disney style |
| Pixar | Pixar style |

## Installation

```
ComfyUI/models/embeddings/
  easynegative.safetensors
  bad-artist-anime.pt
```

## Usage

### In Prompt

```bash
# Negative prompt
easynegative

# Positive
embedding:my-embedding-name
```

## Training Custom Embedding

### Requirements

- 10-30 sample images
- Consistent subject/style
- Quality over quantity

### Training Process

1. Prepare dataset
2. Configure training
3. Train model
4. Test result

## Tips

1. **Use quality embeddings**: Easy improvement
2. **Combine**: Multiple embeddings
3. **Adjust weight**: Fine-tune effect

## Next Steps

- [VAE](./vae) - Encoder models
- [Custom Nodes](./custom-nodes) - Extensions