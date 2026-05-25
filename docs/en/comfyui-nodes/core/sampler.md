# KSampler Node

Sample latent image using model and prompts.

## Function

Core sampling node that generates images from noise.

## Inputs

| Input | Type | Description |
|-------|------|-------------|
| model | model | Model from CheckpointLoader |
| positive | conditioning | Positive prompt encoding |
| negative | conditioning | Negative prompt encoding |
| latent | latent | Latent image to sample |

## Outputs

| Output | Type | Description |
|--------|------|-------------|
| LATENT | latent | Sampled latent image |

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| seed | int | Random seed |
| steps | int | Sampling steps (20-50) |
| cfg | float | CFG scale (7-10) |
| sampler_name | dropdown | Sampler algorithm |
| scheduler | dropdown | Scheduler type |
| positive | conditioning | Positive conditioning |
| negative | conditioning | Negative conditioning |

## Sampler Types

| Sampler | Speed | Quality | Notes |
|---------|-------|--------|-------|
| euler | Fast | Good | Recommended |
| euler_ancestral | Fast | Good | More variation |
| dpm++ 2M | Medium | Better | Smooth |
| dpm++ 2M Karras | Medium | Best | Consistent |
| ddim | Slow | Good | Traditional |
| UniPC | Fast | Good | New algorithm |

## Schedulers

| Scheduler | Effect |
|-----------|--------|
| normal | Standard |
| karras | Tighter at end |
| exponential | Smoother |
| simple | Basic |

## Parameters Explained

### Steps

| Value | Use Case |
|-------|----------|
| 10-15 | Quick preview |
| 20-30 | Standard quality |
| 35-50 | High quality |

### CFG Scale

| Value | Effect |
|-------|--------|
| 3-5 | Creative, less strict |
| 6-8 | Balanced |
| 9-12 | Strict prompt following |

## Usage Example

```
CheckpointLoader
    ↓ MODEL → KSampler
    ↓ CLIP
CLIPTextEncode (positive) → KSampler
    ↓
CLIPTextEncode (negative) → KSampler
    ↓
EmptyLatentImage → KSampler
    ↓ LATENT
VAEDecode → SaveImage
```

## Tips

1. **Start with defaults**: 20 steps, CFG 8
2. **Increase for detail**: More steps = more detail
3. **Adjust CFG**: Higher for strict following

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Black image | Check model/VAE |
| Garbled output | Lower CFG |
| Too similar | Increase steps |

## Next Steps

- [VAEDecode](./latent) - Decode latent to image
- [EmptyLatentImage](./latent) - Create noise