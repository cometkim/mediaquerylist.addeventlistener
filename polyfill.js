(function (w) {
  if (!w.MediaQueryList) return;

  w.MediaQueryList.prototype.addEventListener = w.MediaQueryList.prototype.addEventListener ||
    function (e /* change */, l) {
      w.MediaQueryList.prototype.addListener.call(this, l);
    };

  w.MediaQueryList.prototype.removeEventListener = w.MediaQueryList.prototype.removeEventListener ||
    function (e /* change */, l) {
      w.MediaQueryList.prototype.removeListener.call(this, l);
    }
})(window);
