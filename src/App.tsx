import {FC} from 'react';
import './App.css';
import {Footer} from './pages/footer/Footer';
import {Header} from './pages/header/Header';
import {Main} from './pages/main/Main';
import {ThemeProvider} from './contexts';

const App: FC = () => {
  return (
    <ThemeProvider>
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
