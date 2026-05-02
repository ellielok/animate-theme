export const one = 1
export const two = 2


function toggleClassName() {
  document.documentElement.classList.toggle('dark');
}

function toggleTheme() {
  if (!document.startViewTransition) {
    toggleClassName();
    return;
  }
  document.startViewTransition(() => toggleClassName());
}

function toggleThemeSlide() {
  if (!document.startViewTransition) {
    toggleClassName();
    return;
  }
  document.documentElement.classList.add('theme-slide');
  const transition = document.startViewTransition(() => toggleClassName());
  transition.finished.then(() => {
    document.documentElement.classList.remove('theme-slide');
  });
}

function toggleThemeCircle() {
  if (!document.startViewTransition) {
    toggleClassName();
    return;
  }
  document.documentElement.classList.add('theme-circle');
  const transition = document.startViewTransition(() => toggleClassName());
  transition.finished.then(() => {
    document.documentElement.classList.remove('theme-circle');
  });
}

export { toggleTheme, toggleThemeSlide, toggleThemeCircle };