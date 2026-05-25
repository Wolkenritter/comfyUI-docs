# Embedding (Textual Inversion)

Use text embeddings to enhance prompt capabilities.

## What is Embedding

Embedding (Textual Inversion) is a small model that extends prompt capabilities:

- Add trained concepts
- Trigger specific styles/characters
- Simplify long prompts

### vs LoRA

| Feature | Embedding | LoRA |
|---------|-----------|------|
| Size | ~KB | ~MB-GB |
| Use | Concept/style | Full style/character |
| Loading | Text prompt | Separate node |
| Effect | Precise control | Comprehensive |

## Embedding Format

| Format | Extension | Description |
|--------|-----------|-------------|
| SD 1.5 | .pt, .bin, .safetensors | Universal |
| SDXL | .safetensors (fp8) | SDXL specific |

## Installation Location

```
ComfyUI/models/embeddings/
├── bad-hands-5.pt
├── easynegative.safetensors
└── ultra-detailed.pt
```

### Installation

1. Download embedding file (.pt or .safetensors)
2. Place in `models/embeddings/`
3. Restart ComfyUI

## Usage

### Basic Syntax

In prompt, reference with:

```bash
# Format: embedding:name
# Or: <embedding:name>

# Example
1girl, beautiful, <embedding:easynegative>
```

### Calling Embeddings

```bash
# Negative Embedding
embedding:easynegative

# Positive Embedding
embedding:masterpiece

# Combined
1girl, beautiful, <embedding:masterpiece>, <embedding:ultra-detailed>
negative: <embedding:bad-hands-5>
```

## Popular Embeddings

### Universal Negative

| Embedding | Effect |
|-----------|--------|
| easynegative | General improvement |
| bad-hands-5 | Fix hands |
| bad-artist | Avoid low quality |
| bad-prompt | Basic fixes |

### Quality Enhancement

| Embedding | Effect |
|-----------|--------|
| masterpiece | Masterpiece level |
| best-quality | High quality |
| very-bad-hands-neg | Fix hands |
| deformed | Avoid deformation |

### Artist Styles

| Embedding | Style |
|-----------|-------|
| art by artstation | Artstation style |
| art by greg-rutkowski | Greg style |
| art by magdalena | Art style |

## Custom Embeddings

### Training Embedding

Using Textual Inversion:

```
Training data:
- 10-20 images of same type
- Consistent style/character

Parameters:
- Learning rate: 0.00005
- Steps: 1000-5000
- Regularization: Optional
```

### Training Tools

| Tool | Description |
|------|-------------|
| Stable Diffusion WebUI | Train Embedding |
| Kohya-ss | Training scripts |
| Custom tools | As needed |

### Naming

```
Recommended:
- concept_name.pt
- style_name.pt
- character_name.pt

Avoid:
- Chinese names
- Special characters
- Too long names
```

## Tips

### Combination

```bash
# Multiple embeddings
<embedding:masterpiece>, <embedding:easynegative>, <embedding:ultra-detailed>

Effect: Comprehensive improvement
```

### Weight Adjustment

```bash
# Some support weight
(embedding:name:0.8)

# Reduce intensity
(embedding:name:0.5)
```

### Negative Usage

```
Positive:
1girl, beautiful, <embedding:masterpiece>

Negative:
<embedding:bad-hands-5>, <embedding:deformed>
```

## Troubleshooting

### Q: Embedding not working

**A**:
- Check filename is correct
- Verify in correct directory
- Restart ComfyUI

### Q: Case sensitivity

**A**: Most don't care, use lowercase for safety.

### Q: How to uninstall

**A**: Delete file from `models/embeddings/`

## Next Steps

- [LoRA](./lora) - Style models
- [Prompt Basics](./prompt-basic) - More prompt techniques