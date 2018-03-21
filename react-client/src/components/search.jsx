import React from 'react';
import { Form, FormControl, Button, Grid, Col } from 'react-bootstrap';

const styles = {
  Form: {
    marginBottom: '30px'
  }
};

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
    this.props.setLoad();
    const url = process.env.NODE_ENV === 'production' ? `${process.env.IP}:${process.env.PORT}` : '127.0.0.1:3000';
    $.ajax({
      method: "POST",
      url: `http://${url}/breweries`,
      data: { 
        zipCode: this.state.zipCode,
        api: 'yelp' 
      }
    }).done ( reply => {
      console.log("searched with ", this.state.zipCode, " and reply is... ", typeof reply, reply);
      this.props.setBreweries(reply);
      this.props.setLoad();
    });
  }

  render() {
    return (
            <Grid>
              <Col xs={12} md={8}>
                <Form style={styles.Form} inline={true}>
                  {/*<h4>Search for breweries!</h4>*/}
                  <FormControl 
                    className="Zipcode-input"
                    placeholder="Enter zipcode"
                    value={this.state.terms} 
                    onChange={this.onChange}
                  />       
                  <Button bsStyle="warning" onClick={this.search.bind(this, 'yelp')}> Search</Button>
                </Form>
              </Col>
            </Grid>
        )
  }
}

export default Search;