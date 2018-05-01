import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './fonts/InterUI/inter-ui.css';
import './index.css';
import Tanzbar from './components/index';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Tanzbar />, document.getElementById('root'));
registerServiceWorker();
