import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import ThemeButton from './Theme';

function App() {
  

  return (
    <>
      <div>
        <ThemeButton />
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Animate Theme</h1>
      <div className="card">
        <p>
          Traditional light and dark mode toggles usually change theme
          instantly. Colors jump from one palette to another without any
          transition. Animate Theme introduces the theme switching effect added
          in 2024. When users change modes, the page fades, slides, or softly
          blends into the new theme. This creates a smoother and more polished
          interaction. 
        </p>
        <p>
          Animate Theme introduces the theme switching effect added
          in 2024. When users change modes, the page fades, slides, or softly
          blends into the new theme. This creates a smoother and more polished
          interaction. Animate Theme is designed for developers who care about
          user experience. The transition is handled automatically and can be
          applied to any existing light or dark scheme without changing your
          design system.
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
