<template>
  <div id="list-view">
    <h2 class="lTitle">List</h2>
    <div class="mtui-cells__title">单选列表项</div>
    <div class="mtui-cells mtui-cells_radio">
      <label class="mtui-cell mtui-check__label" for="mt1">
        <div class="mtui-cell__bd">单项选择1</div>
        <div class="mtui-cell__ft">
          <input type="radio" class="mtui-check" name="radio1" id="mt1" checked="checked">
          <i class="mtui-icon-checked"></i>
        </div>
      </label>
      <label class="mtui-cell mtui-check__label" for="mt2">
        <div class="mtui-cell__bd">单项选择2</div>
        <div class="mtui-cell__ft">
          <input type="radio" class="mtui-check" name="radio1" id="mt2">
          <i class="mtui-icon-checked"></i>
        </div>
      </label>
    </div>



    <div class="mtui-cells__title">多选列表项</div>
    <div class="mtui-cells mtui-cells_checkbox">
      <label class="mtui-cell mtui-check__label" for="mt11">
        <div class="mtui-cell__hd">
          <input type="checkbox" class="mtui-check" name="checkbox1" id="mt11">
          <i class="mtui-icon-checked"></i>
        </div>
        <div class="mtui-cell__bd">多选选择1</div>
      </label>
      <label class="mtui-cell mtui-check__label" for="mt12">
        <div class="mtui-cell__hd">
          <input type="checkbox" class="mtui-check" name="checkbox2" id="mt12" checked>
          <i class="mtui-icon-checked"></i>
        </div>
        <div class="mtui-cell__bd">多选选择2</div>
      </label>
    </div>

    <div class="mtui-cells__title">跳转列表</div>
    <div class="mtui-cells">
      <a href="#" class="mtui-cell mtui-cell__link">
        <div class="mtui-cell__bd">单项跳转列表</div>
        <div class="mtui-cell__ft"></div>
      </a>
    </div>


    <div class="mtui-cells__title">带详细信息跳转列表</div>
    <div class="mtui-cells">
      <a href="#" class="mtui-cell mtui-cell__link">
        <div class="mtui-cell__bd">单项跳转列表</div>
        <div class="mtui-cell__ft"><p>详情信息</p></div>
      </a>
    </div>

    <div class="mtui-cells__title">带说明、跳转的列表项</div>
    <div class="mtui-cells">
      <a href="#" class="mtui-cell mtui-cell__link">
        <div class="mtui-cell__bd">
          <p>单项跳转列表</p>
          <span class="mtui-cells__tips">详细信息</span>
        </div>
        <div class="mtui-cell__ft"></div>
      </a>
    </div>

    <div class="mtui-cells__title">带图标、说明、跳转的列表项</div>
    <div class="mtui-cells">
      <a href="#" class="mtui-cell mtui-cell__link">
        <div class="mtui-cell__hd">
          <img src="../images/logo.png" alt="列表图标">
        </div>
        <div class="mtui-cell__bd">单项跳转列表</div>
        <div class="mtui-cell__ft">详情信息</div>
      </a>
    </div>


    <div class="mtui-cells__title">带图标、Tips、跳转的列表项</div>
    <div class="mtui-cells">
      <a href="#" class="mtui-cell mtui-cell__link">
        <div class="mtui-cell__hd">
          <img src="../images/logo.png" alt="列表图标" class="mtui-img_big">
        </div>
        <div class="mtui-cell__bd">
          <p>单项跳转列表</p>
          <span class="mtui-cells__tips">详细信息</span>
        </div>
        <div class="mtui-cell__ft"></div>
      </a>
    </div>

  </div>
</template>

