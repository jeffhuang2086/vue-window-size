export default class WindowSize {
  constructor({ defaults = { width: 800, height: 600 }, delay = 50 } = {}) {
    this._width = defaults.width;
    this._height = defaults.height;
    this._delay = delay;
    this._timer = null;
    if (typeof window === 'undefined') {
      return;
    }

    this.update();
    window.addEventListener('resize', this._handleResize.bind(this));
  }

  _handleResize() {
    clearTimeout(this._timer);
    this._timer = setTimeout(() => {
      this.update();
    }, this._delay);
  }

  get width() {
    return this._width;
  }

  get height() {
    return this._height;
  }

  update() {
    this._width = window.innerWidth;
    this._height = window.innerHeight;
  }

  setDelay(delay) {
    this._delay = delay;
  }
}
