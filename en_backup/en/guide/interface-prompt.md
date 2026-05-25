# Prompt Writing Tips

Master the art of writing effective prompts for better image generation.

## Prompt Structure

### Basic Format

```
[Subject], [Style], [Details], [Quality tags]
```

### Example

```
1girl, beautiful face, long hair, blue eyes, smiling
studio photo, soft lighting, professional
8k, highly detailed, masterpiece
```

## Subject Description

### Person/Character

| Element | Example |
|---------|---------|
| Gender | 1girl, 1boy, woman, man |
| Age | young, old, teenage |
| Appearance | beautiful, handsome, cute |
| Features | long hair, short hair, curly hair |
| Clothing | dress, suit, casual |
| Expression | smiling, serious, angry |

### Scene

| Element | Example |
|---------|---------|
| Setting | indoor, outdoor, forest, beach |
| Time | day, night, sunset, golden hour |
| Weather | sunny, rainy, snowy |
| Background | simple, detailed, bokeh |

## Quality Tags

### Standard Tags

| Tag | Effect |
|-----|-------|
| masterpiece | High quality output |
| best quality | Best quality |
| highly detailed | More details |
| 8k, 4k | High resolution |
| professional | Professional look |
| studio lighting | Studio lighting |

### Camera/Photography

| Tag | Effect |
|-----|-------|
| shot on Canon 5D | Photo-realistic |
| film grain | Vintage feel |
| f1.8 aperture | Bokeh effect |
| 35mm lens | Cinematic |

## Style Keywords

### Art Styles

| Style | Keywords |
|-------|----------|
| Anime | anime style, manga |
| Realistic | photorealistic, realistic |
| Oil painting | oil painting, impressionist |
| Digital art | digital art, illustration |
| 3D | 3D render, octane render |

### Artist Styles

| Artist | Keywords |
|--------|----------|
| Studio Ghibli | ghibli style, hayao miyazaki |
| Greg Rutkowski | art by greg rutkowski |
| Artstation | artstation trend |
| Unreal Engine | unreal engine 5 |

## Weight Syntax

### Emphasis

| Syntax | Effect |
|--------|--------|
| (word) | 1.1x weight |
| ((word)) | 1.21x weight |
| [word] | 0.9x weight |
| word:1.3 | 1.3x weight |
| word:0.7 | 0.7x weight |

### Examples

```
# Normal
1girl, beautiful

# Emphasis
(1girl), beautiful  # Girl more prominent

# De-emphasis
1girl, [beautiful]  # Girl less prominent

# Custom weight
1girl:1.5, beautiful:0.5
```

## Negative Prompts

### What to Avoid

| Category | Negative |
|----------|----------|
| Quality | blurry, low quality, bad anatomy |
| Hands | deformed hands, extra fingers |
| Faces | ugly, distorted face |
| Style | anime, cartoon (if realistic wanted) |
| Artifacts | watermark, text, signature |

### Common Negative Prompt

```
blurry, low quality, distorted, ugly, bad anatomy
extra fingers, deformed hands, poorly drawn face
bad proportions, watermark, text, signature
```

## Advanced Techniques

### Comma Separation

Use commas to separate elements:

```
# Good - clear separation
1girl, red dress, forest background, golden hour

# Less effective
1girl with red dress standing in forest at golden hour
```

### Layered Description

```
# Format
foreground, subject, background, lighting, quality

# Example
1girl in red dress (foreground)
standing in flower garden (background)
golden hour lighting, warm colors (lighting)
8k, masterpiece, highly detailed (quality)
```

### Aspect Ratio

| Ratio | Keywords |
|-------|----------|
| Portrait | 1girl, upper body, portrait |
| Landscape | landscape, wide shot |
| Square | 1girl, centered |
| Cinematic | cinematic, 21:9 |

## Model-Specific Tips

### SD 1.5

- Works well with detailed prompts
- Less sensitive to weight syntax
- Good for general subjects

### SDXL

- Longer prompts work better
- Supports more complex compositions
- Better at understanding context

### Flux

- Less reliant on quality tags
- Follows natural language better
- Less need for weights

## Examples

### Portrait

```
# Prompt
1girl, beautiful face, long black hair, blue eyes
elegant white dress, standing in garden
soft lighting, golden hour, bokeh background
masterpiece, best quality, 8k, professional photo

# Negative
blurry, low quality, deformed, extra fingers, bad anatomy
```

### Landscape

```
# Prompt
mountain landscape, snow-capped peaks
sunset, orange sky, dramatic clouds
lake reflection, pine trees, misty valley
highly detailed, 8k, cinematic, masterpiece

# Negative
blurry, low quality, distorted, ugly
```

### Art Style

```
# Prompt
oil painting of a medieval castle
dramatic lighting, dark atmosphere, storm clouds
impressionist brushstrokes, vibrant colors
art by artstation, masterpiece

# Negative
anime, cartoon, photo, low quality
```

## Troubleshooting

### Q: Prompt not working

**A**: 
- Check spelling
- Simplify prompt
- Try different keywords

### Q: Unwanted elements

**A**: 
- Add to negative prompt
- Use weights to reduce
- Check model compatibility

### Q: Quality inconsistent

**A**:
- Add quality tags
- Increase CFG
- Use more steps

## Next Steps

- [Embedding](../tutorial/embedding) - Use text embeddings
- [LoRA](../tutorial/lora) - Style models