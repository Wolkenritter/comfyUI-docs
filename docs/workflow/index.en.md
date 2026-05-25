# Workflow Examples

Workflows are the core functionality of ComfyUI. Mastering workflows can greatly improve efficiency.

## Workflow Types

### Image Generation

| Workflow | Description | Difficulty |
|----------|-------------|-------------|
| [Text-to-Image](./text-to-image) | Text to image | ⭐ |
| [Image-to-Image](./image-to-image) | Image to image | ⭐⭐ |
| [Inpainting](./inpainting) | Fix local areas | ⭐⭐ |
| [Outpainting](./outpainting) | Extend borders | ⭐⭐ |

### Advanced Features

| Workflow | Description | Difficulty |
|----------|-------------|-------------|
| [SDXL](./sdxl) | SDXL model usage | ⭐⭐ |
| [ControlNet](./controlnet) | Structure control | ⭐⭐⭐ |
| [Video](./video) | AI video generation | ⭐⭐⭐ |

### Model Processing

| Workflow | Description | Difficulty |
|----------|-------------|-------------|
| [Model Merging](./model-merging) | Merge multiple models | ⭐⭐ |
| [Model Conversion](./model-convert) | Format conversion | ⭐ |

## Recommended Workflows

### Must Learn for Beginners

1. **Basic Text-to-Image** - First workflow
2. **Image-to-Image** - Style transfer
3. **Inpainting** - Fix details

### Must Learn for Advanced

1. **SDXL** - High-quality generation
2. **ControlNet** - Precise control
3. **Upscale** - Increase resolution

### Optional for Experts

1. **Video Generation** - AI video
2. **Model Merging** - Custom models
3. **Custom Nodes** - Extend functionality

## Workflow Management

### Save and Load

| Operation | Description |
|-----------|-------------|
| Save | Ctrl+S to save current workflow |
| Load | Drag .json file to interface |
| Export | Export as standalone file |

### Share Workflows

```
Format: .json
Contains: nodes, connections, parameters
Does not include: models, LoRA

Note when sharing:
- Model paths may differ
- Prompts need to be re-edited
```

## Workflow Optimization

### Performance Optimization

| Method | Effect |
|--------|--------|
| Reduce nodes | Speed up |
| Reasonable size | Save VRAM |
| Model selection | Balance quality and speed |

### Quality Optimization

| Method | Effect |
|--------|--------|
| Increase steps | More details |
| Adjust CFG | Better prompt adherence |
| Multi-sampling | More stable |

## Next Steps

- [Basic Tutorials](../tutorial/) - Learn more features
- [Interface Guide](../guide/interface-workflow) - Workflow management