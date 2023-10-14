import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import { JournalApp } from './JournalApp';
import { store } from './store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <JournalApp />
    </Provider>
  </React.StrictMode>,
)
