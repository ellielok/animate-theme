export const one = 1
export const two = 2


function toggleTheme() {
  // Fallback for browsers that don't support this API:
  if (!document.startViewTransition) {
    toggleClassName();
    return;
  }

  // With a View Transition:
  document.startViewTransition(() => toggleClassName());
}

function toggleClassName() {
  document.documentElement.classList.toggle('dark');
}

export { toggleTheme };