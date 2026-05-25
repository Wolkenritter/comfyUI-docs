# Cloud Running Guide

Run ComfyUI on cloud services for GPU-free usage.

## Cloud Platforms

### Recommended Platforms

| Platform | GPU Options | Price | Difficulty |
|----------|-------------|-------|------------|
| Vast.ai | RTX 3090, A100 | $0.2-0.5/hr | Medium |
| RunPod | RTX 3090, A100 | $0.3-0.6/hr | Medium |
| Modal | Various | Pay-as-you-go | Medium |
| Google Colab | T4 (Free) | Free/Limited | Easy |

### Vast.ai

#### Setup Steps

1. Create account at https://vast.ai
2. Add credits (minimum $10)
3. Search for "ComfyUI" templates
4. Rent GPU and start

#### Recommended Config

| Config | Value |
|--------|-------|
| GPU | RTX 3090 or better |
| CUDA | 12.1+ |
| Disk | 100GB+ |
| Price | < $0.4/hr |

#### Connect via SSH

```bash
# Connect to instance
ssh root@<instance-ip>

# Clone ComfyUI
git clone https://github.com/comfyanonymous/ComfyUI.git
cd ComfyUI

# Install dependencies
pip install -r requirements.txt

# Run
python main.py --listen 0.0.0.0
```

### RunPod

#### Using Templates

1. Create account at https://runpod.io
2. Search "ComfyUI" in templates
3. Deploy with one click
4. Access via provided URL

### Google Colab

#### Free Option

```python
# Install ComfyUI
!git clone https://github.com/comfyanonymous/ComfyUI.git
%cd ComfyUI
!pip install -r requirements.txt

# Run
!python main.py --listen
```

#### Access

Click the localtunnel URL to access ComfyUI interface.

## Model Upload

### Upload to Cloud

```bash
# Using scp (Vast.ai/Rental)
scp model.safetensors root@<ip>:/root/ComfyUI/models/checkpoints/

# Using rclone (Google Drive)
rclone copy model.safetensors remote:comfyui-models/
```

### Download from URLs

```python
import urllib.request

url = "https://model-url.com/model.safetensors"
filename = url.split("/")[-1]
urllib.request.urlretrieve(url, f"/path/to/{filename}")
```

## Cost Optimization

### Stop When Not Using

| Action | Savings |
|--------|---------|
| Stop instance after use | 100% of idle cost |
| Use smaller GPU for testing | 50% cost |
| Use spot instances | 70% cost |

### Efficient Workflow

1. Test on smaller images first
2. Use lower steps for preview
3. Final output on better GPU

## Security

### Important Notes

- Never expose SSH keys publicly
- Use strong passwords
- Enable firewall when possible
- Delete instances after use

### Data Safety

- Back up important workflows locally
- Don't store sensitive data on cloud
- Delete instances to avoid charges

## Troubleshooting

### Q: Connection timeout

**A**: Check if ComfyUI is running and port is correct. Ensure firewall allows the port.

### Q: Out of memory

**A**: Use smaller batch size or lower resolution. Choose GPU with more VRAM.

### Q: Instance disconnected

**A**: Save work frequently. Use cloud storage for important files.

## Next Steps

- [Installation Guide](./installation) - Local installation
- [Model Installation](./model-install) - Install models