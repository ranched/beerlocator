import React from 'react';

const ListItem = (props) => (
  <tr>
    <td><a href={props.item.breweryUrl}>{props.item.name || props.item} </a><br/>
     {props.item.city} {props.item.state}</td>
    <td>{props.item.avg_rating}</td>
    <td>{props.item.review_count}</td>
  </tr>
)

export default ListItem;