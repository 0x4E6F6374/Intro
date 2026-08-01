// 个人介绍页配置文件
// 所有展示文字内容均在此文件配置，便于随时修改，无需改动组件代码
export default defineAppConfig({
  profile: {
    // ============ 基础信息 ============
    name: '无名',
    fullName: '无名',
    title: '全栈开发工程师 / 开源爱好者',
    tagline: '用代码构建世界，用开源连接彼此',
    avatar: '/static/avatar.svg',
    location: '中国',
    status: '可接受合作',
    email: 'contact@example.com',

    // ============ Hero 主视觉区 ============
    hero: {
      eyebrow: 'Hello World',
      title: '我是 Noct',
      highlight: '全栈开发工程师',
      description: '专注于 Web 全栈开发与开源技术，热爱用代码解决问题，追求优雅的工程实现。这里记录了我的技术栈、项目作品与成长经历。',
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
        { label: '开发年限', value: '5+', icon: 'i-lucide-clock' },
        { label: '完成项目', value: '30+', icon: 'i-lucide-folder-check' },
        { label: '开源贡献', value: '100+', icon: 'i-lucide-git-pull-request' }
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
          title: '全栈能力',
          description: '覆盖前端、后端、数据库、部署运维的完整技术链路。',
          icon: 'i-lucide-layers'
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
            { name: 'Java / Spring Boot', level: 85 },
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
            { name: 'MongoDB', level: 75 }
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
          name: '自动化部署平台',
          description: '基于 Docker 的容器化部署平台，支持一键构建、灰度发布与回滚。',
          tags: ['Docker', 'Go', 'CI/CD'],
          link: '#',
          icon: 'i-lucide-ship'
        },
        {
          name: '实时聊天系统',
          description: '基于 WebSocket 的高性能实时通讯系统，支持群聊、私聊与消息推送。',
          tags: ['WebSocket', 'Node.js', 'Redis'],
          link: '#',
          icon: 'i-lucide-message-circle'
        },
        {
          name: '数据分析看板',
          description: '可视化数据监控平台，支持多数据源接入与自定义图表配置。',
          tags: ['Vue', 'ECharts', 'PostgreSQL'],
          link: '#',
          icon: 'i-lucide-bar-chart-3'
        },
        {
          name: 'API 网关',
          description: '轻量级 API 网关服务，支持路由、鉴权、限流与日志聚合。',
          tags: ['Go', 'Kong', 'gRPC'],
          link: '#',
          icon: 'i-lucide-network'
        }
      ]
    },

    // ============ 时间线经历 ============
    timeline: {
      title: '成长经历',
      subtitle: 'Timeline',
      items: [
        {
          date: '2026 - 至今',
          title: '全栈架构师',
          description: '负责核心系统架构设计与技术团队管理，主导多个大型项目的落地。',
          icon: 'i-lucide-award',
          tag: '当前'
        },
        {
          date: '2023 - 2026',
          title: '高级全栈工程师',
          description: '深耕 Web 全栈开发，主导用户中心、部署平台等核心产品研发。',
          icon: 'i-lucide-briefcase'
        },
        {
          date: '2021 - 2023',
          title: '后端开发工程师',
          description: '专注后端服务开发，深入实践微服务架构与高并发系统设计。',
          icon: 'i-lucide-code-2'
        },
        {
          date: '2020 - 2021',
          title: '前端开发工程师',
          description: '开启职业生涯，专注于现代前端框架与工程化体系建设。',
          icon: 'i-lucide-sparkles'
        }
      ]
    },

    // ============ 社交链接 ============
    social: {
      title: '关注我',
      subtitle: 'Follow Me',
      items: [
        { label: 'GitHub', icon: 'i-simple-icons-github', to: 'https://github.com/0x4E6F6374' },
        { label: 'Email', icon: 'i-lucide-mail', to: 'mailto:contact@example.com' },
        { label: 'Twitter', icon: 'i-simple-icons-x', to: '#' },
        { label: 'Discord', icon: 'i-simple-icons-discord', to: '#' }
      ]
    },

    // ============ 联系方式 ============
    contact: {
      title: '联系我',
      subtitle: 'Get In Touch',
      description: '有合作意向或技术交流需求？欢迎通过以下方式联系我，期待与你的交流。',
      primaryAction: {
        label: '发送邮件',
        to: 'mailto:contact@example.com',
        icon: 'i-lucide-send'
      },
      secondaryAction: {
        label: '查看 GitHub',
        to: 'https://github.com/0x4E6F6374',
        icon: 'i-simple-icons-github'
      }
    },

    // ============ 页脚 ============
    footer: {
      copyright: `© ${new Date().getFullYear()} Noct. 保留所有权利。`,
      builtWith: '使用 Nuxt UI 与 TypeScript 构建'
    }
  }
})
