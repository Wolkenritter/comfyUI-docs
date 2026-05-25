# ComfyUI Nodes Documentation

Complete documentation for ComfyUI nodes, covering core nodes and custom nodes.

## Node Categories

### Core Nodes

| Category | Description | Count |
|----------|-------------|-------|
| [Model Loading](./core/checkpoint) | Load Checkpoint, VAE, etc. | 5+ |
| [Sampler](./core/sampler) | KSampler sampling | 3+ |
| [Text Processing](./core/text) | CLIP text encoding | 4+ |
| [Image I/O](./core/image-io) | LoadImage, SaveImage | 6+ |
| [Latent Operations](./core/latent) | Latent space operations | 5+ |
| [Conditioning](./core/conditioning) | Condition control | 4+ |

### Custom Nodes

| Category | Description |
|----------|-------------|
| [Impact Pack](./custom/impact-pack) | Face repair, detection |
| [ControlNet](./custom/controlnet) | ControlNet nodes |
| [LayerStyle](./custom/layer-style) | Photoshop-style blending |
| [Utility](./custom/utils) | Common tools |

## Node Index

### Search by Function

| Function | Node |
|----------|------|
| Load Model | CheckpointLoader, CheckpointLoaderSDXL |
| Generate Image | KSampler, KSamplerAdvanced |
| Encode Text | CLIPTextEncode, CLIPTextEncodeSDXL |
| Image Decode | VAEDecode, VAEEncode |
| Save Image | SaveImage, ImagePreview |
| Load Image | LoadImage, LoadImageMask |
| Create Mask | CreateMask, MaskDraw |
| Apply LoRA | LoadLoRA, ApplyLoRA |

## Learning Path

### Essential for Beginners

1. [CheckpointLoader](./core/checkpoint) - Model loading
2. [CLIPTextEncode](./core/text) - Text encoding
3. [KSampler](./core/sampler) - Sampling
4. [VAEDecode](./core/latent) - Decode output
5. [SaveImage](./core/image-io) - Save image

### Advanced

1. [VAEEncode](./core/latent) - Image-to-image encoding
2. [LoadLoRA](./custom/lora) - LoRA application
3. [ControlNet](./custom/controlnet) - Controlled generation
4. [EmptyLatentImage](./core/latent) - Create latent image

## Node Connection Rules

### Type Matching

```
Model Output:
- MODEL → Connect to KSampler
- CLIP → Connect to CLIPTextEncode

Latent Output:
- LATENT → Connect to KSampler, VAEDecode

Image Output:
- IMAGE → Connect to VAEEncode, SaveImage
```

### Connection Example

```
CheckpointLoader
     MODEL → KSampler
     CLIP → CLIPTextEncode(positive)
           → CLIPTextEncode(negative)

EmptyLatentImage → KSampler(LATENT)
                         ↓
                    VAEDecode
                         ↓
                    SaveImage
```

## Next Steps

- [Core Nodes](./core/) - Built-in node documentation
- [Custom Nodes](./custom/) - Extension nodes
- [Interface Guide](../guide/interface-basic) - Node operations