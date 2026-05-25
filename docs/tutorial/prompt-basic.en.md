# Prompt Basics

Learn the fundamentals of writing effective prompts.

## What is a Prompt

A prompt is a text description that tells the AI what to generate.

```
Input: "1girl, beautiful face, blue eyes, long hair"
Output: [Generated image matching description]
```

## Prompt Structure

### Basic Format

```bash
[Main Subject], [Style], [Environment], [Quality Tags]
```

### Example Breakdown

```
Prompt: "1girl, elegant dress, garden background, sunset, 8k, masterpiece"

Parts:
- 1girl           → Main subject
- elegant dress   → Clothing
- garden          → Environment
- sunset          → Lighting
- 8k, masterpiece → Quality
```

## Subject Description

### People

| Element | Example | Description |
|---------|--------|-------------|
| Gender | 1girl, man | Subject gender |
| Age | young, old, teenage | Subject age |
| Features | beautiful, handsome | Appearance |
| Hair | long hair, short hair | Hairstyle |
| Eyes | blue eyes, green eyes | Eye color |
| Clothing | dress, suit, casual | Outfit |

### Environment

| Element | Example | Description |
|---------|--------|-------------|
| Indoor | living room, studio | Inside setting |
| Outdoor | forest, beach | Outside setting |
| Time | night, sunset, day | Time of day |
| Weather | sunny, rainy, foggy | Weather |

## Quality Tags

### Standard Quality

```bash
# Add to end of prompt
masterpiece, best quality, highly detailed, 8k
```

### Photography

```bash
shot on Canon 5D, f1.8 aperture, bokeh
film grain, professional photography
```

### Art Style

```bash
# Oil painting
oil painting, impressionist, thick brushstrokes

# Digital art
digital art, illustration, vibrant colors

# Anime
anime style, manga, cel shading
```

## Weight Syntax

### Emphasis

| Syntax | Effect | Example |
|--------|--------|---------|
| (word) | 1.1x emphasis | (beautiful) |
| ((word)) | 1.21x emphasis | ((beautiful)) |
| [word] | 0.9x de-emphasis | [ugly] |
| word:1.5 | Custom weight | beautiful:1.5 |

### Usage

```
# Normal
1girl, beautiful, dress

# With emphasis - dress more prominent
1girl, beautiful, (dress:1.2)

# With de-emphasis - less focus on background
1girl, beautiful, [background:0.5]
```

## Negative Prompts

### What to Avoid

```bash
# Standard negative
blurry, low quality, distorted, ugly, bad anatomy

# Hands
deformed hands, extra fingers, poorly drawn hands

# Faces
ugly face, distorted, duplicate features

# Style
anime, cartoon (if wanting realistic)
```

### How to Use

1. Add CLIPTextEncode for negative
2. Connect to KSampler negative input
3. Add unwanted elements

```
CLIPTextEncode(positive): 1girl, beautiful, 8k
CLIPTextEncode(negative): blurry, ugly, deformed
```

## Common Patterns

### Portrait

```bash
# Structure
[Subject], [Clothing], [Pose], [Background], [Lighting], [Quality]

# Example
1girl, elegant white dress, standing pose
outdoor garden, sunset lighting, golden hour
soft bokeh, 8k, masterpiece, best quality
```

### Landscape

```bash
# Structure
[Scene], [Time], [Weather], [Details], [Quality]

# Example
mountain landscape, sunset, dramatic clouds
pine trees, valley, mist, reflection in lake
highly detailed, 8k, cinematic, masterpiece
```

### Art

```bash
# Structure
[Subject], [Style], [Artist], [Technique], [Quality]

# Example
portrait of a woman, impressionist style
art by Monet, oil painting, soft brushstrokes
vibrant colors, masterpiece, best quality
```

## Tips and Tricks

### Do

- ✅ Be specific and detailed
- ✅ Use commas for separation
- ✅ Add quality tags at end
- ✅ Use negative prompts
- ✅ Test and iterate

### Don't

- ❌ Write too long sentences
- ❌ Use contradictory terms
- ❌ Forget quality tags
- ❌ Ignore negative prompts

## Model Differences

### SD 1.5

- Works well with short prompts
- Quality tags very effective
- Good for most subjects

### SDXL

- Benefits from longer prompts
- Better context understanding
- More detailed outputs

### Flux

- Natural language works
- Less reliance on quality tags
- Better prompt following

## Examples

### Example 1: Portrait

```bash
# Prompt
1girl, beautiful woman, long flowing hair, blue eyes
elegant evening gown, pearl necklace, standing in grand ballroom
crystal chandeliers, golden lighting, dramatic
8k, highly detailed, masterpiece, professional photography

# Negative
blurry, low quality, distorted, ugly, bad anatomy, extra fingers
```

### Example 2: Landscape

```bash
# Prompt
vast mountain landscape, snow-capped peaks, dramatic sky
sunset, orange and purple clouds, golden hour light
crystal clear lake, pine forest, reflections
highly detailed, 8k, cinematic, masterpiece

# Negative
blurry, low quality, distorted, ugly, cartoon, anime
```

### Example 3: Fantasy

```bash
# Prompt
fantasy warrior woman, golden armor, flowing cape
long wavy hair, determined expression, sword in hand
ancient temple ruins, magical particles, mystical atmosphere
cinematic lighting, epic, 8k, masterpiece

# Negative
blurry, low quality, distorted, ugly, bad anatomy, malformed
```

## Next Steps

- [Embedding](./embedding) - Use text embeddings
- [LoRA](./lora) - Style models
- [Inpainting](./inpainting) - Fix images