import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import Search from './components/search.jsx';
import breweries from  './components/topList.json';
import JumbotronInstance from './components/jumbotron.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: props.breweries,
      beerLists: []
    };
  }

  componentDidMount() {
    $.ajax({
      url: '/items', 
      success: (data) => {
        this.setState({
          items: data.results
        });
        console.log(data);
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  setBreweries(breweries) {
    this.setState({items: breweries});
    this.render();
  }

  render () {
    return (
      <div>
        <div>
          <h1>Beer-By</h1>
          <Search setBreweries={this.setBreweries.bind(this)}/>
          <List items={this.state.items}/>
        </div>
      </div>
    )
  }
}

// ReactDOM.render(<App breweries={breweries}/>, document.getElementById('app'));
// ReactDOM.render(<App breweries={['Breweries will be displayed here']}/>, document.getElementById('app'));
ReactDOM.render(<App breweries={['Breweries will display here']}/>, document.getElementById('app'));
