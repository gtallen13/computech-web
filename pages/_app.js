import 'bootswatch/dist/pulse/bootstrap.min.css'
import 'animate.css/animate.min.css'
import '../styles/globals.css'
import Layout from '../components/Layout/Layout'
import {CartProvider} from 'react-use-cart'
import {UserContext} from '../utils/UserContext'
import {useMemo, useState} from 'react'
function MyApp({ Component, pageProps }) {
  const [user,setUser]= useState(null)
  const value = useMemo(()=>({user,setUser}),[user,setUser])
  return(
    <UserContext.Provider value={value}>
      <CartProvider>
        <Layout>
          <div className='main-content'>
            <Component {...pageProps} /> 
          </div>
        </Layout>
      </CartProvider>
    </UserContext.Provider>
    ) 
    
}

export default MyApp
