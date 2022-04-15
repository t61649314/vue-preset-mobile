(((window, designWeight) => {
  const docEl = document.documentElement;
  const baseSize = 32;// 基础根元素大小，由于是二倍设计稿所以是16*2=32
  const maxSize = 20;// 最大根元素大小，20px大概对应了470px设备宽度，超出470px宽的设备一律使用20px。

  function setRemUnit() {
    const rem = (docEl.clientWidth / designWeight) * baseSize;
    docEl.style.fontSize = `${Math.min(rem, maxSize)}px`;
  }

  setRemUnit();

  // reset rem unit on page resize
  window.addEventListener('resize', setRemUnit);
  window.addEventListener('pageshow', (e) => {
    if (e.persisted) {
      setRemUnit();
    }
  });
})(window, 750));
