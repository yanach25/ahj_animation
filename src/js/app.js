import 'bootstrap/dist/css/bootstrap.min.css';

const btn = document.querySelector('#collapseBtn');

btn.addEventListener('click', () => {
  let growDiv = document.getElementById('collapseExample');
  growDiv.classList.toggle('collapsed');
  if (growDiv.clientHeight) {
    growDiv.style.height = 0;
  } else {
    let wrapper = document.querySelector('.collapse-item');
    growDiv.style.height = `${wrapper.clientHeight}px`;
  }
});

const backdrop = document.querySelector('#backdrop');
const modal = document.querySelector('.modal');

const btnModal = document.querySelector('#btnModal');

btnModal.addEventListener('click', () => {
  backdrop.style.display = 'block';
  modal.style.display = 'block';
  btnModal.classList.add('fadeOut');
  setTimeout(() => {
    btnModal.style.display = 'none';
    btnModal.classList.remove('fadeOut');
  }, 200);
});

document.addEventListener('click', (event) => {
  if ('close' in event.target.dataset) {
    modal.classList.remove('fadeIn');
    modal.classList.add('fadeOut');
    backdrop.style.display = 'none';
    // modal.style.display = 'none';
    setTimeout(() => {
      modal.style.display = 'none';
      modal.classList.remove('fadeOut');
      modal.classList.add('fadeIn');
      btnModal.style.display = 'block';
    }, 180);
  }
});
