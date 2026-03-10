---
title: Vue 3 组合式 API 指南
date: 2026-03-05
tags:
  - Vue
  - 前端
---

# Vue 3 组合式 API 指南

组合式 API（Composition API）是 Vue 3 引入的重要特性，让代码组织更加灵活。

## 为什么使用组合式 API？

在 Vue 2 的选项式 API 中，相关逻辑被分散在不同的选项中：

```javascript
// 选项式 API - 逻辑分散
export default {
  data() {
    return { count: 0, user: null }
  },
  methods: {
    increment() { this.count++ },
    fetchUser() { /* ... */ }
  },
  mounted() { /* ... */ }
}
```

组合式 API 允许我们将相关逻辑组织在一起：

```javascript
// 组合式 API - 逻辑集中
import { ref, onMounted } from 'vue'

export default {
  setup() {
    // 计数逻辑
    const count = ref(0)
    const increment = () => count.value++

    // 用户逻辑
    const user = ref(null)
    const fetchUser = async () => { /* ... */ }

    onMounted(fetchUser)

    return { count, increment, user }
  }
}
```

## 核心 API

### ref 和 reactive

```typescript
import { ref, reactive } from 'vue'

// ref 用于基本类型
const count = ref(0)

// reactive 用于对象
const state = reactive({
  name: 'Vue 3',
  version: 3
})
```

### computed

```typescript
import { computed } from 'vue'

const doubleCount = computed(() => count.value * 2)
```

### watch 和 watchEffect

```typescript
import { watch, watchEffect } from 'vue'

// 监听特定值
watch(count, (newVal) => {
  console.log(`count changed to ${newVal}`)
})

// 自动追踪依赖
watchEffect(() => {
  console.log(`count is ${count.value}`)
})
```

## 组合函数（Composables）

组合函数是组合式 API 的强大之处，可以复用逻辑：

```typescript
// useCounter.ts
import { ref } from 'vue'

export function useCounter(initialValue = 0) {
  const count = ref(initialValue)

  const increment = () => count.value++
  const decrement = () => count.value--

  return { count, increment, decrement }
}

// 使用
const { count, increment } = useCounter(10)
```

## 总结

组合式 API 提供了更灵活的代码组织方式，特别适合复杂组件和逻辑复用场景。
