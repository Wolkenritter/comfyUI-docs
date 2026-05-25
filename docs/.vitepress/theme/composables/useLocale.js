/**
 * VitePress 中文本地化配置
 * 用于覆盖默认的英文文案
 */

export default {
  // 导航
  nav: {
    search: '搜索',
    'theme-toggle': '切换主题',
    'theme-toggle-invert': '切换深色模式',
    'menu-button': '菜单'
  },

  // 搜索
  search: {
    searchButton: '搜索',
    resetButton: '重置',
    cancelButton: '取消',
    modalTitle: '搜索文档',
    modalDep: '正在搜索...',
    noResultsText: '未找到相关结果',
    resetButtonTitle: '重置搜索',
    seeAllResultsText: '查看全部结果',
    openInEditor: '在编辑器中打开',
    searchResults: '搜索结果',
    searchResultsEmpty: '未找到包含"{keyword}"的结果',
    searchResultsCount: '找到 {count} 个结果',
    searchResultsGroupedByProject: '按项目分组',
    searchResultsGroupedByCategory: '按分类分组',
    includeSubModules: '包含子模块',
    reset: '重置',
    seeMore: '查看更多'
  },

  // 主题切换
  'theme-toggle': {
    light: '浅色模式',
    dark: '深色模式',
    system: '跟随系统'
  },

  // 文档
  docs: {
    // 更新信息
    lastUpdated: '最后更新于',
    lastUpdatedBy: '最后更新者',
    contributors: '贡献者',

    // 上下页
    prev: '上一页',
    next: '下一页',

    // 编辑链接
    editLink: '编辑此页',
    editLink神经系统: '在 GitHub 上编辑此页',

    // 上下页滚动提示
    scrollPrevTitle: '查看上一页',
    scrollNextTitle: '查看下一页',

    // 棒针导航
   棒针Title: '在此页面顶部显示',
   棒针AriaLabel: '回到此页面顶部',

    // 侧边栏
    sidebar: '侧边栏',
    sidebarMenuAriaLabel: '侧边栏菜单',
    sidebarSectionAriaLabel: '侧边栏分区',

    // 本地化
    i18n: '多语言',
    i18nAriaLabel: '选择语言'
  },

  // 博客
  blog: {
    column: '专栏',
    columns: '专栏',
    allPosts: '全部文章',
    postsTagged: '标签为 "{tag}" 的文章',
    postsByTag: '标签',
    clearDate: '清除日期筛选',
    clearTag: '清除标签筛选'
  },

  // 对比视图
  'comparison-slider': {
    drag: '拖动比较',
    before: '之前',
    after: '之后'
  },

  // 评论区
  'comment': {
    title: '评论',
    comment: '评论',
    comments: '评论',
    commentsCount: '{count} 条评论',
    beFirstComment: '成为第一个评论者',
    commentH1: '评论',
    commentCard: '{author} 说',
    writeComment: '写下你的评论...',
    sendComment: '发送评论',
    deleteComment: '删除评论',
    deleteCommentConfirm: '确定要删除这条评论吗？',
    deleteCommentYes: '是，删除',
    deleteCommentNo: '否',
    editComment: '编辑',
    saveComment: '保存',
    cancelComment: '取消',
    sendFirstComment: '成为第一个评论者！',
    reportComment: '举报评论',
    reportSent: '已举报',
    reportThankYou: '感谢你的反馈！'
  },

  // 版权
  copyright: {
    generatedFrom: '基于 {source} 生成',
    updatedAt: '最后更新于 {time}'
  },

  // 页面元信息
  meta: {
    tag: '标签',
    category: '分类',
    toc: '目录',
    description: '描述',
    outline: '本章大纲',
    chapter: '章节'
  },

  // 404
  404: {
    title: '页面未找到',
    link: '返回首页',
    message: '抱歉，您访问的页面不存在。'
  },

  // 页脚
  footer: {
    message: '基于 VitePress 构建',
    copyright: 'Copyright © 2024 ComfyUI Docs'
  },

  // 社交链接
  socialLinks: {
    github: 'GitHub'
  },

  // 主题配置
  themeConfig: {
    returnToTopLabel: '返回顶部',
    sidebarMenuLabel: '菜单',
    editLinkLabel: '编辑此页',
    lastUpdatedLabel: '最后更新于',
    contributorsLabel: '贡献者',
    prevLinkLabel: '上一篇',
    nextLinkLabel: '下一篇'
  },

  // 更新日志
  changelog: {
    log: '更新日志',
    changelogTitle: '更新日志',
    timeline: '时间线',
    timelineTitle: '时间线',
    allDate: '全部时间'
  },

  // 赞助
  sponsors: {
    sponsors: '赞助',
    sponsor: '赞助商',
    becomeSponsor: '成为赞助商',
    sponsorTitle: '赞助商',
    sponsorDescription: '通过成为赞助商来支持此项目',
    tier: '等级 {tier}',
    viewAll: '查看全部',
    seeMore: '查看更多'
  },

  // PDF 下载
  pdf: {
    download: '下载 PDF',
    downloadOffline: '下载离线版本',
    downloadOfflineDescription: '下载文档的 PDF 版本以便离线阅读',
    printedAt: '打印于'
  },

  // 思维导图
  mindmap: {
    mindmap: '思维导图',
    mindmapTitle: '思维导图'
  },

  // 任务列表
  todo: {
    todoList: '待办事项',
    markDone: '标记完成',
    markUndo: '标记未完成',
    done: '已完成',
    undone: '未完成',
    allDone: '全部完成'
  },

  // 代码块
  code: {
    'copy': '复制代码',
    'copied': '已复制',
    'line': '第 {line} 行',
    'block': '代码块'
  },

  // 菜单
  menu: {
    collapse: '收起',
    expand: '展开'
  },

  // 搜索提示
  hint: {
    search: '搜索文档...',
    noResultsText: '未找到结果',
    searchResults: '搜索结果'
  }
}