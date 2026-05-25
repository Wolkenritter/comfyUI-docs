# Share Models with WebUI

Use Stable Diffusion WebUI models in ComfyUI.

## Why Share Models

- Save disk space
- Use proven models
- Easy model management

## Method 1: Symlink

### Create Symlink (Windows)

```powershell
# Run as Administrator
cd ComfyUI\models
mklink /D checkpoints .\..\..\..\stable-diffusion-webui\models\Stable-diffusion
```

### Create Symlink (Linux/macOS)

```bash
cd ComfyUI/models
ln -s ~/stable-diffusion-webui/models/Stable-diffusion ./checkpoints
```

## Method 2: extra_model_paths.yaml (Recommended)

### Create Configuration File

Create `extra_model_paths.yaml` in ComfyUI root:

```yaml
# extra_model_paths.yaml
base_path: D:/AI/stable-diffusion-webui
```

### Directory Structure Mapping

| WebUI Path | ComfyUI Path |
|------------|-------------|
| models/Stable-diffusion | models/checkpoints |
| models/VAE | models/vae |
| models/Lora | models/loras |
| models/ControlNet | models/controlnet |
| embeddings | models/embeddings |

### Example

```yaml
base_path: D:/AI/stable-diffusion-webui

# Custom mappings
alternative_models_path: D:/AI/models
```

## Method 3: Copy Models

### Manual Copy

1. Find models in WebUI directory
2. Copy to ComfyUI models folder

### Common Locations

| Platform | WebUI Path |
|----------|------------|
| Windows | `D:\stable-diffusion-webui\` |
| Linux | `~/stable-diffusion-webui/` |
| Mac | `~/stable-diffusion-webui/` |

## Verify Setup

### Check Models

1. Refresh ComfyUI (F5)
2. Open CheckpointLoader dropdown
3. WebUI models should appear

### Test Generation

1. Select a shared model
2. Generate test image
3. Verify output

## Troubleshooting

### Q: Models not showing

**A**:
- Check YAML file format
- Restart ComfyUI
- Verify paths are correct

### Q: Wrong path format

**A**:
- Windows: Use forward slashes or double backslashes
- Linux/Mac: Use forward slashes

### Q: Permission denied

**A**:
- Run as Administrator (Windows)
- Check file permissions (Linux/Mac)

## Model Formats

### Compatible Formats

| Format | Extension | Notes |
|--------|-----------|-------|
| SafeTensors | .safetensors | Recommended |
| PickleTensor | .ckpt, .pt | Legacy |
| safetensors (fp16) | .safetensors | Smaller, faster |

### Model Types

| Type | Location | Description |
|------|----------|-------------|
| Checkpoints | checkpoints/ | Base models |
| VAE | vae/ | Optional encoder |
| LoRA | loras/ | Style models |
| Embeddings | embeddings/ | Text inversions |

## Best Practices

1. **Backup first** - Keep original models safe
2. **Use symlinks** - Save disk space
3. **Verify paths** - Check YAML configuration
4. **Restart after changes** - Apply new settings

## Next Steps

- [Model Installation](../guide/model-install) - More installation methods
- [First Image](./first-image) - Generate your first image