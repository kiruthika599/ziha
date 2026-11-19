document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.btn');
  const toast = document.getElementById('toast');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      toast.classList.add('show');
      setTimeout(() => {
        toast.classList.remove('show');
      }, 2000);
    });
  });
});
