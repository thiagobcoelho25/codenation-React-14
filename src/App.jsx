import React from 'react';

import './App.scss';
import Topbar from './components/Topbar';
import Filters from './components/Filters';
import Contacts from './components/Contacts';
import arrayJSON from './__tests__/mock/contacts.json';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      query: '',
      users: [],
      sortBy: "name",
      orderBy: "down"
    };
  
  }

  handleQuery = (query) => {
    this.setState({ query: query });
  }
  
  handleButton = (oB) => {
    this.setState({ sortBy: oB});
    this.setState((state) => ({
      orderBy: this.state.sortBy !== oB ? "down" : this.state.orderBy === "down" ? "up" : "down"
    }))
  }

  componentDidMount() {
    /*fetch("https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts")
      .then(res => res.json())
      .then(users => this.setState({
        users: users,
      }))
      .catch((err) => console.error(err))
      */
     this.setState({
      users: arrayJSON
     })
  }

  
  render() {
    return (
      <div className='app'
      data-testid="app">
        <Topbar />
        <Filters  onSortByChange={this.handleButton}
                  onFilterTextChange={this.handleQuery}
                  sortBy={this.state.sortBy}
                  orderBy={this.state.orderBy}/>
        <Contacts data={this.state} />
      </div>
    )
  }
}

export default App;
