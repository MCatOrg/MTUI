import Vue from 'vue';
import Router from 'vue-router';

let RouterArr = [
  {name: 'home', path: '/', page: 'index', title: '首页', hide: true},
  {name: 'base', path: '/base', page: 'component', title: '基础组件', children: [
    {name: 'button', path: '/button', page: 'button', title: '按钮(将废弃)'},
    {name: 'mtButton', path: '/mtButton', page: 'mtButton', title: '新按钮'},
    {name: 'cell', path: '/cell', page: 'cell', title: '单元'},
    {name: 'spinner', path: '/spinner', page: 'spinner', title: '等待动画'},
    {name: 'bigPicture', path: '/bigPicture', page: 'bigPicture', title: '图片放大'},
    {name: 'loading', path: '/loading', page: 'loading', title: '加载动画'},
    {name: 'touchRipple', path: '/touchRipple', page: 'touchRipple', title: '涟漪'},
    {name: 'nothing', path: '/nothing', page: 'nothing', title: '缺省页'},
    {name: 'icon', path: '/icon', page: 'icon', title: '图标'},
  ]},
  {name: 'action', path: '/action', page: 'component', title: '交互组件', children: [
    {name: 'actionsheet', path: '/actionsheet', page: 'action-sheet', title: '操作弹层'},
    {name: 'loadmore', path: '/loadmore', page: 'load-more', title: '加载更多'},
    {name: 'messageBox', path: '/messageBox', page: 'message-box', title: '对话框'},
    {name: 'swipe', path: '/swipe', page: 'swipe', title: '走马灯'},
    {name: 'accordion', path: '/accordion', page: 'accordion', title: '折叠面板'},
    {name: 'picker', path: '/picker', page: 'picker', title: '选择器'},
    {name: 'datePicker', path: '/datePicker', page: 'datePicker', title: '时间选择器'},
    {name: 'tabbar', path: '/tabbar', page: 'tabbar', title: '导航'},
    {name: 'tabs', path: '/tabs', page: 'tabs', title: '标签栏'},
    {name: 'popup', path: '/popup', page: 'popup', title: '弹窗'},
    {name: 'toast', path: '/toast', page: 'toast', title: '提示'},
    {name: 'directives', path: '/directives', page: 'directives', title: '自定义指令'},
  ]},
  {name: 'form', path: '/form', page: 'component', title: '表单组件', children: [
    {name: 'radio', path: '/radio', page: 'radio', title: '单选'},
    {name: 'checkList', path: '/checkList', page: 'checklist', title: '复选'},
    {name: 'input', path: '/input', page: 'input', title: '表单'},
    {name: 'slider', path: '/slider', page: 'slider', title: '滑块'},
    {name: 'uploader', path: '/uploader', page: 'uploader', title: '图片上传'},
    {name: 'stepper', path: '/stepper', page: 'stepper', title: '计数器'},
    {name: 'switch', path: '/switch', page: 'switch', title: '开关'},
    {name: 'search', path: '/search', page: 'search', title: '搜索'},
  ]},
  {name: 'else', path: '/else', page: 'component', title: '辅助组件', children: [
    {name: 'grid', path: '/grid', page: 'grid', title: '宫格'},
    {name: 'steps', path: '/steps', page: 'steps', title: '步骤器'},
    {name: 'numberKeyboard', path: '/numberKeyboard', page: 'numberKeyboard', title: '数字虚拟键盘'},
    {name: 'codebox', path: '/codebox', page: 'codebox', title: '虚拟键盘'},
    {name: 'tabContainer', path: '/tabContainer', page: 'tab-container', title: '拖动切换'},
  ]}
]


function SetRouter(arr){
    let result = []
    for(let i of arr){
        let item = {
            path: i.path,
            name: i.name,
            meta: {
                title: i.title,
                hide: i.hide,
            },
            component: () => import(`../pages/${i.page}.vue`),
        }
        if(i.children && i.children.length){
            item.children = SetRouter(i.children)
        }
        result.push(item)
    }
    return result
}

const router = new Router({
    routes: SetRouter(RouterArr)
});

Vue.use(Router);

export default router;
