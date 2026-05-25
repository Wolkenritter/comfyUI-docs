# Update ComfyUI

Keep your ComfyUI installation up to date.

## Update Methods

### Method 1: Git Pull (Recommended)

```bash
# Navigate to ComfyUI folder
cd path/to/ComfyUI

# Pull latest changes
git pull

# Update dependencies
pip install -r requirements.txt --upgrade
```

### Method 2: Download Manual

1. Go to ComfyUI GitHub
2. Download latest release
3. Replace files (keep custom_nodes)

### Method 3: ComfyUI Manager

1. Right-click → Manager
2. Select "Update All"
3. Restart ComfyUI

## Update Custom Nodes

### Via ComfyUI Manager

1. Open Manager
2. Click "Custom Nodes Manager"
3. Find updates
4. Click "Update"

### Manual Update

```bash
# Navigate to custom node folder
cd ComfyUI/custom_nodes/extension-name

# Pull latest
git pull
```

## Changelog

Check before updating:

- [ComfyUI GitHub](https://github.com/comfyanonymous/ComfyUI)
- [ComfyUI Manager](https://github.com/ltdrdata/ComfyUI-Manager)

## Rollback

### Git Rollback

```bash
# Find previous version
git log --oneline

# Reset to specific version
git reset --hard <commit-hash>
```

### Keep Backup

Always backup before major updates:

```bash
# Create backup
xcopy /E /I ComfyUI ComfyUI_backup
```

## Version Compatibility

| Version | CUDA | Notes |
|---------|------|-------|
| Latest | 12.x | Best features |
| Stable | 11.8 | Most compatible |

## Troubleshooting

### Update Failed

```bash
# Clean and retry
git fetch --all
git reset --hard origin/master
git pull
```

### Conflicts

- Keep custom_nodes separate
- Merge manually if needed
- Check for breaking changes

## Next Steps

- [First Image](../tutorial/first-image) - Test after update
- [Advanced Tutorials](../tutorial/advanced/) - Learn more