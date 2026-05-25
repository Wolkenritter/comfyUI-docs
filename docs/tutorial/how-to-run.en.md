# How to Run ComfyUI

Learn how to start and access ComfyUI.

## Starting ComfyUI

### Windows

```powershell
# Navigate to ComfyUI directory
cd ComfyUI

# For NVIDIA GPU
.\run_nvidia_gpu.bat

# For CPU only
.\run_cpu.bat
```

### macOS

```bash
cd ComfyUI

# For Apple Silicon (M1/M2/M3)
./run_mps.sh

# Or CPU mode
python3 main.py --force-fp16
```

### Linux

```bash
cd ComfyUI

# NVIDIA GPU
./run_nvidia_gpu.sh

# CPU only
./run_cpu.sh
```

## Access Interface

### Default URL

```
http://127.0.0.1:8188
```

### Custom Port

To use a different port:

```bash
python main.py --port 8080
```

Access at: http://127.0.0.1:8080

### Network Access

To access from other devices:

```bash
python main.py --listen 0.0.0.0
```

Then access via: `<your-ip>:8188`

### Find Your IP

```bash
# Windows
ipconfig

# macOS/Linux
ifconfig
```

Look for IPv4 address (e.g., 192.168.1.100).

## Interface Overview

```
┌─────────────────────────────────────────────────────┐
│  ComfyUI                              [Queue: 0]     │
├─────────────────────────────────────────────────────┤
│  [Clear] [Queue Prompt] [Interrupt] [Extra Options] │
├────────────┬────────────────────────────────────────┤
│            │                                        │
│  Node      │           Canvas                       │
│  Library    │                                        │
│            │     ┌───────┐                          │
│  Search     │     │ Node │──────┐                    │
│  [        ] │     └───────┘      │                    │
│            │                    ▼                    │
│  - Loaders │              ┌───────┐                   │
│  - Sampling│              │ Node │                   │
│  - Images  │              └───────┘                   │
│            │                                        │
├────────────┴────────────────────────────────────────┤
│  Status: Ready | VRAM: 4GB/8GB | Queue: 0            │
└─────────────────────────────────────────────────────┘
```

## Generate First Image

### Step 1: Add Checkpoint

1. Double-click canvas
2. Search "Checkpoint"
3. Select "Load Checkpoint"
4. Choose a model from dropdown

### Step 2: Add Text Encoding

1. Double-click canvas
2. Search "CLIP Text Encode"
3. Add two instances (positive and negative)

### Step 3: Add Sampler

1. Double-click canvas
2. Search "KSampler"
3. Connect:
   - Checkpoint MODEL → KSampler model
   - Checkpoint CLIP → CLIPTextEncode (x2)
   - CLIPTextEncode → KSampler positive/negative

### Step 4: Add Latent Image

1. Double-click canvas
2. Search "EmptyLatentImage"
3. Connect → KSampler latent

### Step 5: Add VAE Decode

1. Double-click canvas
2. Search "VAEDecode"
3. Connect KSampler → VAEDecode latent
4. Connect Checkpoint VAE (if separate) → VAEDecode

### Step 6: Add Save Image

1. Double-click canvas
2. Search "SaveImage"
3. Connect VAEDecode → SaveImage

### Step 7: Generate

1. Enter positive prompt
2. Enter negative prompt
3. Click "Queue Prompt" button
4. Wait for generation

## Troubleshooting

### Q: Cannot access http://127.0.0.1:8188

**A**:
- Check if ComfyUI is running
- Check console for errors
- Try different browser

### Q: "CUDA out of memory"

**A**:
- Reduce image size
- Use smaller batch size
- Enable low VRAM mode

### Q: Port already in use

**A**:
```bash
# Use different port
python main.py --port 8189
```

## Next Steps

- [First Image Generation](./first-image) - Generate your first image
- [Interface Guide](../guide/interface-basic) - Learn interface