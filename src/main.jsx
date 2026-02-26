import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import './assets/css/style.css'
import App from './App.jsx'
import { ModeProvider } from './context/ModeProvider.jsx'
import { CartProvider } from 'react-use-cart'
import { Provider } from 'react-redux'
import Store from './store/Store.js'

const store = Store();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
        <ModeProvider>
          <Provider store={store}>
            <App />
          </Provider>
        </ModeProvider>
    </CartProvider>
  </StrictMode>,
)