import React from 'react';

const ListItem = (props) => (
  <tr>
    <td>{ props.item}</td>
    <td>{ props.item.averageRating }</td>
    <td>{ props.item.ratingsCount }</td>

  </tr>
)

export default ListItem;