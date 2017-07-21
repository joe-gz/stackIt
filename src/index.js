import React from 'react';
import ReactDOM from 'react-dom';
import './styles/App.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

injectTapEventPlugin();

ReactDOM.render(
  <MuiThemeProvider>
    <App />
  </MuiThemeProvider>, document.getElementById('root'));
registerServiceWorker();
