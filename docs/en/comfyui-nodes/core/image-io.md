# Image Input/Output

Load and save images in ComfyUI.

## LoadImage

Load image files for workflow.

### Inputs

| Input | Type | Description |
|-------|------|-------------|
| (none) | - | File selection |

### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| image | file | Image file |

### Outputs

| Output | Type | Description |
|--------|------|-------------|
| IMAGE | image | Loaded image |
| MASK | mask | Alpha channel as mask |

### Supported Formats

| Format | Extension | Notes |
|--------|-----------|-------|
| PNG | .png | Recommended |
| JPEG | .jpg, .jpeg | Lossy |
| WebP | .webp | Good compression |
| BMP | .bmp | Uncompressed |

### RGBA Images

Load PNG with alpha channel to get mask:

```
LoadImage (RGBA.png)
    ↓ IMAGE → processing
    ↓ MASK → inpainting mask
```

## SaveImage

Save generated images.

### Inputs

| Input | Type | Description |
|-------|------|-------------|
| images | image | Image to save |
| mask | mask | Optional mask |

### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| filename_prefix | string | Output filename prefix |

### Output Location

```
ComfyUI/output/
```

## ImageScale

Scale image to different resolution.

### Inputs

| Input | Type | Description |
|-------|------|-------------|
| image | image | Image to scale |

### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| method | dropdown | Scale algorithm |
| width | int | Target width |
| height | int | Target height |

### Scale Methods

| Method | Quality | Speed |
|--------|---------|-------|
| nearest | Low | Fastest |
| bilinear | Medium | Fast |
| lanczos | High | Medium |
| area | High | Slow |
| bicubic | High | Medium |

## ImageCrop

Crop image to specific region.

### Inputs

| Input | Type | Description |
|-------|------|-------------|
| image | image | Image to crop |

### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| x | int | Left position |
| y | int | Top position |
| width | int | Crop width |
| height | int | Crop height |

## ImagePad

Extend image with new content (outpainting).

### Inputs

| Input | Type | Description |
|-------|------|-------------|
| image | image | Base image |
| mask | mask | Areas to fill |

### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| left | int | Pixels to add left |
| top | int | Pixels to add top |
| right | int | Pixels to add right |
| bottom | int | Pixels to add bottom |

## ImageBlend

Blend two images together.

### Inputs

| Input | Type | Description |
|-------|------|-------------|
| image1 | image | First image |
| image2 | image | Second image |
| blend | float | Blend strength (0-1) |

## Next Steps

- [CheckpointLoader](./checkpoint) - Load model
- [KSampler](./sampler) - Generate image