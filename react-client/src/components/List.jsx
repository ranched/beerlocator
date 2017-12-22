import React from 'react';
import ListItem from './ListItem.jsx';

const List = (props) => (
  <div>
    <h4> Here are some good breweries nearby </h4>
    Currently showing { props.items.data.length } breweries.
    <table>
      <tbody>
        { props.items.data.map(item => <ListItem item={item} key={item.id}/>)}
      </tbody>
    </table>
  </div>
)

export default List;