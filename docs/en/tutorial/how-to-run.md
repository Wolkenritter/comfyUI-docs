# How to Run ComfyUI

Learn different ways to start ComfyUI.

## Method 1: Direct Run

### Windows

```bash
# Navigate to ComfyUI folder
cd path/to/ComfyUI

# Run with Python
python main.py

# Or run with python3
python3 main.py
```

### Linux/Mac

```bash
cd path/to/ComfyUI
python3 main.py
```

## Method 2: With Custom Port

```bash
# Specify port
python main.py --port 8189

# Access at http://127.0.0.1:8189
```

## Method 3: Listen on All Interfaces

```bash
# Allow external access
python main.py --listen 0.0.0.0

# Access from other devices on network
```

## Method 4: Enable Auto-launch Browser

```bash
python main.py --auto-launch
```

## Command Line Options

| Option | Description | Example |
|--------|-------------|---------|
| `--port` | Set port number | `--port 8189` |
| `--listen` | Listen on all interfaces | `--listen 0.0.0.0` |
| `--auto-launch` | Auto-open browser | `--auto-launch` |
| `--force-fp16` | Force FP16 precision | `--force-fp16` |

## Using Virtual Environment

### Create venv

```bash
# Windows
python -m venv venv
venv\Scripts\activate

# Linux/Mac
python3 -m venv venv
source venv/bin/activate
```

### Install Dependencies

```bash
pip install -r requirements.txt
```

### Run

```bash
python main.py
```

## Verification

Check if ComfyUI is running:

1. Open browser
2. Visit http://127.0.0.1:8188
3. You should see the ComfyUI interface

## Troubleshooting

### Port Already in Use

```bash
# Use different port
python main.py --port 8190
```

### Dependencies Missing

```bash
# Reinstall dependencies
pip install -r requirements.txt --force-reinstall
```

### GPU Not Detected

Check CUDA installation:

```bash
python -c "import torch; print(torch.cuda.is_available())"
```

## Next Steps

- [First Image](./first-image) - Generate your first image
- [Share Models](./share-models) - Share models between systems