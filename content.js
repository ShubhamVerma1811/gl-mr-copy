const editBtn = document.querySelector('.js-issuable-edit');

const copyBtn = document.createElement('button');
copyBtn.classList.add(
  'gl-display-none',
  'gl-md-display-block',
  'btn',
  'gl-button',
  'btn-default',
  'btn-grouped',
  'js-issuable-edit'
);
copyBtn.textContent = 'Copy';
editBtn.insertAdjacentElement('beforebegin', copyBtn);

const container = document.querySelector('.detail-page-description');

const title = [...document.querySelectorAll('.title')].find(
  (el) => el.tagName === 'H2' || el.id === 'h2'
);

const anchor = document.createElement('a');
anchor.href = url;
container.appendChild(anchor);

console.log(container, anchor);

// anchor.innerHTML = title.innerHTML;
// console.log(title.parentNode);

// anchor

copyBtn.onclick = async () => {
  // const text = title.textContent;
  // const url = window.location.href;

  // // wrap title with anchor tag
  // title.console.dir(anchor);

  // await navigator.clipboard.writeText(text);

  copyBtn.textContent = 'Copied!';
  setTimeout(() => {
    copyBtn.textContent = 'Copy';
  }, 2000);
};
