import React from 'react';
import ListItem from './ListItem.jsx';
import JumbotronInstance from './jumbotron.jsx';
import AccordionInstance from './accordian.jsx';

const List = (props) => (
  <div>
{/*    <JumbotronInstance />
    <AccordionInstance />*/}
    <h4> Here are some good breweries nearby </h4>
  {/*Currently showing { props.items.data.length } breweries.*/}
    <table>
      <tbody>
        <tr>
          <td>Brewery</td>
          <td>Avg. Beer Rating (out of 5)</td>
          <td>Ratings Count</td>
        </tr>
        {props.items.map((item, index) => <ListItem item={item} key={index}/>)}
      </tbody>
    </table>
  </div>
)

export default List;