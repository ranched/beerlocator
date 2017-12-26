import React from 'react';

class Search extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      zipCode: '78701'
    };
    this.onChange = this.onChange.bind(this);
    this.search = this.search.bind(this);
  }

  onChange(e) {
    this.setState({
      zipCode: e.target.value
    });
  }

  search() {
    $.ajax({
      method: "POST",
      url: "http://127.0.0.1:3000/breweries",
      data: { zipCode: this.state.zipCode }
    }).done ( reply => {
      console.log("searched with ", this.state.zipCode, " and reply is... ", typeof reply, reply);
      this.props.setBreweries(JSON.parse(reply));
    });
  }

  render() {
    return (/* <form action="#" id="search" method="post">
          <input type="text" name="message" id="message"/>
          <input type="submit" name="submit" class="submit"/>
        </form>*/ 
          <div>
            Enter
            <h4>Search for breweries!</h4>
            Enter your zipcode : <br/>(or leave blank for very rouugh current locaiton estimate) <br/> <input value={this.state.terms} onChange={this.onChange}/>       
            <button onClick={this.search}> Search </button>
          </div>
        )
  }
}

export default Search;