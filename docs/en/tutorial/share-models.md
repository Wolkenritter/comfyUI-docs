# Share Models Between Systems

Learn how to share models across different ComfyUI installations.

## Why Share Models?

- Save disk space
- Avoid duplicate downloads
- Centralized model management
- Easy updates

## Method 1: Symbolic Link (Recommended)

### Windows (mklink)

```powershell
# Create folder for shared models
mkdir C:\SharedModels\StableDiffusion

# Create symbolic link in ComfyUI
mklink /D "C:\ComfyUI\models\checkpoints\Shared" "C:\SharedModels\StableDiffusion"
```

### Linux/Mac

```bash
# Create folder
sudo mkdir -p /shared/models/stable-diffusion

# Create symbolic link
ln -s /shared/models/stable-diffusion ~/ComfyUI/models/checkpoints/shared
```

## Method 2: Custom Node Path

Edit ComfyUI's extra_model_paths.yaml:

```yaml
# For other ComfyUI installations
other_install:
  models_path: \\192.168.1.100\SharedModels\stable-diffusion
```

## Method 3: Model Directory Configuration

### Windows

Set environment variable:

```powershell
setx COMFYUI_MODEL_PATH "D:\SharedModels\ComfyUI"
```

### Linux

```bash
export COMFYUI_MODEL_PATH="/shared/models/comfyui"
```

## Sharing with A1111 (Automatic1111)

### Option 1: Use A1111 Models

Create extra_model_paths.yaml in ComfyUI:

```yaml
# Path to Automatic1111
a1111:
  base_path: D:\stable-diffusion-webui\models
  checkpoints: Stable Diffusion
  vae: VAE
  loras: Lora
  controlnet: ControlNet
```

### Option 2: Copy/Link

```bash
# Copy VAE
cp /path/to/a1111/vae/*.vae ~/ComfyUI/models/vae/

# Link checkpoints
ln -s /path/to/a1111/models/sd/* ~/ComfyUI/models/checkpoints/
```

## Network Share (Windows)

### Share Folder

1. Right-click folder → Properties
2. Sharing tab → Share
3. Add users and permissions

### Access Network Share

```powershell
# Map network drive
net use Z: \\192.168.1.100\SharedModels

# Or use in ComfyUI path
\\192.168.1.100\SharedModels\stable-diffusion\checkpoint.safetensors
```

## Model Categories to Share

| Category | Path |
|----------|------|
| Checkpoints | models/checkpoints/ |
| VAE | models/vae/ |
| LoRA | models/loras/ |
| Embeddings | models/embeddings/ |
| ControlNet | models/controlnet/ |

## Best Practices

1. **Organize clearly**: Use subfolders by model type
2. **Backup**: Keep original files safe
3. **Version control**: Track different model versions
4. **Network speed**: Use wired connection for faster access

## Troubleshooting

### Symbolic Link Failed

Run as administrator or check permissions.

### Network Path Slow

Consider copying frequently used models locally.

### Model Not Found

Check path spelling and ensure network is accessible.

## Next Steps

- [Model Install](../guide/model-install) - Install models
- [Prompt Basics](./prompt-basic) - Use models effectively