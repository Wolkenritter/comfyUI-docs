# Getting Started Tutorial

Quick start guide for ComfyUI.

## Introduction

ComfyUI is a powerful node-based Stable Diffusion interface. This tutorial will help you get started quickly.

## First Steps

### 1. Start ComfyUI

Run the following command:

```bash
# Navigate to ComfyUI directory
cd ComfyUI

# Run on Windows
python main.py

# Run on Linux/Mac
python3 main.py
```

### 2. Open Browser

Open your browser and visit:

```
http://127.0.0.1:8188
```

## Interface Overview

| Area | Function |
|------|----------|
| Left Panel | Node library |
| Center | Workflow canvas |
| Right Panel | Properties |
| Bottom | Generation queue |

## Basic Workflow

```
Load Checkpoint → CLIP Text Encode → KSampler → VAE Decode → Save Image
```

## Generate Your First Image

1. Drag CheckpointLoader node
2. Load a model (e.g., v1-5-pruned-emaonly.safetensors)
3. Add CLIPTextEncode for positive prompt
4. Add CLIPTextEncode for negative prompt
5. Add KSampler
6. Add VAEDecode
7. Add SaveImage node
8. Click "Queue Prompt" to generate

## Next Steps

- [First Image](./first-image) - Generate your first image
- [Prompt Basics](./prompt-basic) - Write better prompts
- [How to Run](./how-to-run) - More startup options