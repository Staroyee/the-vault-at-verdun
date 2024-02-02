import { Outlet } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import Footer from "./Components/Footer/Footer.jsx";
import "./App.css";

const client = new ApolloClient({
  cache: new InMemoryCache(),
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Outlet />
        <Footer />
      </ApolloProvider>
    </>
  );
}

export default App;
