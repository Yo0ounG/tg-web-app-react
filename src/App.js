import './App.css';
import { useEffect } from 'react';

const TG = window.Telegram.WebApp;

function App() {
    useEffect( () => {
        TG.ready();
    }, [])
    const onClose = () => {
        TG.close();
    }

    return (
        <div className="App">
            work

            <button onClick={onClose}>Close</button>
        </div>
    );
}

export default App;
