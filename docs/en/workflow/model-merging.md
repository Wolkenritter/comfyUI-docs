# Model Merging Workflow

Learn to merge multiple models in ComfyUI.

## Model Merging Basics

Model merging combines strengths of multiple models.

### Merge Types

| Type | Description |
|------|-------------|
| Weight Average | Direct weighted average |
| Interpolation | Proportional mix |

## Merge Tools

### Official Merge

ComfyUI has built-in merge tools:

```
Node: ModelMergeSimple
     ModelMergeSDXL
```

### Merge Workflow

```
┌─────────────┐    ┌─────────────┐
│ CheckpointL │    │ CheckpointL │
│ oader (A)   │    │ oader (B)   │
└──────┬──────┘    └──────┬──────┘
       │                  │
       ↓                  ↓
┌──────────────────────────────┐
│        ModelMergeSimple       │
│        (ratio: 0.5)          │
└──────────────────┬───────────┘
                   ↓
            ┌─────────────┐
            │ SaveCheckpoint │
            └─────────────┘
```

## Parameters

### Weight Ratio

| Value | Effect |
|-------|--------|
| 0.0 | Complete model A |
| 0.5 | 50% each |
| 1.0 | Complete model B |

### Recommended Ratios

| Goal | Ratio |
|------|-------|
| Keep A style | 0.2-0.3 |
| Balance | 0.4-0.6 |
| Closer to B | 0.7-0.8 |

## SDXL Merge

### SDXL Merge Node

Use SDXL-specific merge node:

```
Node: ModelMergeSDXL

Input:
- model_a: SDXL model A
- model_b: SDXL model B
- ratio: Merge ratio

Output:
- merged_model: Merged model
```

### SDXL Notes

| Note | Description |
|------|-------------|
| Model version | Must both be SDXL |
| VAE | Use SDXL-specific VAE |

## Save Model

### Save Merged Result

```
Node: SaveCheckpoint

Save location:
ComfyUI/models/checkpoints/
```

## Test Merged Results

### Generate Comparison

```
1. Use same prompts
2. Generate tests separately
3. Compare quality
4. Adjust ratio
```

## Troubleshooting

### Q: Merged model won't work

**A**:
- Check model versions are compatible
- Ensure correct format (safetensors)
- Restart ComfyUI

### Q: How to choose ratio

**A**:
- Start with 0.5 for testing
- Adjust based on results

## Next Steps

- [Workflow Index](./) - More workflows
- [SDXL](./sdxl) - SDXL usage