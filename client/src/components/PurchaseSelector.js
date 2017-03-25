import React from 'react';

export default class PurchaseSelector extends React.Component {
    render() {
        return <div>
            <div className="purchaseRow">
                <div>
                    <input type="text" />         
                	<label>{this.props.label}</label>
                </div>   
            </div>
        </div>;
    }
}

