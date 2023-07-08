import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import { BrowserRouter } from 'react-router-dom'
import { UserContextProvider } from './contexts/user.context.jsx'
import { CartContextProvider } from './contexts/cart.context.jsx'
import { CategoriesContextProvider } from './contexts/categories.context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserContextProvider>
        <CartContextProvider>
          <CategoriesContextProvider>
            <App />
          </CategoriesContextProvider>
        </CartContextProvider>
      </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
