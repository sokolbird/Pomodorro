import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './Components/App';
import {initHotkeys} from './hotkeys.js'
import registerServiceWorker from './registerServiceWorker.js'

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
initHotkeys();




