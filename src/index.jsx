import ReactDOM from 'react-dom/client';

import App from './App.jsx';
import './index.css';
import { injectContentsquareScript } from '@contentsquare/tag-sdk';

injectContentsquareScript({
  siteId: "5291598",
  async: true, // Optional: Set to false to wait for script execution until after document parsing.
  defer: false // Optional: Set to true to defer script execution after document parsing.
});
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
