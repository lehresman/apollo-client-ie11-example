import * as React from "react";
import * as ReactDOM from "react-dom";
import { ApolloClient, gql, HttpLink, InMemoryCache } from "apollo-client-preset";
import fetch from 'unfetch';

let httpLink = new HttpLink({
  uri: 'https://graphql.brandfolder.com/graphql',
  fetch: fetch
});

let apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

class MyRoot extends React.Component {
  constructor() {
    super();
    this.state = {isInitialized: false};
  }

  componentWillMount() {
    this.initialize();
  }

  initialize() {
    let self = this;
    apolloClient.query({
      query: gql`query {viewer {id}}`
    }).then(function(response) {
      console.log(response);
      self.setState({isInitialized: true});
    });
  }

  render() {
    return (
      <div>
         Initialized: {this.state.isInitialized ? 'Yes' : 'No'}
      </div>
    );
  }
}

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render((
    <MyRoot/>
  ), document.getElementById("root"));
});

