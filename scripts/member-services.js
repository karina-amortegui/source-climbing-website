document.querySelectorAll('.service-card').forEach(card => card.addEventListener('click', () => {
  document.querySelectorAll('.service-card').forEach(item => item.classList.remove('selected'));
  card.classList.add('selected');
  document.querySelector('#selected-request').textContent = card.dataset.label;
}));
