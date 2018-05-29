const regexp = {
  isChinese: str => (!/^[\u2E80-\u9FFF]{2,4}$/g.test(str)),
  email: str => (!/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/g.test(str)),
  phone: str => (!/^[1][0-9]{10}$/g.test(str)),
  callPhone: str => (!/^(\d{3,4}-)?\d{7,8}$/.test(str)),
  bankNumber: str => (!/^([1-9]{1})(\d{15}|\d{18})$/.test(str.replace(/\s+/g, ''))),
  idCard: str => (!/^(\d{15}$)|(^\d{17}([0-9]|X))$/.test(str)),
  number: str => (!/^[1-9]\d*$/.test(str)),
  str: str => (!/^[A-Za-z\u4e00-\u9fa5]{0,}$/.test(str)),
  isPasswd: str => (!/^(w){6,20}$/.test(str)),
  isRegisterUserName: str => (!/^[a-zA-Z]{1}([a-zA-Z0-9]|[._]){4,19}$/.test(str)),
  isPostalCode: str => (!/^[1-9][0-9]{5}$/.test(str)),
  feifazifu: str => (!/[@#\$%\^&\*]+/g.test(str)),
};
export default regexp;
