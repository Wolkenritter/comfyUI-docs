# 自定义节点

ComfyUI 扩展节点详解，需要安装 custom nodes。

## 节点分类

### 热门节点

| 节点 | 说明 | 用途 |
|------|------|------|
| [Impact Pack](./impact-pack) | 面部修复、检测 | 人像处理 |
| [ControlNet](./controlnet-nodes) | ControlNet 节点 | 结构控制 |
| [LayerStyle](./layer-style) | 图层混合 | PS 风格操作 |
| [AnimateDiff](./animatediff) | 动画生成 | AI 视频 |

### 实用工具

| 节点 | 说明 |
|------|------|
| [KJNodes](./kj-nodes) | 工具集合 |
| [WAS Node Suite](./was-node) | 多功能工具 |

## 安装方法

### 通过 Manager 安装

```
1. 打开 ComfyUI Manager
2. 搜索节点名称
3. 点击安装
4. 重启 ComfyUI
```

### 手动安装

```bash
cd ComfyUI/custom_nodes
git clone <repo-url>
```

## 节点目录

- [Impact Pack](./impact-pack) - 人像处理
- [ControlNet](./controlnet-nodes) - ControlNet
- [LayerStyle](./layer-style) - 图层混合
- [AnimateDiff](./animatediff) - 动画
- [实用工具](./utils) - 其他工具