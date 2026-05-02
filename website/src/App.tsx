import './App.css';
import Header from './Header';
import Footer from './Footer';
import ThemeButton from './Theme';
import ThemeSlideButton from './ThemeSlide';
import ThemeCircleButton from './ThemeCircle';

function App() {
  return (
    <div className="site-layout">
      <Header />
      <main className="site-main">
        <h1>Animate Theme</h1>
        <div className="theme-buttons-row">
          <ThemeButton />
          <ThemeSlideButton />
          <ThemeCircleButton />
        </div>
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
            Animate Theme is designed for developers who care about user
            experience. The transition is handled automatically and can be
            applied to any existing light or dark scheme without changing your
            design system.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
