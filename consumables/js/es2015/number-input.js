import '../polyfills/array-from';
import '../polyfills/custom-event';

export default class NumberInput {
  /**
   * Number input UI.
   * @implements Component
   * @param {HTMLElement} element The element working as a number input UI.
   */
  constructor(element, options = {}) {
    if (!element || element.nodeType !== Node.ELEMENT_NODE) {
      throw new TypeError('DOM element should be given to initialize this widget.');
    }

    this.options = options;
    this.options.ie = this.options.ie || 'ActiveXObject' in window;

    this.element = element;
    this.constructor.components.set(this.element, this);
    // Broken DOM tree is seen with up/down arrows <svg> in IE, which breaks event delegation.
    // Also <svg> does not seems to have `Element.classList`.
    this.element.querySelector('.bx--number__arrow--up').addEventListener('click', (event) => this.handleClick(event));
    this.element.querySelector('.bx--number__arrow--down').addEventListener('click', (event) => this.handleClick(event));
  }

  /**
   * Instantiates number input UI of the given element.
   * @param {HTMLElement} element The element.
   */
  static create(element) {
    return this.components.get(element) || new this(element);
  }

  /**
   * Instantiates number input UI in the given node.
   * If the given element indicates that it's an number input UI (having `data-numberinput` attribute), instantiates it.
   * Otherwise, instantiates number input UIs by searching for number input UIs in the given node.
   * @param {Node} target The DOM node to instantiate number input UIs in. Should be a document or an element.
   */
  static init(target = document) {
    if (target.nodeType !== Node.ELEMENT_NODE && target.nodeType !== Node.DOCUMENT_NODE) {
      throw new Error('DOM document or DOM element should be given to search for and initialize this widget.');
    }
    if (target.nodeType === Node.ELEMENT_NODE && target.dataset.numberinput !== undefined) {
      this.create(target);
    } else {
      [... target.querySelectorAll('[data-numberinput]')].forEach(element => this.create(element));
    }
  }

  /**
   * Increase/decrease number by clicking on up/down icons.
   * @param {Event} event The event triggering this method.
   */
  handleClick(event) {
    const state = event.currentTarget.classList;
    const numberInput = this.element.querySelector('.bx--number__input');

    if (state.contains('bx--number__arrow--icon-up')) {
      if (this.options.ie) {
        ++numberInput.value;
      } else {
        numberInput.stepUp();
      }
    } else if (state.contains('bx--number__arrow--icon-down')) {
      if (this.options.ie) {
        if (numberInput.value > 0) {
          --numberInput.value;
        }
      } else {
        numberInput.stepDown();
      }
    } else {
      return;
    }

    // Programmatic change in value (including `stepUp()`/`stepDown()`) won't fire change event
    numberInput.dispatchEvent(new CustomEvent('change', {
      bubbles: true,
      cancelable: false,
    }));
  }

  release() {
    this.constructor.components.delete(this.element);
  }
}

/**
 * The map associating DOM element and number input UI instance.
 * @type {WeakMap}
 */
NumberInput.components = new WeakMap();
