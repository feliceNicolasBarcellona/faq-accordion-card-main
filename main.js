const accordionButtons = document.querySelectorAll('.accordion');
const arrow = document.querySelectorAll('.arrow')

for (let i = 0; i < accordionButtons.length; i++) {
  accordionButtons[i].addEventListener('click', () => {
    const panel = accordionButtons[i].nextElementSibling;
    for (let j = 0; j < accordionButtons.length; j++) {
      const otherPanel = accordionButtons[j].nextElementSibling;
      if (j !== i) {
        otherPanel.style.display = 'none';
        accordionButtons[j].style.fontWeight = '';
        arrow[j].style.rotate = ''
      }
    }
    if (panel.style.display === 'block') {
      panel.style.display = 'none';
      accordionButtons[i].style.fontWeight = '';
      arrow[i].style.rotate = ''
    } else {
      panel.style.display = 'block';
      accordionButtons[i].style.fontWeight = '700';
      arrow[i].style.rotate = '180deg'
    }
  });
}
