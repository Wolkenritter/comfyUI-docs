# Node Operations

Learn how to add, connect, and manage nodes in ComfyUI.

## Adding Nodes

### Method 1: Double-click Canvas

1. Double-click empty area on canvas
2. Type node name (e.g., "Checkpoint")
3. Select from dropdown results

### Method 2: Right-click Menu

1. Right-click on canvas
2. Select "Add Node"
3. Browse categories
4. Click to add

### Method 3: Search Box

Press `Ctrl+Space` or click search icon:
1. Type node name
2. Select from results
3. Node appears on canvas

## Node Categories

### Model Loading

| Node | Description |
|------|-------------|
| CheckpointLoader | Load SD model |
| CheckpointLoaderSDXL | Load SDXL model |
| VAELoader | Load VAE model |
| LoraLoader | Load LoRA model |

### Sampling

| Node | Description |
|------|-------------|
| KSampler | Main sampler |
| KSamplerAdvanced | Advanced sampler with more options |
| SamplerCustom | Custom sampling |

### Image Operations

| Node | Description |
|------|-------------|
| LoadImage | Load image file |
| SaveImage | Save image |
| ImageScale | Scale image |
| ImagePad | Pad image |

## Connecting Nodes

### Connection Rules

| Output Type | Compatible Input |
|-------------|------------------|
| MODEL | Model input (KSampler) |
| CLIP | CLIP input (TextEncode) |
| LATENT | Latent input (KSampler, VAE) |
| IMAGE | Image input (VAEEncode, SaveImage) |

### Connect Steps

1. Click output port (bottom circle)
2. Drag to input port (top circle)
3. Release to connect
4. Connection changes color based on type

### Connection Colors

| Color | Type |
|-------|------|
| Orange | Model |
| Blue | CLIP |
| Green | Latent |
| Gray | Image |

### Disconnect

Click on connection line and press `Delete`, or drag connection away.

## Node Properties

### Click Node

Single click to select node.

### Open Properties

Double-click node or right-click → Properties.

### Common Properties

| Property | Description |
|----------|-------------|
| Seed | Random seed for generation |
| Steps | Sampling steps |
| CFG | Guidance scale |
| Width/Height | Output dimensions |

## Moving and Arranging

### Move Node

Click and drag node to move.

### Multi-select

- `Shift+Click`: Add to selection
- `Ctrl+Click`: Toggle selection
- `Ctrl+A`: Select all
- Drag to create selection box

### Align Nodes

Right-click → Align → Select alignment type.

## Grouping

### Create Group

1. Select multiple nodes
2. Right-click → Group
3. Name the group

### Group Operations

| Operation | Description |
|-----------|-------------|
| Minimize | Collapse group |
| Color | Set group color |
| Title | Set group title |

## Searching Nodes

### Quick Search

Press `Ctrl+F`:
1. Type node name
2. Results appear instantly
3. Click to add

### Filter by Category

```
popular:        # Popular nodes
model:          # Model loading
sampler:        # Sampling nodes
image:          # Image operations
```

## Deleting Nodes

| Method | Action |
|--------|--------|
| Keyboard | Select + Delete |
| Context Menu | Right-click → Delete |
| Disconnect | Remove all connections first |

## Copy and Paste

### Copy

`Ctrl+C`: Copy selected nodes

### Paste

`Ctrl+V`: Paste nodes (offset position)

### Duplicate

`Ctrl+D`: Duplicate selected nodes

## Node Colors

### Color Coding

| Color | Meaning |
|-------|---------|
| Default | Normal node |
| Green | Input (source) |
| Red | Output (destination) |
| Yellow | Selected |

### Custom Colors

Right-click → Color → Select color.

## Troubleshooting

### Q: Cannot connect nodes

**A**: Check if port types are compatible. Connection will only form between compatible types.

### Q: Node not found in search

**A**: Type more characters or check spelling. Some nodes require custom installation.

### Q: Node disappeared

**A**: Use Ctrl+F to search. Check if accidentally deleted.

## Next Steps

- [Interface Basic](./interface-basic) - Interface overview
- [CheckpointLoader](../comfyui-nodes/core/checkpoint) - Node details