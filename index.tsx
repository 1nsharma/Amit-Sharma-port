import React from 'react';
import ReactDOM from 'react-dom/client';
// FIX: Changed react-router-dom import to a wildcard import to address issue where 'BrowserRouter' was not found as an exported member.
import * as ReactRouterDom from 'react-router-dom';
import App from './App';
import { I18nProvider } from './i18n';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <ReactRouterDom.BrowserRouter>
      <I18nProvider>
        <App />
      </I18nProvider>
    </ReactRouterDom.BrowserRouter>
  </React.StrictMode>
);
