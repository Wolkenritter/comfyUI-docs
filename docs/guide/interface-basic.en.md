# Interface Guide

Learn about the ComfyUI interface layout and basic operations.

## Interface Overview

```
┌─────────────────────────────────────────────────────────────┐
│  Menu Bar                                                    │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│                                                              │
│                    Canvas Area                               │
│                   (Node Editor)                              │
│                                                              │
│                                                              │
│                                                              │
├─────────────────────────────────────────────────────────────┤
│  Status Bar                                                  │
└─────────────────────────────────────────────────────────────┘

Sidebar (Toggle):
┌──────────┐
│ Node List │
│ Search    │
└──────────┘
```

## Main Areas

### Menu Bar

| Menu | Description |
|------|-------------|
| File | New, Open, Save, Import, Export |
| Edit | Undo, Redo, Copy, Paste, Delete |
| View | Zoom, Grid, Sidebar |
| Settings | Preferences, Extensions |

### Canvas Area

The main workspace where you create and connect nodes.

**Operations:**
- **Scroll**: Zoom in/out
- **Middle Mouse Drag**: Pan canvas
- **Click Node**: Select
- **Drag Node**: Move position
- **Drag Connection**: Connect nodes

### Sidebar

Toggle with the button on the left edge:

- **Node Library**: Search and add nodes
- **Workflow**: Load/save workflows

## Node Operations

### Adding Nodes

**Method 1**: Double-click canvas
1. Double-click empty area
2. Type node name (e.g., "KSampler")
3. Select from dropdown

**Method 2**: Right-click menu
1. Right-click canvas
2. Select "Add Node"
3. Browse categories

### Connecting Nodes

1. Click output port (bottom of node)
2. Drag to input port (top of target node)
3. Release to connect

**Connection Colors:**
| Color | Type |
|-------|------|
| Orange | Model |
| Blue | CLIP |
| Green | Latent |
| Gray | Image |

### Deleting Nodes

- **Delete Key**: Remove selected nodes
- **Right-click**: Context menu → Delete

## Workflow Management

### Saving Workflow

`Ctrl + S` or File → Save

### Loading Workflow

`Ctrl + O` or File → Open

### Workflow Format

- **.json**: Standard ComfyUI format
- **.PNG**: Embedded in image metadata

## Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Ctrl + S` | Save |
| `Ctrl + Z` | Undo |
| `Ctrl + Y` | Redo |
| `Ctrl + C` | Copy |
| `Ctrl + V` | Paste |
| `Ctrl + A` | Select All |
| `Delete` | Delete |
| `Space + Drag` | Pan canvas |
| `Ctrl + Mouse Wheel` | Zoom |

## Queue System

### Generate Queue

| Button | Function |
|--------|----------|
| Queue Prompt | Generate current workflow |
| Clear Queue | Clear pending tasks |

### Batch Generation

Set `batch_size` in EmptyLatentImage node to generate multiple images.

## Settings

Access via **Settings** menu or right-click canvas:

- **Theme**: Light/Dark mode
- **Quality**: Preview resolution
- **VRAM**: Memory optimization
- **Extensions**: Manage plugins

## Common Operations

### Center View

Double-click empty canvas or press `Home` key.

### Zoom to Fit

Press `Ctrl + 0` or right-click → Fit View.

### Search Nodes

Press `Ctrl + F` and type node name.

## Next Steps

- [Node Reference](/comfyui-nodes/) - Learn about each node
- [Workflow Examples](/workflow/) - Explore workflow templates
- [Basic Tutorials](/tutorial/) - Start with fundamentals