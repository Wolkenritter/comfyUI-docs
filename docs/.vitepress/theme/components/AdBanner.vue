<template>
  <div class="ad-container" :class="[position, type]">
    <!-- Google AdSense -->
    <template v-if="type === 'adsense'">
      <ins class="adsbygoogle"
        style="display:block"
        data-ad-client="ca-pub-2644340141064615"
        data-ad-slot="4695046211"
        data-ad-format="auto"
        data-full-width-responsive="true"></ins>
    </template>

    <!-- 百度联盟 -->
    <template v-else-if="type === 'baidu'">
      <div class="baidu-ad" ref="baiduAdRef">
        <!-- <script :data-site-id="baiduSiteId" data-script="adsolution" src="//static.adzjx.com/adplus.js" defer></script> -->
      </div>
    </template>

    <!-- 图片/文字广告（自定义） -->
    <template v-else-if="type === 'custom'">
      <a :href="customAd.link" target="_blank" class="custom-ad-link">
        <div class="custom-ad">
          <img v-if="customAd.image" :src="customAd.image" :alt="customAd.title" class="ad-image" />
          <div class="ad-content">
            <div class="ad-title">{{ customAd.title }}</div>
            <div class="ad-desc">{{ customAd.description }}</div>
            <span class="ad-badge">{{ customAd.badge }}</span>
          </div>
        </div>
      </a>
    </template>

    <!-- 多广告单元轮播 -->
    <template v-else-if="type === 'rotator'">
      <div class="ad-rotator" v-show="currentAdIndex === 0">
        <slot name="ad1"></slot>
      </div>
      <div class="ad-rotator" v-show="currentAdIndex === 1">
        <slot name="ad2"></slot>
      </div>
    </template>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  // 广告类型: adsense | baidu | custom | rotator
  type: {
    type: String,
    default: 'adsense'
  },
  // 位置: top | bottom | sidebar | inline
  position: {
    type: String,
    default: 'bottom'
  },
  // 宽高设置
  width: {
    type: String,
    default: 'auto'
  },
  height: {
    type: String,
    default: 'auto'
  },
  // 百度联盟 site ID
  baiduSiteId: {
    type: String,
    default: ''
  },
  // 自定义广告内容
  customAd: {
    type: Object,
    default: () => ({
      title: '推荐阅读',
      description: '精彩内容推荐',
      link: '#',
      image: '',
      badge: '广告'
    })
  }
})

// 当前轮播索引
const currentAdIndex = ref(0)
let rotatorTimer = null

// 广告样式
const adStyles = computed(() => {
  const baseStyles = {
    display: 'block',
    width: props.width === 'auto' ? '100%' : props.width,
    height: props.height === 'auto' ? 'auto' : props.height
  }

  // 根据位置调整样式
  if (props.position === 'sidebar') {
    baseStyles.minHeight = '250px'
  }

  return baseStyles
})

// 加载 Google AdSense 脚本
const loadAdsenseScript = () => {
  // 检查是否已加载
  if (document.querySelector('script[src*="adsbygoogle"]')) {
    return
  }

  const script = document.createElement('script')
  script.async = true
  script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'
  script.crossorigin = 'anonymous'
  document.head.appendChild(script)

  script.onload = () => {
    // 触发广告加载
    if (window.adsbygoogle) {
      window.adsbygoogle.push({})
    }
  }
}

// 轮播切换
const startRotator = () => {
  if (props.type === 'rotator') {
    rotatorTimer = setInterval(() => {
      currentAdIndex.value = (currentAdIndex.value + 1) % 2
    }, 10000) // 10秒切换
  }
}

onMounted(() => {
  if (props.type === 'adsense') {
    loadAdsenseScript()
  }
  startRotator()
})

onUnmounted(() => {
  if (rotatorTimer) {
    clearInterval(rotatorTimer)
  }
})
</script>

<style scoped>
.ad-container {
  margin: 2rem 0;
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

/* 位置变体 */
.ad-container.top {
  margin: 0 0 2rem 0;
}

.ad-container.bottom {
  margin: 2rem 0 0 0;
}

.ad-container.sidebar {
  margin: 1rem 0;
}

.ad-container.inline {
  margin: 1.5rem 0;
}

/* Google AdSense 样式 */
.adsbygoogle {
  border-radius: 8px;
  overflow: hidden;
  background: #f8f9fa;
}

/* 自定义广告样式 */
.custom-ad-link {
  display: block;
  text-decoration: none;
  color: inherit;
}

.custom-ad {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background: var(--vp-c-bg-soft);
  transition: all 0.2s ease;
}

.custom-ad:hover {
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.15);
  transform: translateY(-2px);
}

.ad-image {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 6px;
  flex-shrink: 0;
}

.ad-content {
  flex: 1;
  text-align: left;
}

.ad-title {
  font-weight: 600;
  font-size: 0.95rem;
  color: var(--vp-c-text-1);
  margin-bottom: 0.25rem;
}

.ad-desc {
  font-size: 0.8rem;
  color: var(--vp-c-text-2);
  line-height: 1.4;
}

.ad-badge {
  display: inline-block;
  margin-top: 0.5rem;
  padding: 0.15rem 0.5rem;
  font-size: 0.65rem;
  color: #999;
  background: #f0f0f0;
  border-radius: 3px;
}

/* 轮播广告样式 */
.ad-rotator {
  min-height: 150px;
}

/* 响应式适配 */
@media (max-width: 768px) {
  .custom-ad {
    flex-direction: column;
    text-align: center;
  }

  .ad-content {
    text-align: center;
  }

  .ad-container.sidebar {
    display: none; /* 移动端隐藏侧边栏广告 */
  }
}
</style>