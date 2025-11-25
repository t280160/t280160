import { copyFileSync, mkdirSync, readdirSync, existsSync, rmSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// 配置路径
const distDir = join(__dirname, "../dist");
const nginxHtmlDir = "C:/软件/nginx-1.25.4/html/t280160"; // 根据你的实际路径修改

// 递归复制目录
function copyDir(src, dest) {
  if (!existsSync(dest)) {
    mkdirSync(dest, { recursive: true });
  }

  const entries = readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = join(src, entry.name);
    const destPath = join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      copyFileSync(srcPath, destPath);
      console.log(`✓ 复制: ${entry.name}`);
    }
  }
}

// 主函数
function deploy() {
  console.log("🚀 开始部署到 nginx...\n");

  // 检查 dist 目录是否存在
  if (!existsSync(distDir)) {
    console.error("❌ 错误: dist 目录不存在，请先运行构建命令 (pnpm build)");
    process.exit(1);
  }

  // 检查 nginx 目录是否存在
  const nginxBaseDir = dirname(nginxHtmlDir);
  if (!existsSync(nginxBaseDir)) {
    console.error(`❌ 错误: nginx 目录不存在: ${nginxBaseDir}`);
    console.error("   请检查 nginx 路径配置是否正确");
    process.exit(1);
  }

  try {
    // 如果目标目录存在，先删除（可选，如果你想每次都清空）
    if (existsSync(nginxHtmlDir)) {
      console.log("清理旧文件...");
      rmSync(nginxHtmlDir, { recursive: true, force: true });
    }

    // 复制文件
    console.log(`📦 从: ${distDir}`);
    console.log(`📦 到: ${nginxHtmlDir}\n`);
    copyDir(distDir, nginxHtmlDir);

    console.log("\n✅ 部署完成！");
    console.log(`   访问地址: http://localhost/t280160/`);
  } catch (error) {
    console.error("❌ 部署失败:", error.message);
    process.exit(1);
  }
}

deploy();
