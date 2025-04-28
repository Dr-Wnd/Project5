function toggleItem(section) {
    const item = section.parentElement;
    item.classList.toggle('active');
    section.classList.toggle('rotate');
  }
  
  document.querySelectorAll('.section').forEach(section => {
    section.addEventListener('click', () => toggleItem(section));
  });