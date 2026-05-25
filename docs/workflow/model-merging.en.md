# Model Merging Workflow

Learn to merge multiple models in ComfyUI.

## Model Merging Basics

Model merging combines strengths of multiple models.

### Merge Types

| Type | Description |
|------|-------------|
| Weight Average | Direct weighted average |
| Interpolation | Proportional mix |
| Checkpoint Merge | Merge complete models |

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

## SD 1.5 Merge Example

### Merge Two Anime Models

```
Model A: anime model (anime style)
Model B: realistic model (realistic style)

Ratio: 0.4 (偏向动漫)

Result: Anime style + partial realistic details
```

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
| LoRA | Apply after merge |

## Advanced Merge

### Multi-model Merge

```
Model A (0.3) + Model B (0.3) + Model C (0.4)
= New model
```

### Using Math Nodes

More flexible merge:

```
Node: MathOperation
     Add, Subtract, Multiply

Method:
1. Load multiple models
2. Use Math node for weight calculation
3. Merge results
```

## Save Model

### Save Merged Result

```
Node: SaveCheckpoint

Settings:
- output_path: Save path
- filename: File name

Save location:
ComfyUI/models/checkpoints/
```

## Strategies

### Style Fusion

| Strategy | Description |
|---------|-------------|
| Anime + Realistic | Balance styles |
| Realistic + Art | Enhanced expression |
| Multi-style | Creative mix |

### Quality Improvement

| Strategy | Description |
|---------|-------------|
| Good + Good | Quality stacking |
| Good + Bad | Improve bad model |
| Specific style | Custom attributes |

## Test Merged Results

### Generate Comparison

```
1. Use same prompts
2. Generate tests separately
3. Compare quality
4. Adjust ratio
```

### Iterate

```
Original ratio: 0.5
↓ Quality not good
Adjust: 0.4 or 0.6
↓ Continue testing
Find optimal ratio
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
- Keep notes of satisfactory ratios

### Q: Can I undo merge

**A**: No undo, save multiple versions.

## Next Steps

- [Workflow Index](./) - More workflows
- [SDXL](./sdxl) - SDXL usage