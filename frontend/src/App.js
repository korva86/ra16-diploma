import React from 'react';
import {Provider} from 'react-redux'
import {Router, Switch, Route} from 'react-router-dom'
import store, {history} from "./redux/store";

import About from "./pages/About";
import Contacts from "./pages/Contacts";
import NotFound from "./pages/404";
import Main from "./pages/Main";
import CatalogPage from "./pages/CatalogPage";
import ProductPage from "./pages/ProductPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CartPage from "./pages/CartPage";

function App() {
  return (
      <Provider store={store}>
          <Router history={history}>
              <Header/>
              <Switch>
                  <Route exact path="/">
                      <Main/>
                  </Route>
                  <Route exact path="/about">
                      <About/>
                  </Route>
                  <Route exact path="/contacts">
                      <Contacts/>
                  </Route>
                  <Route exact path="/catalog">
                      <CatalogPage/>
                  </Route>
                  <Route exact path="/catalog/:id">
                      <ProductPage/>
                  </Route>
                  <Route exact path="/cart">
                      <CartPage/>
                  </Route>
                  <Route>
                      <NotFound/>
                  </Route>
              </Switch>
              <Footer/>
          </Router>
      </Provider>
  );
}

export default App;
