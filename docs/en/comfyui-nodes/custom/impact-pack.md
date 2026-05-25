# Impact Pack

Comprehensive custom node suite for advanced features.

## Installation

```
ComfyUI/custom_nodes/
  ComfyUI-Impact-Pack/
```

Install via ComfyUI Manager or:

```bash
git clone https://github.com/ltdrdata/ComfyUI-Impact-Pack.git
```

## Core Nodes

### DetectFaces

Detect faces in images.

### Inputs

| Input | Type | Description |
|-------|------|-------------|
| image | image | Input image |
| face_detection | detection | Detection model |

### Outputs

| Output | Type | Description |
|--------|------|-------------|
| face | image | Cropped face |
| bbox | bbox | Bounding box |
| mask | mask | Face mask |

### Parameters

| Parameter | Description |
|-----------|-------------|
| detection_model | Model to use |
| confidence | Detection threshold |
| max_faces | Maximum faces to detect |

## FaceDetailer

Enhance faces using specialized model.

### Workflow

```
[Full Image] → [DetectFaces] → [FaceDetailer] → [Composite]
                                  ↓
                             Enhanced faces
```

### Parameters

| Parameter | Description |
|-----------|-------------|
| guide_size | Detection size |
| seed | Random seed |
| steps | Sampling steps |
| cfg | CFG scale |
| denoise | Denoise strength |

## Detailer

General image enhancement node.

### Usage

1. Detect region of interest
2. Enhance with specified model
3. Composite back to original

### Settings

| Parameter | Default | Description |
|-----------|---------|-------------|
| guide_size | 512 | Processing resolution |
| max_corrections | 6 | Max enhancement passes |
| core_padding | 32 | Edge buffer |

## BoundingBox Nodes

### Crop bbox

Crop image using bounding box.

### Expand bbox

Expand bounding box with padding.

### Clamp bbox

Ensure box stays within image bounds.

## Mask Nodes

### Mask Detailer

Enhance masked areas.

### Mask Composition

- Union
- Intersection
- Subtract

### Feather Mask

Smooth mask edges.

## Workflow Examples

### Face Enhancement

```
LoadImage → DetectFaces → FaceDetailer → Composite
                ↓              ↓
           BoundingBox     Enhanced
```

### Object Remove

```
LoadImage → Segment → Mask → Inpaint → Composite
```

## Tips

1. **Detection quality**: Use appropriate detection model
2. **Denoise balance**: Lower for subtle, higher for major changes
3. **Padding**: Use enough to avoid edge artifacts

## Next Steps

- [ControlNet Nodes](./controlnet-nodes) - Structure control
- [LayerStyle](./layer-style) - Visual effects
- [Utils](./utils) - Helper nodes