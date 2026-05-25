# Video Generation Workflow

Learn to generate videos with ComfyUI.

## Supported Models

### Video Models

| Model | Description | Features |
|-------|-------------|----------|
| SVD | Stable Video Diffusion | Image to video |
| AnimateDiff | Animation generation | Style animation |
| LaibA | Chinese video model | Chinese optimized |

### Model Selection

| Need | Recommended |
|------|-------------|
| Realistic video | SVD |
| Style animation | AnimateDiff |
| Fast generation | AnimateDiff Turbo |

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
| video_frames | Total frames | 14-25 |

### Quality Settings

| Quality | Frames | Motion | FPS |
|---------|--------|--------|-----|
| Fast Preview | 14 | 50 | 12 |
| Standard | 25 | 80 | 24 |
| High Quality | 25 | 127 | 30 |

## AnimateDiff

### Installation

```
ComfyUI/models/checkpoints/
# Needs AnimateDiff-compatible model
# Recommended: SD 1.5 anime model

ComfyUI/custom_nodes/
ComfyUI-AnimateDiff-Evolved/
```

### AnimateDiff Workflow

```
┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│ CheckpointL │ →  │ AnimateDiff │ →  │ VAEDecode   │
│ oader       │    │ Loader      │    │             │
└─────────────┘    └─────────────┘    └─────────────┘
                       ↓
                  ┌─────────────┐
                  │ VideoSave   │
                  │ (optional)  │
                  └─────────────┘
```

### Motion Modules

| Module | Description |
|--------|-------------|
| mm_sd_v15_v2.ckpt | Standard animation |
| mm_sd_v15_v3.ckpt | Enhanced |
| v3_lora | LoRA version |

## Video Save

### VideoCombine Node

```
Output settings:
- format: mp4 / gif
- fps: 24-30
- codec: h264 / vp9
- quality: Adjust file size
```

### Common Formats

| Format | Use | Recommended |
|--------|-----|-------------|
| MP4 | Universal | Recommended |
| GIF | Social media | Loop |
| WEBM | Web | Small file |

## Tips

### Dynamic Description

| Description | Effect |
|-------------|--------|
| flowing hair | Flowing hair |
| wind, breeze | Wind effect |
| dancing, moving | Dynamic action |
| camera pan | Camera movement |

### Stable Description

| Description | Effect |
|-------------|--------|
| static pose | Stable pose |
| standing still | Standing still |
| no movement | No motion |

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
- Reduce frames

### Q: Generation interrupted

**A**:
- Check VRAM
- Lower settings
- Update drivers

## Next Steps

- [AnimateDiff Detail](./animatediff) - Animation generation
- [LaibA Model](../tutorial/laihua) - Chinese model