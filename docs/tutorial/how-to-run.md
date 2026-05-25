# 如何启动服务

了解各种方式启动 ComfyUI 服务。

## 使用官方包启动

### Windows

1. 进入 ComfyUI 目录
2. 运行 `run_nvidia_gpu.bat`（NVIDIA 显卡）
3. 或运行 `run_cpu.bat`（仅 CPU）

### Mac

```bash
./run_mps.sh
```

### Linux

```bash
./run_nvidia_gpu.sh  # NVIDIA
./run_cpu.sh          # CPU
```

## 使用秋叶启动器

1. 双击启动器程序
2. 点击「一键启动」
3. 等待启动完成
4. 浏览器访问 http://127.0.0.1:8188

## 使用 Python 直接启动

```bash
cd ComfyUI
python main.py
```

### 启动参数

| 参数 | 说明 | 示例 |
|------|------|------|
| `--listen` | 监听地址 | `--listen 0.0.0.0` |
| `--port` | 端口号 | `--port 8188` |
| `--cpu` | 使用 CPU | `--cpu` |
| `--force-fp16` | 强制 FP16 | `--force-fp16` |

### 示例

```bash
# 监听所有地址，指定端口
python main.py --listen 0.0.0.0 --port 8188

# CPU 模式
python main.py --cpu
```

## 使用 Desktop 版本

1. 启动 ComfyUI Desktop 应用
2. 自动启动服务
3. 点击「打开 UI」进入界面

## 访问地址

| 地址 | 说明 |
|------|------|
| http://127.0.0.1:8188 | 本地访问 |
| http://localhost:8188 | 本地访问 |

## 验证启动

终端显示以下内容表示启动成功：

```
Server started on 127.0.0.1:8188
```

## 常见问题

### Q: 启动后浏览器无法访问

**A**: 检查防火墙设置，放行 8188 端口。

### Q: GPU 版本启动报错

**A**: 使用 CPU 版本测试，或更新显卡驱动。

### Q: 端口被占用

**A**: 关闭占用端口的程序，或使用 `--port` 指定其他端口。

## 下一步

- [首次图片生成](./first-image) - 生成你的第一张图片