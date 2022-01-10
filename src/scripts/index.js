import { $, onReady } from "./dom-utils.js";
import { calculateBounds } from './utils.js';

onReady(() => {
  const infiniteScroll = $('.infinite-scroll');
  const infiniteScrollContent = $('.infinite-scroll-content');

  /** @type {HTMLDivElement[]} */
  const rectangles = [];

  /** @type {() => void} */
  const renderRectangles = calculateBounds.bind(infiniteScroll, rectangles, infiniteScrollContent);

  infiniteScroll.addEventListener('scroll', renderRectangles);

  renderRectangles();
});
