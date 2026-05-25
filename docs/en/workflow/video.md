# Video Generation Workflow

Learn to generate videos with ComfyUI.

## Supported Models

### Video Models

| Model | Description | Features |
|-------|-------------|----------|
| SVD | Stable Video Diffusion | Image to video |
| AnimateDiff | Animation generation | Style animation |

### Model Selection

| Need | Recommended |
|------|-------------|
| Realistic video | SVD |
| Style animation | AnimateDiff |

## SVD (Stable Video Diffusion)

### Installation

```
ComfyUI/models/checkpoints/
svd.safetensors           # Base version
svd_xt.safetensors        # XT version (higher quality)
```

### Image to Video Workflow

```
┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│ LoadImage   │ →  │ SVDVideoGen │ →  │ VideoCombine│
│ (first frame)│   │ eration     │    │             │
└─────────────┘    └─────────────┘    └─────────────┘
```

### Parameters

| Parameter | Description | Recommended |
|-----------|-------------|-------------|
| frames | Video frames | 14-25 |
| fps | Frame rate | 12-30 |
| motion_bucket_id | Motion intensity | 50-127 |

## AnimateDiff

### Installation

```
ComfyUI/models/checkpoints/
# Needs AnimateDiff-compatible model

ComfyUI/custom_nodes/
ComfyUI-AnimateDiff-Evolved/
```

### AnimateDiff Workflow

```
┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│ CheckpointL │ →  │ AnimateDiff │ →  │ VAEDecode   │
│ oader       │    │ Loader      │    │             │
└─────────────┘    └─────────────┘    └─────────────┘
```

### Motion Modules

| Module | Description |
|--------|-------------|
| mm_sd_v15_v2.ckpt | Standard animation |
| mm_sd_v15_v3.ckpt | Enhanced |

## Video Save

### VideoCombine Node

```
Output settings:
- format: mp4 / gif
- fps: 24-30
- codec: h264 / vp9
```

### Common Formats

| Format | Use | Recommended |
|--------|-----|-------------|
| MP4 | Universal | Recommended |
| GIF | Social media | Loop |

## Tips

### Dynamic Description

| Description | Effect |
|-------------|--------|
| flowing hair | Flowing hair |
| wind, breeze | Wind effect |
| dancing, moving | Dynamic action |

## Troubleshooting

### Q: Video generation slow

**A**: 
- Reduce frames
- Use smaller resolution
- Use AnimateDiff Turbo

### Q: Video shaky

**A**:
- Lower motion_bucket_id
- Use stable prompts

## Next Steps

- [Advanced Tutorials](../tutorial/advanced/) - More techniques