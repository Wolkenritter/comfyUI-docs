# Prompt Basics

Learn how to write effective prompts for better results.

## Prompt Structure

### Basic Format

```
[Subject], [Details], [Style], [Quality]
```

### Example

```
a beautiful woman with long flowing hair, detailed eyes, soft lighting, digital art, 8k, masterpiece
```

## Quality Tags

Add these to improve quality:

| Tag | Effect |
|-----|--------|
| masterpiece | Higher quality |
| best quality | Better details |
| ultra detailed | More details |
| 8k, 4k | Higher resolution |
| professional | Professional look |
| studio lighting | Better lighting |

## Subject Description

### Appearance

```bash
# Age
young woman, middle-aged man, elderly person

# Features
detailed face, blue eyes, long hair, short hair

# Expression
smiling, serious, mysterious, happy
```

### Clothing

```bash
wearing elegant dress
wearing casual t-shirt and jeans
in formal suit
traditional clothing
```

### Setting

```bash
standing in forest
sitting in cafe
on rooftop at sunset
in modern living room
```

## Style Keywords

### Art Styles

| Style | Keyword |
|-------|---------|
| Digital Art | digital art, illustration |
| Oil Painting | oil painting, impressionist |
| Photo | photorealistic, shot on Canon |
| Anime | anime style, manga |
| 3D | 3D render, octane render |

### Mood

```bash
dramatic lighting, soft lighting, cinematic
dark atmosphere, bright and cheerful
moody, ethereal, magical
```

## Negative Prompts

Exclude unwanted elements:

```bash
# Common negatives
blurry, low quality, distorted, ugly, bad anatomy
extra fingers, missing limbs, mutation
text, watermark, signature
```

## Advanced Techniques

### Weighted Prompts

```bash
# Use parentheses for emphasis
(red hair:1.3)  # 30% more important
blue eyes  # normal weight

# Use brackets to de-emphasize
[green background]  # less emphasis
```

### Sequential Prompts

```bash
# Separate different aspects
# 1. Subject: beautiful woman
# 2. Style: digital art
# 3. Quality: 8k, masterpiece
```

## Prompt Examples

### Portrait

```
masterpiece, best quality, a beautiful woman with long flowing hair, detailed face, soft blue eyes, gentle smile, wearing elegant white dress, golden hour lighting, professional photography, 8k
```

### Landscape

```
masterpiece, best quality, stunning mountain landscape at sunset, golden orange sky, snow-capped peaks, pine forest in foreground, mist in valley, cinematic lighting, dramatic clouds, 8k resolution
```

### Fantasy

```
masterpiece, best quality, magical floating island with waterfalls cascading into clouds, ancient ruins, glowing crystals, fantasy art style, detailed vegetation, ethereal lighting, 8k
```

## Tips

1. **Be specific**: "cat" vs "fluffy white Persian cat with blue eyes"
2. **Add quality tags**: Always include "masterpiece, best quality"
3. **Use comma separation**: Natural language parsing
4. **Order matters**: Put important elements first
5. **Test and iterate**: Adjust based on results

## Next Steps

- [Embedding](./embedding) - Use text embeddings
- [LoRA](./lora) - Use style models
- [Inpainting](./inpainting) - Fix specific areas