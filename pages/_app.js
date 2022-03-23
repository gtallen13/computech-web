import 'bootswatch/dist/pulse/bootstrap.min.css'
import 'animate.css/animate.min.css'
import '../styles/globals.css'
import Layout from '../components/Layout'
function MyApp({ Component, pageProps }) {
  return(
    <Layout>
      <Component {...pageProps} /> 
    </Layout>
    ) 
    
}

export default MyApp
