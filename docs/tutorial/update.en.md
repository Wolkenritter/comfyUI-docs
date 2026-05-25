# Update Guide

Keep ComfyUI and extensions up to date.

## Update ComfyUI

### Method 1: Git Pull

```bash
cd ComfyUI
git pull
pip install -r requirements.txt
```

### Method 2: Download Release

1. Visit [GitHub Releases](https://github.com/comfyanonymous/ComfyUI/releases)
2. Download latest version
3. Extract and replace files

### Method 3: Manager

1. Open ComfyUI Manager
2. Click "Update All" or specific updates

## Update Custom Nodes

### Via Manager

1. Open ComfyUI Manager
2. Check for updates
3. Click "Update" for each

### Via Git

```bash
cd ComfyUI/custom_nodes/[NODE_NAME]
git pull
```

## Update Models

### Check for Updates

Some models have newer versions on Civitai/Hugging Face.

### Replace Models

1. Delete old version
2. Download new version
3. Place in same location

## Backup

### Before Update

1. Backup workflows
2. Note custom node versions
3. Save important settings

### Backup Workflow

```bash
# Copy workflows folder
cp -r ComfyUI/output/backup/
```

## Troubleshooting

### Q: Update broke something

**A**: 
- Revert to previous version
- Check GitHub issues
- Restore from backup

### Q: Node not working after update

**A**: Update the node to latest version.

### Q: Import errors

**A**: Reinstall dependencies: `pip install -r requirements.txt`

## Version Check

### Current Version

Check in ComfyUI interface or:

```bash
git log --oneline -1
```

### Latest Version

Check [GitHub](https://github.com/comfyanonymous/ComfyUI/releases)

## Best Practices

1. **Backup first** before major updates
2. **Test** after each update
3. **Keep notes** of custom configurations

## Next Steps

- [Installation](../guide/installation) - Fresh installation
- [First Image](../tutorial/first-image) - Generate images