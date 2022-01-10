import { MAX_RECTANGLES, RECTANGLE_SPACE } from "./constants.js";
import { renderChildren } from "./dom-utils.js";

/**
 * @param {HTMLElement[]} rectangles
 * @param {number} rectangleCount
*/
export function addRectangles(rectangles, rectangleCount) {
  for (let i = rectangles.length; i < rectangleCount; i++) {
    const rectangle = document.createElement('div');
    const position = i * RECTANGLE_SPACE;

    rectangle.className = 'rectangle';
    rectangle.style.top = `${position}px`;
    rectangle.style.background = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;

    rectangles.push(rectangle);
  }
  return rectangles;
}

/**
 * @this {HTMLElement}
 * @param {HTMLElement[]} rectangles
 * @param {HTMLElement} parent
*/
export function calculateBounds(rectangles, parent) {
  const top = this.scrollTop;
  const bottom = top + this.clientHeight;
  if (top < 0 || bottom < 0) {
    return;
  }
  const indexStart = Math.floor(top / RECTANGLE_SPACE);
  const indexEnd = Math.ceil(bottom / RECTANGLE_SPACE) + 1;

  if (rectangles.length < MAX_RECTANGLES && rectangles.length < indexEnd) {
    addRectangles(rectangles, indexEnd - 1);
  }

  renderChildren(parent, rectangles.slice(indexStart, indexEnd));
}
