<template>
  <div id="list-view">
    <h2 class="title">List</h2>
    <div class="mtui-cells__title">单选列表项</div>
    <div class="mtui-cells mtui-cells_radio">
      <label class="mtui-cell mtui-check__label" for="mt1">
        <div class="mtui-cell__bd">单项选择1</div>
        <div class="mtui-cell__ft">
          <input type="radio" class="mtui-check" name="radio1" id="mt1" checked="checked">
          <span class="mtui-icon-checked"></span>
        </div>
      </label>
      <label class="mtui-cell mtui-check__label" for="mt2">
        <div class="mtui-cell__bd">单项选择2</div>
        <div class="mtui-cell__ft">
          <input type="radio" class="mtui-check" name="radio1" id="mt2">
          <span class="mtui-icon-checked"></span>
        </div>
      </label>
    </div>



    <div class="mtui-cells__title">多选列表项</div>
    <div class="mtui-cells mtui-cells_radio">
      <label class="mtui-cell mtui-check__label" for="mt1">
        <div class="mtui-cell__bd">多选选择1</div>
        <div class="mtui-cell__ft">
          <input type="radio" class="mtui-check" name="radio1" id="mt1" checked="checked">
          <span class="mtui-icon-checked"></span>
        </div>
      </label>
      <label class="mtui-cell mtui-check__label" for="mt2">
        <div class="mtui-cell__bd">多选选择2</div>
        <div class="mtui-cell__ft">
          <input type="radio" class="mtui-check" name="radio1" id="mt2">
          <span class="mtui-icon-checked"></span>
        </div>
      </label>
    </div>
  </div>
</template>
<style>
.title {
  margin: 0.2rem;
  color: #999;
  font-size: 0.32rem;
}
</style>
