import Vue from 'vue';
import MTUI from '~/index';

Vue.use(MTUI); // 载入MTUI
const v = new Vue();

describe('Toast', () => {
  it('获取Toast元素', () => {
    const t = v.$Toast('测试用例1');
    expect(document.querySelector('.mtui-toast__content')).to.exist;
    expect(t.time).to.equal(2000);
    expect(t.callback).to.be.a('function');
    expect(t.content).to.equal('测试用例1');
  });
  it('测试显示的时间', () => {
    const t = v.$Toast('测试用例2', 4000);
    expect(t.time).to.equal(4000);
    expect(t.content).to.equal('测试用例2');
  });
  it('传入配置对象', (done) => {
    let isRunCallback = false;
    const t = v.$Toast('测试用例3', {
      time: 2000,
      className: 'afei',
      callback() {
        isRunCallback = true;
      },
    });
    expect(document.querySelector('.afei')).to.exist;
    expect(t.time).to.equal(2000);
    expect(t.content).to.equal('测试用例3');
    setTimeout(() => {
      expect(isRunCallback).to.be.true;
      expect(t.visible).to.be.false;
      done();
    }, 3000);
  });
  it('无传入参数应该报错',()=>{
    expect(v.$Toast.bind(v)).to.throw('$Toast必训传入一个字符串作为参数');
  })
  it('close方法',()=>{
    let t = v.$Toast('close方法');
    expect(t.visible).to.be.true;
    t.close();
    expect(t.visible).to.be.false;
  })
});
