import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import breweries from  './components/topList.json';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: props.breweries
    };
  }

  componentDidMount() {
    $.ajax({
      url: '/items', 
      success: (data) => {
        this.setState({
          items: props.breweries
        });
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  render () {
    return (
      <div>
        <div>
          <h1>Beer-By</h1>

          <List items={this.state.items}/>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App breweries={breweries}/>, document.getElementById('app'));
