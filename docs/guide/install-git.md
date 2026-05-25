# Git 安装教程

Git 是版本控制工具，安装自定义节点和下载模型时经常需要使用。

## 下载 Git

### Windows

1. 访问 [Git 官网](https://git-scm.com/download/win)
2. 选择对应版本（32位/64位）
3. 下载安装包

或使用国内镜像：
```
https://registry.npmmirror.com/_hot/git
```

## Windows 安装步骤

### 1. 运行安装包

双击下载的 `.exe` 文件。

### 2. 配置安装选项

**推荐配置：**

| 选项 | 建议值 |
|------|--------|
| 选择组件 | 勾选 "Git Bash Here" |
| 默认编辑器 | 选择你喜欢的编辑器 |
| PATH | 选 "Use Git from the command line" |
| 行尾转换 | 选 "Checkout as-is, commit as-is" |
| 终端模拟器 | 选 "Use MinTTY" |

### 3. 完成安装

点击 "Install"，等待安装完成。

## 验证安装

打开 **PowerShell** 或 **Git Bash**，输入：

```bash
git --version
```

如果显示类似以下内容，说明安装成功：

```
git version 2.43.0
```

## 基本命令

### 克隆仓库

```bash
# 克隆到当前目录
git clone https://github.com/xxx/xxx.git

# 克隆到指定目录
git clone https://github.com/xxx/xxx.git my-folder
```

### 常用命令

| 命令 | 说明 |
|------|------|
| `git status` | 查看仓库状态 |
| `git pull` | 拉取更新 |
| `git clone` | 克隆仓库 |
| `git fetch` | 获取远程更新 |

## 在 ComfyUI 中使用

### 克隆自定义节点

```bash
# 进入 custom_nodes 目录
cd ComfyUI/custom_nodes

# 克隆节点仓库
git clone https://github.com/ltdrdata/ComfyUI-Manager.git
```

### 更新节点

```bash
cd ComfyUI/custom_nodes/ComfyUI-Manager
git pull
```

## 常见问题

### Q: 提示 "git 不是内部或外部命令"

**A**: 重启终端或电脑，让 PATH 生效。

### Q: 克隆速度慢

**A**: 可使用国内镜像或设置代理。

### Q: 克隆报错 "Permission denied"

**A**: 检查仓库是否公开，或配置 SSH Key。

## 下一步

- [秋叶启动器](./aaaki-launcher) - 使用启动器简化操作
- [自定义节点安装](../custom-node/) - 安装自定义节点