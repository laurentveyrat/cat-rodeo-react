import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Admin from './components/Admin/Admin'
import NotFound from './components/NotFound/NotFound'
import * as serviceWorker from './serviceWorker'
import { GraphQLClient, ClientContext } from 'graphql-hooks'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const client = new GraphQLClient({
  url: "https://graphql.datocms.com/",
  headers: {
    "Authorization": "37122a617c98c99150a1fbbb98071b",
  }
});

const Root = () => (

  <React.StrictMode>
    <ClientContext.Provider value={client}>
      <Router>
        <Switch>
          <Route exact path='/' component={App} />
          <Route path='/admin' component={Admin} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </ClientContext.Provider>
  </React.StrictMode>

  
)

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
