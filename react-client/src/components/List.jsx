import React from 'react';
import ListItem from './ListItem.jsx';
import { Table, Grid, Row, Col } from 'react-bootstrap';

const styles = {
  h4: {
    fontFamily: "'Rammetto One', cursive"
  }
};

const List = (props) => {

  if(props.loadState){
    return (<img src="http://thinkfuture.com/wp-content/uploads/2013/10/loading_spinner.gif"/>)
  }


  return (
    <Grid>
      <Col xs={12} md={8}>
        <h4 style={styles.h4}> Here are some good breweries to check out... </h4>
        <Table striped bordered condensed hover>      
          <thead>
            <tr>
              <th>Brewery<br/><br/></th>
              <th>Avg. Beer Rating <br/>(out of 5)</th>
              <th>Ratings Count<br/><br/></th>
            </tr>
          </thead>  
          <tbody>  

            {Array.isArray(props.items) ? props.items.map((item, index) => <ListItem item={item} key={index}/>) : JSON.parse(props.items).map((item, index) => <ListItem item={item} key={index}/>)}
            
          </tbody>
        </Table>
      </Col>
    </Grid>
  )
}

export default List;