import React from 'react';

const ListItem = (props) => (
  <tr>
    <td>{props.item.name || props.item} <br/>
     {props.item.city} {props.item.state}<br/><br/></td>
    <td>{props.item.avg_rating}</td>
    <td>{props.item.review_count}</td>
  </tr>
)

export default ListItem;