<template>
  <UApp>
    <!-- 暗色科技感背景层 -->
    <div class="tech-grid-bg" />
    <div class="tech-scan-line" />
    <div class="tech-glow-orb tech-glow-orb--cyan tech-float" style="top: -10%; left: -5%; width: 500px; height: 500px;" />
    <div class="tech-glow-orb tech-glow-orb--purple tech-float-delayed" style="top: 30%; right: -10%; width: 600px; height: 600px;" />
    <div class="tech-glow-orb tech-glow-orb--pink tech-float" style="bottom: -10%; left: 30%; width: 450px; height: 450px;" />

    <!-- 顶部导航 -->
    <UHeader :ui="{ container: 'max-w-6xl' }">
      <template #left>
        <NuxtLink to="#" class="flex items-center gap-2 group">
          <span class="text-2xl font-bold tech-gradient-text">{{ profile.name }}</span>
        </NuxtLink>
      </template>
      <UNavigationMenu
        :items="navItems"
        variant="link"
        highlight
      />
      <template #right>
        <UButton
          :to="profile.email ? `mailto:${profile.email}` : '#'"
          icon="i-lucide-mail"
          color="primary"
          variant="soft"
          size="sm"
          class="tech-glow-button"
        >
          联系我
        </UButton>
      </template>
    </UHeader>

    <UMain>
      <UContainer class="max-w-6xl">
        <!-- ============ Hero 主视觉 ============ -->
        <section id="home" class="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-16 text-center">
          <div class="flex flex-col items-center gap-6 tech-fade-up">
            <UBadge
              :label="profile.hero.eyebrow"
              color="primary"
              variant="soft"
              size="lg"
              class="tech-pulse"
            />
            <UAvatar
              :src="profile.avatar"
              :alt="profile.name"
              size="3xl"
              class="ring-2 ring-primary/50 shadow-[0_0_60px_rgba(56,189,248,0.4)]"
            />
            <h1 class="text-5xl md:text-7xl font-extrabold tracking-tight">
              {{ profile.hero.title }},
              <span class="tech-gradient-text">{{ profile.hero.highlight }}</span>
            </h1>
            <p class="max-w-2xl text-lg md:text-xl text-slate-400 leading-relaxed">
              {{ profile.hero.description }}
            </p>
            <div class="flex flex-wrap items-center justify-center gap-4 pt-2">
              <UButton
                :to="profile.hero.primaryAction.to"
                :icon="profile.hero.primaryAction.icon"
                size="xl"
                color="primary"
                class="tech-glow-button"
              >
                {{ profile.hero.primaryAction.label }}
              </UButton>
              <UButton
                :to="profile.hero.secondaryAction.to"
                :icon="profile.hero.secondaryAction.icon"
                size="xl"
                color="neutral"
                variant="outline"
              >
                {{ profile.hero.secondaryAction.label }}
              </UButton>
            </div>
            <!-- 数据统计 -->
            <div class="grid grid-cols-3 gap-4 md:gap-8 pt-10 w-full max-w-2xl">
              <div
                v-for="stat in profile.hero.stats"
                :key="stat.label"
                class="tech-glass rounded-xl p-4 md:p-6 flex flex-col items-center gap-1"
              >
                <UIcon :name="stat.icon" class="text-2xl md:text-3xl text-primary-400 mb-1" />
                <span class="text-3xl md:text-4xl font-bold tech-gradient-text">{{ stat.value }}</span>
                <span class="text-xs md:text-sm text-slate-500">{{ stat.label }}</span>
              </div>
            </div>
          </div>
        </section>

        <!-- ============ 关于我 ============ -->
        <section id="about" class="py-20 scroll-mt-20">
          <div class="text-center mb-12">
            <UBadge :label="profile.about.subtitle" color="primary" variant="soft" class="mb-3" />
            <h2 class="text-4xl md:text-5xl font-bold mb-4">
              {{ profile.about.title }}
            </h2>
            <p class="max-w-3xl mx-auto text-lg text-slate-400 leading-relaxed">
              {{ profile.about.description }}
            </p>
          </div>
          <UPageGrid>
            <UPageCard
              v-for="item in profile.about.highlights"
              :key="item.title"
              :title="item.title"
              :description="item.description"
              :icon="item.icon"
              class="tech-glass"
              spotlight
            />
          </UPageGrid>
        </section>

        <!-- ============ 技能栈 ============ -->
        <section id="skills" class="py-20 scroll-mt-20">
          <div class="text-center mb-12">
            <UBadge :label="profile.skills.subtitle" color="primary" variant="soft" class="mb-3" />
            <h2 class="text-4xl md:text-5xl font-bold mb-4">
              {{ profile.skills.title }}
            </h2>
          </div>
          <div class="grid md:grid-cols-2 gap-6">
            <div
              v-for="category in profile.skills.categories"
              :key="category.name"
              class="tech-glass rounded-2xl p-6 md:p-8"
            >
              <div class="flex items-center gap-3 mb-6">
                <div class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center tech-pulse">
                  <UIcon :name="category.icon" class="text-2xl text-primary-400" />
                </div>
                <h3 class="text-xl font-semibold">{{ category.name }}</h3>
              </div>
              <div class="flex flex-col gap-5">
                <div v-for="skill in category.skills" :key="skill.name">
                  <div class="flex items-center justify-between mb-2">
                    <span class="text-sm font-medium text-slate-200">{{ skill.name }}</span>
                    <span class="text-xs text-slate-500 tabular-nums">{{ skill.level }}%</span>
                  </div>
                  <UProgress
                    :model-value="skill.level"
                    size="sm"
                    class="[&_div]:bg-gradient-to-r [&_div]:from-cyan-400 [&_div]:to-purple-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- ============ 项目作品 ============ -->
        <section id="projects" class="py-20 scroll-mt-20">
          <div class="text-center mb-12">
            <UBadge :label="profile.projects.subtitle" color="primary" variant="soft" class="mb-3" />
            <h2 class="text-4xl md:text-5xl font-bold mb-4">
              {{ profile.projects.title }}
            </h2>
          </div>
          <UPageGrid>
            <UPageCard
              v-for="project in profile.projects.items"
              :key="project.name"
              :title="project.name"
              :description="project.description"
              :icon="project.icon"
              :to="project.link"
              class="tech-glass group"
              :class="{ 'ring-1 ring-primary/30': project.featured }"
              spotlight
            >
              <template #footer>
                <div class="flex flex-wrap gap-2">
                  <UBadge
                    v-for="tag in project.tags"
                    :key="tag"
                    :label="tag"
                    color="neutral"
                    variant="soft"
                    size="sm"
                  />
                </div>
              </template>
            </UPageCard>
          </UPageGrid>
        </section>

        <!-- ============ 时间线 ============ -->
        <section id="timeline" class="py-20 scroll-mt-20">
          <div class="text-center mb-12">
            <UBadge :label="profile.timeline.subtitle" color="primary" variant="soft" class="mb-3" />
            <h2 class="text-4xl md:text-5xl font-bold mb-4">
              {{ profile.timeline.title }}
            </h2>
          </div>
          <div class="relative max-w-3xl mx-auto">
            <!-- 时间线竖线 -->
            <div class="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-500 md:-translate-x-1/2" />
            <div class="flex flex-col gap-10">
              <div
                v-for="(item, index) in profile.timeline.items"
                :key="index"
                class="relative pl-12 md:pl-0 md:w-1/2"
                :class="index % 2 === 0 ? 'md:pr-12 md:text-right md:ml-0' : 'md:pl-12 md:ml-auto'"
              >
                <!-- 节点 -->
                <div
                  class="absolute left-0 md:left-auto top-0 w-8 h-8 rounded-full bg-slate-900 border-2 border-primary flex items-center justify-center tech-pulse"
                  :class="index % 2 === 0 ? 'md:-right-4' : 'md:-left-4'"
                >
                  <UIcon :name="item.icon" class="text-sm text-primary-400" />
                </div>
                <div class="tech-glass rounded-2xl p-5">
                  <div class="flex items-center gap-2 mb-2" :class="index % 2 === 0 ? 'md:justify-end' : ''">
                    <UBadge v-if="item.tag" :label="item.tag" color="primary" variant="soft" size="sm" />
                    <span class="text-xs text-slate-500 tabular-nums">{{ item.date }}</span>
                  </div>
                  <h3 class="text-lg font-semibold mb-1">{{ item.title }}</h3>
                  <p class="text-sm text-slate-400 leading-relaxed">{{ item.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- ============ 社交链接 ============ -->
        <section id="social" class="py-20 scroll-mt-20">
          <div class="text-center mb-12">
            <UBadge :label="profile.social.subtitle" color="primary" variant="soft" class="mb-3" />
            <h2 class="text-4xl md:text-5xl font-bold mb-4">
              {{ profile.social.title }}
            </h2>
          </div>
          <div class="flex flex-wrap items-center justify-center gap-4">
            <UButton
              v-for="item in profile.social.items"
              :key="item.label"
              :to="item.to"
              :icon="item.icon"
              :aria-label="item.label"
              size="xl"
              color="neutral"
              variant="outline"
              class="tech-glass tech-glow-button"
            >
              {{ item.label }}
            </UButton>
          </div>
        </section>

        <!-- ============ 联系方式 CTA ============ -->
        <section id="contact" class="py-20 scroll-mt-20">
          <div class="tech-border-gradient p-8 md:p-14 text-center relative overflow-hidden">
            <div class="absolute inset-0 -z-10 opacity-30">
              <div class="tech-glow-orb tech-glow-orb--cyan tech-float" style="top: -50%; left: -10%; width: 400px; height: 400px;" />
              <div class="tech-glow-orb tech-glow-orb--purple tech-float-delayed" style="bottom: -50%; right: -10%; width: 400px; height: 400px;" />
            </div>
            <UBadge :label="profile.contact.subtitle" color="primary" variant="soft" class="mb-3" />
            <h2 class="text-4xl md:text-5xl font-bold mb-4 tech-gradient-text">
              {{ profile.contact.title }}
            </h2>
            <p class="max-w-2xl mx-auto text-lg text-slate-400 leading-relaxed mb-8">
              {{ profile.contact.description }}
            </p>
            <div class="flex flex-wrap items-center justify-center gap-4">
              <UButton
                :to="profile.contact.primaryAction.to"
                :icon="profile.contact.primaryAction.icon"
                size="xl"
                color="primary"
                class="tech-glow-button"
              >
                {{ profile.contact.primaryAction.label }}
              </UButton>
              <UButton
                :to="profile.contact.secondaryAction.to"
                :icon="profile.contact.secondaryAction.icon"
                size="xl"
                color="neutral"
                variant="subtle"
              >
                {{ profile.contact.secondaryAction.label }}
              </UButton>
            </div>
          </div>
        </section>
      </UContainer>
    </UMain>

    <!-- 页脚 -->
    <UFooter :ui="{ container: 'max-w-6xl' }">
      <template #left>
        <p class="text-sm text-slate-500">{{ profile.footer.copyright }}</p>
      </template>
      <template #right>
        <p class="text-sm text-slate-500 flex items-center gap-1">
          <UIcon name="i-lucide-heart" class="text-pink-500" />
          {{ profile.footer.builtWith }}
        </p>
      </template>
    </UFooter>
  </UApp>
</template>

<script setup lang="ts">
const appConfig = useAppConfig()
const profile = computed(() => appConfig.profile)

// 顶部导航项（从配置派生，不硬编码）
const navItems = computed(() => [
  { label: '关于', to: '#about', icon: 'i-lucide-user' },
  { label: '技能', to: '#skills', icon: 'i-lucide-cpu' },
  { label: '项目', to: '#projects', icon: 'i-lucide-folder-git-2' },
  { label: '经历', to: '#timeline', icon: 'i-lucide-history' },
  { label: '联系', to: '#contact', icon: 'i-lucide-mail' }
])
</script>
