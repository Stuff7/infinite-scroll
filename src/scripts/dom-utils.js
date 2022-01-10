/** @type {typeof document.querySelector} */
export const $ = document.querySelector.bind(document);

/** @type {typeof document.querySelectorAll} */
export const $$ = document.querySelectorAll.bind(document);

/** @param {(event: Event) => void} callback */
export function onReady(callback) {
  return document.addEventListener('readystatechange', (event) => {
    if (document.readyState === 'complete') {
      callback(event);
    }
  });
}

/**
 * @param {HTMLElement} parent
 * @param {HTMLElement[]} children
*/
export function renderChildren(parent, children) {
  parent.innerHTML = '';
  parent.append(...children);
}
