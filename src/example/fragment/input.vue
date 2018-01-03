<template>
  <div id="input-view">
    <h2 class="title">Input</h2>
    <div class="mtui-cells__title">表单Input单项输入</div>
    <div class="mtui-cells mtui-cells_form">
      <div class="mtui-cell">
        <div class="mtui-cell__hd">
          <label class="mtui-label" for="input1">单项输入</label>
        </div>
        <div class="mtui-cell__bd">
          <input type="number" class="mtui-input" name="input1" placeholder="预设内容" id="input1">
        </div>
      </div>
    </div>


    <div class="mtui-cells__title">表单Input多项输入</div>
    <div class="mtui-cells mtui-cells_form">
      <div class="mtui-cell">
        <div class="mtui-cell__hd">
          <label class="mtui-label" for="input2">多项输入</label>
        </div>
        <div class="mtui-cell__bd">
          <input type="number" class="mtui-input" name="input2" placeholder="预设内容" id="input2">
        </div>
      </div>
      <div class="mtui-cell">
        <div class="mtui-cell__hd">
          <label class="mtui-label" for="input3">多项输入</label>
        </div>
        <div class="mtui-cell__bd">
          <input type="number" class="mtui-input" name="input3" placeholder="预设内容" id="input3">
        </div>
      </div>
      <div class="mtui-cell">
        <div class="mtui-cell__hd">
          <label class="mtui-label" for="input4">多项输入</label>
        </div>
        <div class="mtui-cell__bd">
          <input type="number" class="mtui-input" name="input4" placeholder="预设内容" id="input4">
        </div>
      </div>
    </div>


    <div class="mtui-cells__title">表单Input单项输入带验证码</div>
    <div class="mtui-cells mtui-cells_form">
      <div class="mtui-cell">
        <div class="mtui-cell__hd">
          <label class="mtui-label" for="input1">单项输入</label>
        </div>
        <div class="mtui-cell__bd">
          <input type="number" class="mtui-input" name="input1" placeholder="预设内容" id="input1">
        </div>
        <div class="mtui-cell__ft">
          <button class="mtui-vcode-btn">获取验证码</button>
        </div>
      </div>
    </div>

  </div>
</template>
