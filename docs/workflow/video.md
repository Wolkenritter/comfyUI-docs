# 视频生成工作流

学习在 ComfyUI 中使用视频生成模型。

## 支持的模型

### 视频模型

| 模型 | 说明 | 特点 |
|------|------|------|
| SVD | Stable Video Diffusion | 图像转视频 |
| AnimateDiff | 动画生成 | 风格动画 |
| 来画 | 国产视频模型 | 中文优化 |

### 模型选择

| 需求 | 推荐 |
|------|------|
| 写实视频 | SVD |
| 风格动画 | AnimateDiff |
| 快速生成 | AnimateDiff Turbo |

## SVD (Stable Video Diffusion)

### 安装 SVD

```
ComfyUI/models/checkpoints/
svd.safetensors           # 基础版
svd_xt.safetensors        # XT 版本（更高质量）
```

### 图像转视频工作流

```
┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│ LoadImage   │ →  │ SVDVideoGen │ →  │ VideoCombine│
│ (首帧)      │    │ eration     │    │             │
└─────────────┘    └─────────────┘    └─────────────┘
```

### 参数设置

| 参数 | 说明 | 推荐值 |
|------|------|--------|
| frames | 视频帧数 | 14-25 |
| fps | 帧率 | 12-30 |
| motion_bucket_id | 运动强度 | 50-127 |
| video_frames | 总帧数 | 14-25 |

### 质量调整

| 质量 | Frames | Motion | FPS |
|------|--------|--------|-----|
| 快速预览 | 14 | 50 | 12 |
| 标准 | 25 | 80 | 24 |
| 高质量 | 25 | 127 | 30 |

## AnimateDiff

### 安装 AnimateDiff

```
ComfyUI/models/checkpoints/
# 需要支持 AnimateDiff 的模型
# 推荐：SD 1.5 动漫模型

ComfyUI/custom_nodes/
ComfyUI-AnimateDiff-Evolved/
```

### AnimateDiff 工作流

```
┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│ CheckpointL │ →  │ AnimateDiff │ →  │ VAEDecode   │
│ oader       │    │ Loader      │    │             │
└─────────────┘    └─────────────┘    └─────────────┘
                       ↓
                  ┌─────────────┐
                  │ VideoSave   │
                  │ (可选)      │
                  └─────────────┘
```

### Motion 模块

| 模块 | 说明 |
|------|------|
| mm_sd_v15_v2.ckpt | 标准动画 |
| mm_sd_v15_v3.ckpt | 增强版 |
| v3_lora | LoRA 版本 |

### 提示词格式

AnimateDiff 使用特殊的提示词格式：

```
# 动画片段描述
[animation prompt format]
<positive prompt>, animated, dynamic pose, <negative prompt>

# 示例
1girl, beautiful, dynamic pose, flowing hair, animated, cinematic
<lora:animation:0.8>, <lora:motion:0.5>
```

## 视频保存

### VideoCombine 节点

```
输出设置：
- format: mp4 / gif
- fps: 24-30
- codec: h264 / vp9
- quality: 调整文件大小
```

### 常用格式

| 格式 | 用途 | 推荐 |
|------|------|------|
| MP4 | 通用 | 推荐 |
| GIF | 社交媒体 | 循环 |
| WEBM | 网页 | 小文件 |

## 视频增强

### 插帧

使用插帧提升流畅度：

```
1. 生成基础视频（24fps）
2. 使用插帧节点
3. 输出 60fps 流畅视频
```

### 超分辨率

提升视频分辨率：

```
1. 逐帧处理
2. 使用视频超分模型
3. 保持时序一致
```

## 提示词技巧

### 动态描述

| 描述 | 效果 |
|------|------|
| flowing hair | 飘动头发 |
| wind, breeze | 风效果 |
| dancing, moving | 动态动作 |
| camera pan | 镜头移动 |

### 稳定描述

| 描述 | 效果 |
|------|------|
| static pose | 稳定姿势 |
| standing still | 静止站立 |
| no movement | 无运动 |

## 常见问题

### Q: 视频生成很慢

**A**: 
- 减少帧数
- 使用较小的分辨率
- 使用 AnimateDiff Turbo

### Q: 视频抖动

**A**:
- 降低 motion_bucket_id
- 使用稳定提示词
- 减少帧数

### Q: 生成中断

**A**:
- 检查显存
- 降低质量设置
- 更新驱动程序

## 下一步

- [AnimateDiff 详细教程](./animatediff) - 动画生成
- [来画模型](../tutorial/laihua) - 国产模型