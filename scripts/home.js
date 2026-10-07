// Progressive enhancement: native disclosure menus and links work without JS.
document.documentElement.classList.add('js');
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#site-navigation');
const groups = [...document.querySelectorAll('.nav-group')];
menuButton.hidden = false;

function closeNavigation(restoreFocus = false) {
  const wasOpen = navigation.classList.contains('is-open');
  navigation.classList.remove('is-open');
  menuButton.setAttribute('aria-expanded', 'false');
  groups.forEach(group => { group.open = false; });
  if (restoreFocus && wasOpen) menuButton.focus();
}

menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  navigation.classList.toggle('is-open', open);
  menuButton.setAttribute('aria-expanded', String(open));
  if (!open) groups.forEach(group => { group.open = false; });
});

groups.forEach(group => {
  group.addEventListener('toggle', () => {
    if (group.open) groups.forEach(other => { if (other !== group) other.open = false; });
  });
});
document.addEventListener('click', event => {
  if (!event.target.closest('.site-header')) closeNavigation();
});
document.addEventListener('keydown', event => {
  if (event.key !== 'Escape') return;
  const activeGroup = groups.find(group => group.open);
  if (activeGroup) {
    activeGroup.open = false;
    activeGroup.querySelector('summary').focus();
  } else closeNavigation(true);
});
navigation.addEventListener('click', event => {
  const link = event.target.closest('a');
  if (!link) return;
  closeNavigation();
  if (link.hash && link.origin === location.origin && link.pathname === location.pathname) {
    const target = document.getElementById(link.hash.slice(1));
    if (target) {
      target.setAttribute('tabindex', '-1');
      target.focus({ preventScroll: true });
    }
  }
});
const desktop = window.matchMedia('(min-width: 1200px)');
desktop.addEventListener('change', () => closeNavigation());
document.querySelector('#year').textContent = new Date().getFullYear();
