import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import * as themes from './theme/schema.json';
import { setToLS } from './utils/storage';

const root = ReactDOM.createRoot(document.getElementById('root'));
setToLS('all-themes', themes.default);
root.render(
  <App />
)

