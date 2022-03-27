import 'bootswatch/dist/lumen/bootstrap.min.css'
import 'animate.css/animate.min.css'
import '../styles/globals.css'
import Layout from '../components/Layout/Layout'
import {CartProvider} from 'react-use-cart'
function MyApp({ Component, pageProps }) {
  return(
    <CartProvider>
      <Layout>
        <div className='main-content'>
          <Component {...pageProps} /> 
        </div>
      </Layout>
    </CartProvider>
    ) 
    
}

export default MyApp
