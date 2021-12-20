import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// ** Import Providers
import MaterialThemeProvider from "./providers/theme";

ReactDOM.render(
    <React.StrictMode>
        <MaterialThemeProvider>
            <App />
        </MaterialThemeProvider>
    </React.StrictMode>,
    document.getElementById('app-root')
);