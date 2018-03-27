import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import Search from './components/search.jsx';
import breweries from  './components/topList.js';
import { PageHeader } from 'react-bootstrap';

const styles = {
  PageHeader: {
    marginLeft: '20px',
    fontFamily: "'Rammetto One', cursive"
  },
  // App: {
  //   background: 'linear-gradient(to right, #ffffff, #abbaab)'
  // }
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: props.breweries,
      beerLists: [],
      loading: false
    };
  }

  componentDidMount() {
    $.ajax({
      url: '/items', 
      success: (data) => {
        this.setState({
          items: data.results
        });
        //console.log(data);
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  setBreweries(breweries) {
    this.setState({items: breweries});
  }

  setLoadState() {
    this.setState({loading: !this.state.loading});
  }

 
  render () {
    return (
      <div>
        <div>
          <PageHeader style={styles.PageHeader}>Beer-by <small>good beer, nearby</small></PageHeader>
          <Search setLoad={this.setLoadState.bind(this)} setBreweries={this.setBreweries.bind(this)} />
          <List items={this.state.items} loadState={this.state.loading}/>
        </div>
      </div>
    )
  }
}

// ReactDOM.render(<App breweries={breweries}/>, document.getElementById('app'));
// ReactDOM.render(<App breweries={['Breweries will be displayed here']}/>, document.getElementById('app'));
ReactDOM.render(<App style={styles.App} breweries={[{name: 'Breweries will display here'}]}/>, document.getElementById('app'));
