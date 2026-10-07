const partyForm = document.querySelector('#partyForm');
partyForm?.addEventListener('submit', event => {
  event.preventDefault();
  partyForm.querySelector('.form-success').hidden = false;
  partyForm.reset();
});
