import {FC} from 'react';
import './App.css';
import {Footer} from './pages/footer/Footer';
import {Header} from './pages/header/Header';
import {Main} from './pages/main/Main';
import {DarkModeProvider} from "./components/LightDarkMode/DarkModeContext";

const App: FC = () => {
    return (
        <DarkModeProvider>
            <div className="App">
                <Header/>
                <Main/>
                <Footer/>
            </div>
        </DarkModeProvider>
    );
};

export default App;
