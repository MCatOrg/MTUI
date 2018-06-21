// 自定义指令
export default{
  allSelect: { // 全选
    bind(el) {
      el.addEventListener('click', () => {
        el.select();
      });
    },
  },
};
