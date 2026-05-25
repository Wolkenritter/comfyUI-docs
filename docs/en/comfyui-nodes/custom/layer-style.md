# LayerStyle Nodes

Photoshop-like layer effects in ComfyUI.

## Installation

```
ComfyUI/custom_nodes/
  ComfyUI-layerstyle/
```

Install via ComfyUI Manager.

## Blend Modes

### Available Modes

| Mode | Description |
|------|-------------|
| Normal | No blend |
| Multiply | Darken |
| Screen | Lighten |
| Overlay | Contrast |
| Soft Light | Subtle contrast |
| Hard Light | Strong contrast |
| Difference | Invert difference |
| Exclusion | Like difference, softer |

### Usage

```
Layer 1 → LayerStyle → Layer 2
              ↓
        Blended Output
```

## Shadow Effects

### Drop Shadow

| Parameter | Description |
|-----------|-------------|
| offset_x | Horizontal offset |
| offset_y | Vertical offset |
| blur | Shadow spread |
| opacity | Shadow strength |
| color | Shadow color |

### Inner Shadow

Shadows inside the layer boundary.

## Glow Effects

### Outer Glow

| Parameter | Description |
|-----------|-------------|
| blur | Glow spread |
| intensity | Glow strength |
| color | Glow color |

### Inner Glow

Glow from edges inward.

## Border Effects

### Stroke

| Parameter | Description |
|-----------|-------------|
| width | Border width |
| color | Border color |
| opacity | Transparency |

### Gradient Stroke

Border with gradient colors.

## Advanced Features

### Blend If

Control opacity based on underlying layers.

### Patterns

Apply repeating patterns as textures.

## Common Workflows

### Text Effects

```
LoadImage (background)
    ↓
Add text layer
    ↓
LayerStyle (shadow + glow)
    ↓
Output
```

### Button Design

```
Base shape
    ↓
LayerStyle (gradient + border)
    ↓
Shadow
    ↓
Button image
```

## Tips

1. **Layer order**: Effects apply in node order
2. **Opacity**: Lower values for subtle effects
3. **Color**: Use complementary colors

## Next Steps

- [Impact Pack](./impact-pack) - Face enhancement
- [ControlNet](./controlnet-nodes) - Structure control