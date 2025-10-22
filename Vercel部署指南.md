# Vercel部署指南 - 个人博客上线教程

## 🎯 目标
将你的个人博客项目部署到Vercel，获得一个免费的在线网站

## 📋 前置条件
- 一个GitHub账号（如果没有，先注册）
- 你的项目代码（当前在本地）
- 大约10分钟时间

## 🚀 详细操作步骤

### 第一步：准备GitHub仓库

#### 1.1 创建新仓库
1. 登录GitHub（https://github.com）
2. 点击右上角的 "+" 号 → "New repository"
3. 填写仓库信息：
   - Repository name: `my-blog`（或其他你喜欢的名字）
   - Description: `我的个人博客网站`
   - 选择 **Public**（公开仓库）
   - 不要勾选 "Initialize this repository with a README"
4. 点击 "Create repository"

#### 1.2 上传代码到GitHub

**方法A：使用Git命令行（推荐）**
```bash
# 在项目根目录打开终端
# 初始化Git仓库
git init

# 添加所有文件
git add .

# 提交代码
git commit -m "Initial commit - 个人博客项目"

# 连接到你的GitHub仓库（替换为你的仓库地址）
git remote add origin https://github.com/你的用户名/你的仓库名.git

# 推送到GitHub
git push -u origin main
```

**方法B：直接上传ZIP文件**
1. 在GitHub仓库页面，点击 "uploading an existing file"
2. 拖拽你的项目文件到上传区域
3. 点击 "Commit changes"

### 第二步：注册Vercel账号

#### 2.1 访问Vercel
1. 打开 https://vercel.com
2. 点击 "Sign Up"
3. 选择 "Continue with GitHub"
4. 授权Vercel访问你的GitHub账号

#### 2.2 完成注册
- 填写用户名和团队信息
- 可以跳过高级设置

### 第三步：部署项目

#### 3.1 导入GitHub仓库
1. 登录Vercel后，点击 "New Project"
2. 找到 "Import Git Repository" 部分
3. 在列表中找到你的 `my-blog` 仓库
4. 点击 "Import"

#### 3.2 配置项目
在配置页面，保持默认设置即可：
- **Framework Preset**: 选择 "Other"
- **Root Directory**: 保持默认（/）
- **Build Command**: 留空（因为是静态网站）
- **Output Directory**: 留空
- **Install Command**: 留空

#### 3.3 部署
1. 点击 "Deploy" 按钮
2. 等待部署完成（通常30秒-2分钟）
3. 部署成功后，会看到成功页面

### 第四步：访问你的网站

#### 4.1 获取网站地址
部署成功后，Vercel会提供：
- 一个免费的 `.vercel.app` 域名，如：`https://my-blog-xxx.vercel.app`

#### 4.2 测试网站
1. 点击Vercel提供的链接
2. 检查所有页面是否正常显示
3. 测试图片是否加载正常
4. 测试导航功能是否正常

## 🎨 自定义域名（可选）

### 第五步：绑定自定义域名

#### 5.1 购买域名（如果还没有）
推荐平台：
- 阿里云：https://wanwang.aliyun.com
- 腾讯云：https://dnspod.cloud.tencent.com
- Namecheap：https://www.namecheap.com

#### 5.2 在Vercel中配置域名
1. 进入Vercel项目仪表板
2. 点击 "Settings" → "Domains"
3. 输入你的域名，如：`yourname.com`
4. 点击 "Add"

#### 5.3 配置DNS解析
根据Vercel提供的DNS记录，在你的域名提供商处配置：

**类型A记录：**
- 主机记录：`@`
- 记录值：`76.76.19.61`

**类型CNAME记录：**
- 主机记录：`www`
- 记录值：`cname.vercel-dns.com`

## 🔧 项目优化建议

### 代码优化
1. **修改目录名称**：将中文目录名改为英文
   ```
   个人博客/ → blog/
   ```

2. **更新文件引用**：确保所有文件路径正确

3. **添加网站图标**：创建 `favicon.ico` 文件

### SEO优化
1. **添加meta标签**：在HTML的 `<head>` 中添加：
   ```html
   <meta name="description" content="我的个人博客，分享读书、写作和音乐">
   <meta name="keywords" content="个人博客,读书,写作,音乐">
   <meta name="author" content="你的名字">
   ```

2. **设置网站标题**：确保每个页面都有合适的 `<title>`

## 🐛 常见问题解决

### 问题1：图片不显示
**原因**：图片路径错误
**解决**：
- 检查图片路径是否正确
- 确保文件名大小写匹配
- 使用相对路径：`<img src="src/1.jpg">`

### 问题2：字体不加载
**原因**：字体文件路径错误或跨域问题
**解决**：
- 检查CSS中字体文件路径
- 确保字体文件已上传到GitHub

### 问题3：中文乱码
**原因**：字符编码问题
**解决**：
在HTML文件头部添加：
```html
<meta charset="UTF-8">
```

### 问题4：页面空白
**原因**：文件路径错误或主文件未找到
**解决**：
- 确保主文件名为 `index.html`
- 检查文件是否在正确的目录层级

## 📱 后续更新

### 自动部署
Vercel会自动检测你的GitHub仓库变化：
- 每次推送到main分支，Vercel会自动重新部署
- 在Vercel中可以查看部署历史和日志

### 手动部署
如果需要手动触发部署：
1. 进入Vercel项目页面
2. 点击 "Deployments" → "Redeploy"

## 🎯 成功标志
- ✅ 网站可以通过 `.vercel.app` 域名访问
- ✅ 所有图片正常显示
- ✅ 导航功能正常工作
- ✅ 移动端适配良好
- ✅ 页面加载速度正常

## 📞 获取帮助
如果遇到问题：
1. 检查Vercel部署日志
2. 查看GitHub仓库是否同步成功
3. 在浏览器控制台查看错误信息
4. 随时问我！

---

**🎉 恭喜！按照这份指南操作，你的网站很快就能上线了！**