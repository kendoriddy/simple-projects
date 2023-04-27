import '@/styles/globals.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Layout from '../../components/Layout';


export default function App({ Component, pageProps }) {
  return <Layout><Component {...pageProps} /></Layout>
}
