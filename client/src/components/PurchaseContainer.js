import React from 'react';
import PurchaseSelector from './PurchaseSelector'

export default class PurchaseContainer extends React.Component {
  render() {
  	var rows = [];

	/*this.props.fields.forEach(function(field) {
        rows.push(<PurchaseSelector label={field.label}>)
    });*/

    return (
      <ul>
        <li><PurchaseSelector label="Name"/></li>
      	<li><PurchaseSelector label="Address"/></li>
      	<li><PurchaseSelector label="Zip"/></li>
      	<li><PurchaseSelector label="City"/></li>
      </ul>
    );
  }
}

