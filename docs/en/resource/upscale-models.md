# Upscale Models

AI upscaling models.

## Popular Upscale Models

### General Use

| Model | Scale | Description |
|-------|-------|-------------|
| 4x-UltraSharp | 4x | Best for photos |
| RealESRGAN_x4 | 4x | General purpose |
| ESRGAN | 4x | Traditional |

### Anime

| Model | Scale | Description |
|-------|-------|-------------|
| 4x-NickelSSR | 4x | Anime style |
| 4x-AnimeSharp | 4x | Anime line art |
| RealESRGAN_Animevideov3 | 4x | Anime video |

## Installation

```
ComfyUI/models/upscale_models/
  4x-UltraSharp.pth
  4x-NickelSSR_900000.pth
```

## Usage with UltimateSDUpscale

```
Node: UltimateSDUpscale
Model: 4x-UltraSharp
Scale: 2-4x
Tile: 512
```

## Parameters

| Parameter | Value | Description |
|-----------|-------|-------------|
| Scale | 2-4 | Upscale factor |
| Tile Size | 512-768 | Processing size |
| Tile Padding | 64-128 | Edge overlap |

## Tips

1. **Choose right model**: Photos vs anime
2. **Tile size**: Balance quality and memory
3. **2x first**: Start with 2x, then 4x if needed

## Sources

- [Upscale Models Archive](https://upscale.wiki/)
- [Civitai](https://civitai.com)

## Next Steps

- [Custom Nodes](./custom-nodes) - Required nodes
- [Official Resources](./official) - More resources