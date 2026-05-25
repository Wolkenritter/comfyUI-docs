# 优秀自定义节点推荐

整理了 ComfyUI 社区最受欢迎的实用自定义节点。

## 必装节点

### ComfyUI Manager

**功能**：管理和安装其他节点的必备工具

**安装**：
```bash
cd ComfyUI/custom_nodes
git clone https://github.com/ltdrdata/ComfyUI-Manager.git
```

**功能**：
- 一键安装/更新节点
- 修复缺失节点
- 模型下载管理

---

### ComfyUI-KJNodes

**功能**：实用工具集合

**特点**：
- Set/Get 变量节点
- 保持节点简洁
- 常用工具封装

**安装**：通过 Manager 安装

---

## 图像处理

### ComfyUI-Impact-Pack

**功能**：图像处理和检测节点

**包含节点**：
| 节点 | 功能 |
|------|------|
| FaceDetailer | 面部细节修复 |
| SAMDetector | 分割模型检测 |
| SegmentsMask | 区域遮罩 |
| BboxDetector | 区域检测 |

**安装**：通过 Manager 安装

---

### ComfyUI-LayerStyle

**功能**：Photoshop 风格图层操作

**包含节点**：
- 图层混合（正片叠底、滤色等）
- 模糊、锐化
- 颜色调整
- 一键抠图

**安装**：通过 Manager 安装

---

### was-node-suite

**功能**：多功能工具集合

**包含节点**：
- VAE 解码（分块）
- 图像缩放
- 文本处理
- LLM 集成

**安装**：
```bash
git clone https://github.com/WASasquive/was-node-suite-comfyui.git
```

---

## 工作流增强

### ComfyUI-Easy-Use

**功能**：简化节点的整合包

**特点**：
- 化繁为简
- 常用功能整合
- 工作流更清晰

**安装**：通过 Manager 安装

---

### rgthree-comfy

**功能**：工作流优化工具

**包含节点**：
- 灵活的 Switch 节点
- 上下文变量
- 格式化工具

---

### comfyui-inpaint-nodes

**功能**：增强的局部重绘

**特点**：
- 更好的修复效果
- SDXL Fooocus 模型
- LaMa、MAT 算法

---

## ControlNet 增强

### comfyui_controlnet_aux

**功能**：ControlNet 预处理器集合

**包含**：
- Canny
- Depth (MiDaS, Depth Anything)
- OpenPose
- Normal
- Lineart

**安装**：通过 Manager 安装

---

### ComfyUI-Advanced-ControlNet

**功能**：增强版 ControlNet

**特点**：
- 多 ControlNet 控制
- 权重调整
- 空间控制

---

## 动画相关

### ComfyUI-AnimateDiff-Evolved

**功能**：AI 动画生成

**安装**：通过 Manager 安装

---

### ComfyUI-VideoHelperSuite

**功能**：视频处理工具

**包含**：
- 视频加载
- 帧提取
- 视频保存

---

## 其他实用节点

### ComfyUI_FizzNodes

**功能**：序列处理和动画

---

### ComfyUI_ExtraModels

**功能**：额外模型支持

**包含**：
- 多种 VAE
- PixArt 支持
- 其他模型格式

---

### comfyui-LLM_party

**功能**：LLM 工作流集成

**特点**：
- AI 文本生成
- 工作流自动化

---

## 安装建议

### 推荐安装顺序

1. ComfyUI Manager（必装）
2. comfyui_controlnet_aux
3. ComfyUI-Impact-Pack
4. ComfyUI-LayerStyle
5. was-node-suite

### 按需安装

| 需求 | 推荐节点 |
|------|----------|
| 面部修复 | Impact Pack |
| 风格融合 | LayerStyle |
| 视频生成 | AnimateDiff |
| ControlNet | controlnet_aux |

---

## 下一步

- [官方资源](./official) - ComfyUI 官方资源
- [其他工具](./tools) - 相关工具