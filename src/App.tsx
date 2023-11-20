import {FC} from 'react';
import './App.css';
import {Footer} from './pages/footer/Footer';
import {Header} from './pages/header/Header';
import {Main} from './pages/main/Main';
import {AuthenticationProvider, ThemeProvider} from './contexts';

const App: FC = () => {
  return (
    <ThemeProvider>
      <AuthenticationProvider>
        <div className="App">
          <Header />
          <Main />
          <Footer />
        </div>
      </AuthenticationProvider>
    </ThemeProvider>
  );
};

export default App;
