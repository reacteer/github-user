import { Provider } from "react-redux";
import store from "../redux/store";

import "../styles/globals.css";
import Nav from "../components/Nav";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <div>
        <Nav />
        <main style={{ padding: "20px" }}>
          <Component {...pageProps} />
        </main>
      </div>
    </Provider>
  );
}

export default MyApp;
