// Simple "jump" animation when the image is clicked.
// Assumes an element with id="jumpImg" exists.

const img = document.getElementById('jumpImg');
if (img) {
  img.addEventListener('click', () => {
    // add jump class by applying a transform, then remove after animation
    img.style.transition = 'transform 300ms cubic-bezier(.2,.8,.2,1)';
    img.style.transform = 'translateY(-40px) scale(1.05)';
    // small bounce back
    setTimeout(() => {
      img.style.transform = 'translateY(0) scale(1)';
    }, 300);
  });
}
