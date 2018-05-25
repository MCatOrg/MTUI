<template>
  <div>
    <mt-cell title="测试"></mt-cell>

    <mt-cell
      title="测试"
      rightText='测试一' tips='跳转github'
      to="//github.com"
      isLink>
    </mt-cell>

    <mt-cell
    title='我是主题文字' rightText='测试一'>
    <i slot="icon" style="display: block; width: 10px; height: 10px; background: red;"></i>
    </mt-cell>
  </div>
</template>

<script>

export default {
};
</script>
