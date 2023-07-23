import "@/styles/globals.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Provider } from "react-redux";
import Layout from "../../components/Layout";

export default function App({ Component, pageProps }) {
  return (
    // <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    // </Provider>
  );
}
