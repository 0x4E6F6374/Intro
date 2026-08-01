// 个人介绍页配置文件
// 所有展示文字内容均在此文件配置，便于随时修改，无需改动组件代码
// 头像与友情链接已拆分到独立文件，便于单独维护：
import avatar from './config/avatar'
import links from './config/links'

export default defineAppConfig({
  profile: {
    // ============ 基础信息 ============
    name: '无名',
    fullName: '无名',
    title: '大一学生 / 开源爱好者 / 开发工程师 / 网络安全爱好者 / 项目负责人',
    tagline: '用代码构建世界，用开源连接彼此',
    avatar,
    location: '中国',
    status: '可接受合作',
    email: 'comierate@gmail.com',

    // ============ Hero 主视觉区 ============
    hero: {
      eyebrow: 'Hello World',
      title: '我是 无名',
      highlight: '一个爱好计算机相关技术的学生',
      description: '专注于 Web 开发与开源技术、网络安全，热爱用代码解决问题，追求优雅的工程实现。这里记录了我的技术栈、项目作品与成长经历。',
      primaryAction: {
        label: '查看项目作品',
        to: '#projects',
        icon: 'i-lucide-folder-git-2'
      },
      secondaryAction: {
        label: '联系我',
        to: '#contact',
        icon: 'i-lucide-mail'
      },
      stats: [
        { label: '开发年限', value: '3+', icon: 'i-lucide-clock' },
        { label: '完成项目', value: '3+', icon: 'i-lucide-folder-check' },
        { label: '开源贡献', value: '20+', icon: 'i-lucide-git-pull-request' }
      ]
    },

    // ============ 关于我 ============
    about: {
      title: '关于我',
      subtitle: 'About Me',
      description: '一名热爱技术的全栈开发工程师，专注于构建高质量、可维护的 Web 应用。从底层架构到前端交互，我享受将想法转化为现实产品的全过程。相信开源的力量，热衷于分享与协作。',
      highlights: [
        {
          title: '工程化思维',
          description: '注重代码质量与架构设计，遵循 SOLID 原则与设计模式。',
          icon: 'i-lucide-blocks'
        },
        {
          title: '持续学习',
          description: '追踪前沿技术，保持对新工具与最佳实践的敏感度。',
          icon: 'i-lucide-rocket'
        },
        {
          title: '开源精神',
          description: '积极回馈社区，参与开源项目协作与知识分享。',
          icon: 'i-lucide-git-branch'
        },
        {
          title: '网络安全',
          description: '关注网络安全，参与安全项目与研究。',
          icon: 'i-lucide-lock'
        },
        {
          title: 'Furry控',
          description: '重度Furry控，自24年入圈.',
          icon: 'i-famicons:paw'
        }
      ]
    },

    // ============ 技能栈 ============
    skills: {
      title: '技术栈',
      subtitle: 'Skills',
      categories: [
        {
          name: '前端开发',
          icon: 'i-lucide-monitor',
          skills: [
            { name: 'Vue / Nuxt', level: 95 },
            { name: 'TypeScript', level: 90 },
            { name: 'React', level: 80 },
            { name: 'Tailwind CSS', level: 92 }
          ]
        },
        {
          name: '后端开发',
          icon: 'i-lucide-server',
          skills: [
            { name: 'Node.js', level: 88 },
            { name: 'Java / Spring Boot', level: 90 },
            { name: 'Go', level: 75 },
            { name: 'Python', level: 78 }
          ]
        },
        {
          name: '数据库与缓存',
          icon: 'i-lucide-database',
          skills: [
            { name: 'MySQL', level: 88 },
            { name: 'PostgreSQL', level: 82 },
            { name: 'Redis', level: 85 },
            { name: 'MongoDB', level: 20 }
          ]
        },
        {
          name: '工程与运维',
          icon: 'i-lucide-cloud',
          skills: [
            { name: 'Docker', level: 85 },
            { name: 'Git', level: 92 },
            { name: 'CI/CD', level: 80 },
            { name: 'Linux', level: 87 }
          ]
        }
      ]
    },

    // ============ 项目作品 ============
    projects: {
      title: '项目作品',
      subtitle: 'Projects',
      items: [
        {
          name: 'UserCenter 用户中心',
          description: '面向 Minecraft 服务器的用户中心系统，集成账号管理、白名单、权限控制，基于 Spring Boot + Redis + MySQL 构建。',
          tags: ['Spring Boot', 'Redis', 'MySQL', 'SaToken'],
          link: '#',
          icon: 'i-lucide-users',
          featured: true
        },
        {
          name: '个人介绍页',
          description: '基于 Nuxt UI 构建的炫酷个人主页，配置化驱动，支持暗色科技感主题。',
          tags: ['Nuxt', 'Vue', 'TypeScript', 'Nuxt UI'],
          link: '#',
          icon: 'i-lucide-user-circle',
          featured: true
        },
        {
          name: 'Aeracraft',
          description: '自己开的Minecraft服务器，需要正版账户，立志成为Hypixel这样的服务器！！',
          tags: ['Minecraft', 'Java',],
          link: '#',
          icon: 'i-material-icon-theme:minecraft',
          featured: true
        },
      ]
    },

    // ============ 时间线经历 ============
    timeline: {
      title: '成长经历',
      subtitle: 'Timeline',
      items: [
        {
          date: '2026 - 至今',
          title: '初入网络安全',
          description: '开始学习网络安全，关注安全事件，参与安全社区。',
          icon: 'i-lucide-briefcase'
        },
        {
          date: '2023 - 2024',
          title: '稍有经验',
          description: '自行学习了进阶的前端框架，以及初步去接触C++.',
          icon: 'i-lucide-code-2'
        },
        {
          date: '2019 - 2023',
          title: '编程入门',
          description: '从基础开始，学习了 Vue、Nuxt、TypeScript 等前端框架，以及 Python、Java、Go 等后端技术.',
          icon: 'i-lucide-sparkles'
        }
      ]
    },

    // ============ 兴趣爱好（非编程，让人物更立体） ============
    hobbies: {
      title: '兴趣爱好',
      subtitle: 'Hobbies',
      description: '代码之外，这些是我生活里的能量来源。',
      items: [
        {
          name: '阅读',
          description: '偏爱科幻与历史，享受在文字里穿越时空的感觉。',
          icon: 'i-lucide-book-open'
        },
        {
          name: '音乐',
          description: '听电子与后摇居多，写代码时常有 BGM 陪伴。',
          icon: 'i-lucide-music'
        },
        {
          name: '摄影',
          description: '喜欢记录街角与光影，镜头是观察世界的另一只眼。',
          icon: 'i-lucide-camera'
        },
        {
          name: '游戏',
          description: 'Minecraft重度爱好者，离了这玩意我活不了啊啊啊',
          icon: 'i-lucide-gamepad-2'
        },
        {
          name: '咖啡',
          description: '手冲爱好者，享受清晨磨豆与注水的仪式感。',
          icon: 'i-lucide-coffee'
        }
      ]
    },

    // ============ 社交链接 ============
    social: {
      title: '关注我',
      subtitle: 'Follow Me',
      items: [
        { label: 'GitHub', icon: 'i-simple-icons-github', to: 'https://github.com/0x4E6F6374' },
        { label: 'Email', icon: 'i-lucide-mail', to: 'mailto:comierate@gmail.com' },
        { label: 'Bilibili', image: '/static/social/bilibili.svg', to: 'https://b23.tv/MBnMgcZ' },
        { label: '抖音', image: '/static/social/douyin.svg', to: 'https://v.douyin.com/K9YfQEHLUyo/' }
      ]
    },

    // ============ 友情链接（独立配置文件 app/config/links.ts） ============
    links,

    // ============ 联系方式 ============
    contact: {
      title: '联系我',
      subtitle: 'Get In Touch',
      description: '有合作意向或技术交流需求？欢迎通过以下方式联系我，期待与你的交流。',
      primaryAction: {
        label: '发送邮件',
        to: 'mailto:comierate@gmail.com',   
        icon: 'i-lucide-send'
      },
      secondaryAction: {
        label: '查看 GitHub',
        to: 'https://github.com/0x4E6F6374',
        icon: 'i-simple-icons-github'
      },
      tertiaryAction: {
        label: '添加 QQ',
        to: 'http://wpa.qq.com/msgrd?v=3&uin=3750620867&site=qq&menu=yes',
        icon: '/static/social/qq.svg'
      }
    },

    // ============ 页脚 ============
    footer: {
      copyright: `© ${new Date().getFullYear()} 无名. 保留所有权利。`,
      builtWith: '使用 Nuxt UI 与 TypeScript 构建',
      // 备案信息
      filings: [
        {
          label: '吉ICP备2026006928号-1',
          to: 'https://beian.miit.gov.cn/',
          icon: '/static/beian/icp.png'
        },
        {
          label: '吉公网安备22240302000220号',
          to: 'https://www.beian.gov.cn/portal/registerSystemInfo?recordcode=22240302000220',
          icon: '/static/beian/gongan.png'
        }
      ]
    }
  }
})
