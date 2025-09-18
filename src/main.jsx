import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AuthProvider from './store/ContextAuth/AuthProvider.jsx'
import AuthUsersProvider from './store/AuthUsers/AuthUsersProvider.jsx'
import CartProvider from './store/CartContext/CartProvider.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <AuthUsersProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </AuthUsersProvider>
    </AuthProvider>
  </StrictMode>,
)
