import Vue from 'vue';

const isServer = Vue.prototype.$isServer;
export const getOffset = function (el) {
  const box = el.getBoundingClientRect();
  const body = document.body;
  const clientTop = el.clientTop || body.clientTop || 0;
  const clientLeft = el.clientLeft || body.clientLeft || 0;
  const scrollTop = window.pageYOffset || el.scrollTop;
  const scrollLeft = window.pageXOffset || el.scrollLeft;
  return {
    top: (box.top + scrollTop) - clientTop,
    left: (box.left + scrollLeft) - clientLeft,
  };
};

export const transitionEnd = function (el, fun) {
  const arr = ['msTransitionEnd', 'mozTransitionEnd', 'oTransitionEnd', 'webkitTransitionEnd', 'transitionend'];
  const handler = {
    handleEvent(event, ...arg) {
      arr.forEach((eventName) => {
        el.removeEventListener(eventName, handler, false);
      });
      arg.unshift(event);
      fun.apply(el, arg);
    },
  };
  arr.forEach((eventName) => {
    el.addEventListener(eventName, handler, false);
  });
};


/* istanbul ignore next */
export const on = (function () {
  if (!isServer && document.addEventListener) {
    return function (element, event, handler) {
      if (element && event && handler) {
        element.addEventListener(event, handler, false);
      }
    };
  }
  return function (element, event, handler) {
    if (element && event && handler) {
      element.attachEvent(`on${event}`, handler);
    }
  };
}());

/* istanbul ignore next */
export const off = (function () {
  if (!isServer && document.removeEventListener) {
    return function (element, event, handler) {
      if (element && event) {
        element.removeEventListener(event, handler, false);
      }
    };
  }
  return function (element, event, handler) {
    if (element && event) {
      element.detachEvent(`on${event}`, handler);
    }
  };
}());

/* istanbul ignore next */
export const once = function (el, event, fn) {
  const listener = function (...arg) {
    if (fn) {
      fn.apply(this, arg);
    }
    off(el, event, listener);
  };
  on(el, event, listener);
};
