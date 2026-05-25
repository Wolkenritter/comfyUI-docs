# ComfyUI Nodes Documentation

Node reference for ComfyUI.

## Node Categories

### Core Nodes

Built-in nodes for basic operations.

| Node | Description |
|------|-------------|
| [CheckpointLoader](./core/checkpoint) | Load models |
| [CLIPTextEncode](./core/text) | Text encoding |
| [KSampler](./core/sampler) | Sampling |
| [Latent Nodes](./core/latent) | Latent operations |
| [Image I/O](./core/image-io) | Image input/output |

### Custom Nodes

Extended functionality from community.

| Node | Description |
|------|-------------|
| [Impact Pack](./custom/impact-pack) | Advanced features |
| [ControlNet Nodes](./custom/controlnet-nodes) | ControlNet integration |
| [LayerStyle](./custom/layer-style) | Layer effects |
| [Utils](./custom/utils) | Utility nodes |

## Node Index

### Core Nodes

1. [CheckpointLoader](./core/checkpoint) - Load checkpoint models
2. [CLIPTextEncode](./core/text) - Encode text prompts
3. [KSampler](./core/sampler) - Sample latent image
4. [VAEEncode](./core/latent) - Encode image to latent
5. [VAEDecode](./core/latent) - Decode latent to image
6. [LoadImage](./core/image-io) - Load images
7. [SaveImage](./core/image-io) - Save images

### Custom Nodes

1. [Impact Pack](./custom/impact-pack) - Comprehensive toolkit
2. [ControlNet](./custom/controlnet-nodes) - Structure control
3. [LayerStyle](./custom/layer-style) - Photoshop-like effects
4. [Utils](./custom/utils) - Helper functions

## Using Nodes

### Adding Nodes

1. Right-click on canvas
2. Search for node name
3. Click to add

### Connecting Nodes

- Drag from output port to input port
- Color-coded ports indicate compatibility
- Chain nodes to build workflow

## Node Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| Model | dropdown | Select model |
| Text | input | Enter text |
| Number | slider | Adjust value |
| Boolean | toggle | On/Off |

## Next Steps

- [Core Nodes](./core/) - Detailed node docs
- [Custom Nodes](./custom/) - Community nodes
- [Workflows](../workflow/) - Example workflows