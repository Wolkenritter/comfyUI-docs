# Workflow Management

Learn how to save, load, and manage workflows in ComfyUI.

## What is a Workflow

A workflow is a saved node graph that defines the image generation process.

```
┌─────────────�?   ┌─────────────�?   ┌─────────────�?�?Checkpoint  �?�? �?CLIP Text   �?�? �?KSampler    �?�?Image
�?Loader      �?   �?Encode      �?   �?            �?└─────────────�?   └─────────────�?   └─────────────�?```

## Save Workflow

### Quick Save

`Ctrl + S`: Save to current file

### Save As

`Ctrl + Shift + S`: Save with new name

### Auto Save

Enable in Settings �?Auto-save interval

## Load Workflow

### Open File

`Ctrl + O`: Open workflow file

### Drag and Drop

Drag `.json` or `.png` file onto canvas to load.

### Recent Workflows

Click "Recent" in sidebar to load recent workflows.

## Workflow File Formats

### JSON Format

```
workflow.json
├── Contains: Node structure, connections, parameters
├── Size: Small
├── Portable: Yes
└── Includes: No model data
```

### PNG Format (Recommended)

```
workflow.png
├── Contains: JSON + embedded thumbnail
├── Size: Larger
├── Portable: Yes
├── Includes: Preview image
└── Recommended: Yes
```

## Workflow Templates

### Built-in Templates

| Template | Description |
|----------|-------------|
| basic text to image | Simple text-to-image |
| img2img | Image-to-image |
| inpaint | Inpainting |
| upscale | Upscaling |

### Community Templates

Download from:
- [Civitai](https://civitai.com)
- [ComfyUI Workflows](https://comfyanonymous.github.io/ComfyUI_examples/)

## Workflow Organization

### Folder Structure

```
workflows/
├── personal/
�?  ├── portrait.json
�?  └── landscape.json
├── templates/
�?  └── basic.json
└── experiments/
    └── test.json
```

### Naming Convention

```
YYYY-MM-DD_description.json
2024-01-15_portrait_v2.json
```

## Version Control

### Manual Backup

```bash
# Copy workflow
cp workflow.json workflow_backup.json

# With git (recommended)
git add workflows/
git commit -m "Update workflow"
```

### Recovery

1. Locate backup file
2. Open in ComfyUI
3. Verify connections

## Workflow Sharing

### Export Settings

When saving:
1. Include node settings �?2. Include parameters �?3. Embed thumbnail �?
### Share Checklist

| Item | Required |
|------|----------|
| JSON file | Yes |
| Model names | Note |
| Custom nodes | Note |
| Prompt description | Recommended |

## Workflow Optimization

### Simplify

- Remove unnecessary nodes
- Use efficient node chains
- Minimize connections

### Performance

| Tip | Effect |
|-----|--------|
| Remove unused nodes | Faster load |
| Use cached values | Faster generation |
| Limit batch size | Save memory |

## Workflow Examples

### Basic Text-to-Image

```
1. CheckpointLoader �?Model
2. CLIPTextEncode(positive) �?Condition
3. CLIPTextEncode(negative) �?Condition
4. EmptyLatentImage �?Latent
5. KSampler �?Sampled Latent
6. VAEDecode �?Image
7. SaveImage �?Output
```

### Image-to-Image

```
1. LoadImage �?Image
2. VAEEncode �?Latent
3. CLIPTextEncode �?Condition
4. KSampler �?Sampled Latent
5. VAEDecode �?Image
6. SaveImage �?Output
```

### Inpainting

```
1. LoadImage �?Original Image
2. CreateMask �?Mask
3. VAEEncode(with mask) �?Latent
4. CLIPTextEncode �?Condition
5. KSampler �?Sampled Latent
6. VAEDecode �?Image
7. ImageBlend �?Final Output
```

## Troubleshooting

### Q: Workflow won't load

**A**: 
- Check file format (JSON/PNG)
- Verify file is not corrupted
- Ensure required nodes are installed

### Q: Missing nodes in workflow

**A**: 
- Install missing custom nodes
- Check node versions match
- Update ComfyUI

### Q: Different results with same workflow

**A**: 
- Check seed values
- Verify model versions
- Check CFG and steps

## Best Practices

1. **Save often**: Use Ctrl+S regularly
2. **Name clearly**: Descriptive names help
3. **Add notes**: Comment important settings
4. **Test before commit**: Verify workflow works
5. **Keep backups**: Copy important workflows

## Next Steps

- [Workflow Index](../workflow/) - More workflow examples
- [Interface Basic](./interface-basic) - Interface operations