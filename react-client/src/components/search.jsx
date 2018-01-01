import React from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';

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

  search(api) {
    {console.log(this.state.zipCode);}
    $.ajax({
      method: "POST",
      url: "http://127.0.0.1:3000/breweries",
      data: { 
        zipCode: this.state.zipCode,
        api: 'yelp' 
      }
    }).done ( reply => {
      console.log("searched with ", this.state.zipCode, " and reply is... ", typeof reply, reply);
      this.props.setBreweries(reply);
    });
  }

  render() {
    return (/* <form action="#" id="search" method="post">
          <input type="text" name="message" id="message"/>
          <input type="submit" name="submit" class="submit"/>
        </form>*/ 
          <Form inline={true}>
            Enter
            <h4>Search for breweries!</h4>
            <FormControl 
              className="Zipcode-input"
              placeholder="zip code"
              value={this.state.terms} 
              onChange={this.onChange}
            />       
            <Button onClick={this.search.bind(this, 'yelp')}> Search</Button>
          </Form>
        )
  }
}

export default Search;