function get_android_version() {
  const ua = navigator.userAgent.toLowerCase();
  let version = null;
  if (ua.indexOf('android') > 0) {
    const reg = /android [\d._]+/gi;
    const v_info = ua.match(reg);
    version = (`${v_info}`).replace(/[^0-9|_.]/ig, '').replace(/_/ig, '.'); // 得到版本号4.2.2
    version = parseFloat(version.split('.')[0]);// 得到版本号第一位
  }
  return version;
}
function get_ios_version() {
  const ua = navigator.userAgent.toLowerCase();
  let version = null;
  if (ua.indexOf('like mac os x') > 0) {
    const reg = /os [\d._]+/gi;
    const v_info = ua.match(reg);
    version = (`${v_info}`).replace(/[^0-9|_.]/ig, '').replace(/_/ig, '.'); // 得到版本号9.3.2或者9.0
    version = parseFloat(version.split('.')[0]); // 得到版本号第一位
  }
  return version;
}
export {
  get_android_version,
  get_ios_version,
};
