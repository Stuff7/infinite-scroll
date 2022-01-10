import { RECTANGLE_SPACE, MAX_RECTANGLES, RECTANGLE_HEIGHT, RECTANGLE_MARGIN } from "./constants.js";

const styles = `
  .rectangle {
    height: ${RECTANGLE_HEIGHT}px;
  }
  .infinite-scroll > .rectangle:not(:last-child) {
    margin-bottom: ${RECTANGLE_MARGIN}px;
  }
  .infinite-scroll-content {
    min-height: ${RECTANGLE_SPACE * MAX_RECTANGLES};
  }
`;

const stylesheet = document.createElement('style');
stylesheet.type = 'text/css';
stylesheet.innerText = styles;
document.head.appendChild(stylesheet);
