# Hitokoto App - 一言应用

这是一个基于 Next.js 构建的一言应用，集成了 Hitokoto API，提供精美的界面和丰富的自定义功能。

## 技术栈

- **前端框架**: Next.js 16
- **开发语言**: TypeScript
- **样式框架**: Tailwind CSS 4
- **状态管理**: React Hooks
- **构建工具**: pnpm

## 项目特性

- ✨ 精美的渐变文字效果
- 🌓 暗黑/明亮主题切换
- 🎨 丰富的样式自定义选项：
  - 字体颜色、类型、大小
  - 边框圆角、阴影效果
  - 字体样式（加粗、斜体、下划线）
- 📦 支持按类别获取一言内容
- 🎯 响应式设计，适配不同屏幕尺寸
- 🏠 优雅的背景动画效果
- 🔧 便捷的设置面板，实时预览效果

## 快速开始

### 安装依赖

```bash
pnpm install
```

### 启动开发服务器

```bash
pnpm dev
```

在浏览器中打开 [http://localhost:3000](http://localhost:3000) 查看应用效果。

### 构建生产版本

```bash
pnpm build
```

## 环境变量配置

创建 `.env` 文件并添加以下环境变量：

| 变量名 | 描述 | 示例 |
|--------|------|------|
| `NEXT_PUBLIC_PROJECT_NAME` | 项目名称或 GitHub 仓库链接 | `https://github.com/hitokoto-osc` |
| `NEXT_PUBLIC_VERSION` | 项目版本号 | `1.1.0` |
| `NEXT_PUBLIC_DESCRIPTION` | 项目描述 | `一个简单前端练习项目` |
| `NEXT_PUBLIC_AUTHOR` | 项目作者 | `majorking` |
| `NEXT_PUBLIC_GITHUB_REPO` | 项目 GitHub 仓库链接 | `https://github.com/kirito2014/learn_npm_pnpm` |
| `NEXT_PUBLIC_SITE_TITLE` | 网站标题 | `hitokoto-app` |

### 环境变量示例

```env
# 项目配置信息
NEXT_PUBLIC_PROJECT_NAME=https://github.com/hitokoto-osc
NEXT_PUBLIC_VERSION=1.1.0
NEXT_PUBLIC_DESCRIPTION=一个简单前端练习项目
NEXT_PUBLIC_AUTHOR=majorking
NEXT_PUBLIC_GITHUB_REPO=https://github.com/kirito2014/learn_npm_pnpm
NEXT_PUBLIC_SITE_TITLE=hitokoto-app
```

## 部署

### 使用 Vercel 部署

1. 登录 [Vercel](https://vercel.com/) 账号
2. 点击 "New Project" 按钮
3. 选择你的 GitHub 仓库
4. 配置环境变量（在 Settings > Environment Variables 中添加）
5. 点击 "Deploy" 按钮开始部署

### 本地构建

```bash
pnpm build
pnpm start
```

## 项目结构

```
├── src/
│   ├── app/
│   │   ├── layout.tsx    # 根布局文件
│   │   └── page.tsx      # 主页面组件
│   └── components/       # 组件目录
├── public/               # 静态资源目录
├── .env                  # 环境变量配置
├── next.config.js        # Next.js 配置
├── tailwind.config.js    # Tailwind CSS 配置
├── tsconfig.json         # TypeScript 配置
└── README.md             # 项目说明
```

## 贡献

欢迎提交 Issues 和 Pull Requests！

## 许可证

MIT License

## 致谢

- [Hitokoto API](https://hitokoto.cn/) - 提供一言内容
- [Next.js](https://nextjs.org/) - 前端框架
- [Tailwind CSS](https://tailwindcss.com/) - 样式框架