import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import { JournalApp } from './JournalApp';
import { store } from './store';
import { AppTheme } from './theme/AppTheme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <AppTheme>
        <JournalApp />
      </AppTheme>
    </Provider>
  </React.StrictMode>,
)
