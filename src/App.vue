<template>
  <div>导航栏 |
    <router-link to="/">Test</router-link> |
    <router-link to="xxx">Test2</router-link>
  </div>
  <router-view/>
</template>

<script>

export default {
  name: 'App',
}
</script>
