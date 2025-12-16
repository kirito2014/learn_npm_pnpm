This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Environment Variables

This project uses environment variables to configure various aspects of the application. Create a `.env` file in the root directory and add the following variables:

| Variable | Description | Example |
|----------|-------------|---------|
| `NEXT_PUBLIC_PROJECT_NAME` | The name of the project or GitHub repository link | `https://github.com/hitokoto-osc` |
| `NEXT_PUBLIC_VERSION` | The version of the project | `1.1.0` |
| `NEXT_PUBLIC_DESCRIPTION` | A description of the project | `一个简单前端练习项目` |
| `NEXT_PUBLIC_AUTHOR` | The author of the project | `majorking` |
| `NEXT_PUBLIC_GITHUB_REPO` | The GitHub repository link for the project | `https://github.com/kirito2014/learn_npm_pnpm` |
| `NEXT_PUBLIC_SITE_TITLE` | The title of the website | `hitokoto-app` |

These variables are used to customize the application's footer information, browser tab title, and other metadata.

### Example `.env` File

```env
# 项目配置信息
NEXT_PUBLIC_PROJECT_NAME=https://github.com/hitokoto-osc
NEXT_PUBLIC_VERSION=1.1.0
NEXT_PUBLIC_DESCRIPTION=一个简单前端练习项目
NEXT_PUBLIC_AUTHOR=majorking
NEXT_PUBLIC_GITHUB_REPO=https://github.com/kirito2014/learn_npm_pnpm
NEXT_PUBLIC_SITE_TITLE=hitokoto-app
```
