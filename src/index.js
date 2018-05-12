import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './views/OriginalApp/index';
import CommentApp from './views/Comment/index';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<CommentApp />, document.getElementById('root'));
registerServiceWorker();
