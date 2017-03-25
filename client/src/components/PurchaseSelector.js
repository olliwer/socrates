import React from 'react';

export default class PurchaseSelector extends React.Component {
    render() {
        return <div>
            <div className="row form-group">
                <div>
                    <input type="text" />
                </div>            
                <label>{this.props.label}</label>
            </div>
        </div>;
    }
}

