import React from 'react';
import ListItem from './ListItem.jsx';

const List = (props) => (
  <div>
    <h4> Here are some good breweries nearby </h4>
    Currently showing { props.items.data.length } breweries.
    <table>
      <tbody>
        <td>Brewery</td>
        <td>Avg. Beer Rating (out of 5)</td>
        <td>Ratings Count</td>
        { props.items.data.map(item => <ListItem item={item} key={item.id}/>)}
      </tbody>
    </table>
  </div>
)

export default List;