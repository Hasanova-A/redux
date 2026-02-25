import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import './assets/css/style.css'
import App from './App.jsx'
import { ModeProvider } from './context/ModeProvider.jsx'
import { CartProvider } from 'react-use-cart'
import { Provider } from 'react-redux'
import { productAddAction } from './tools/actions/ProductAction.js'
import Store from './store/Store.js'
import { category, product } from './information/static.js'
import { categoryAddAction } from './tools/actions/categoryAction.js'

const store = Store();

store.subscribe(()=>{
    console.log(store.getState())
})

product.map(item=>(
    store.dispatch(productAddAction(item))
))


category.map(item=>(
    store.dispatch(categoryAddAction(item))
))



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
