import React, { Component } from "react";

class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filters: {
                selectedAccountNames: [],
                selectedTransactionTypes: []
            }
        }
    }

    handleChange = (type, event) => {
        const { name, checked } = event.target;
        let selectedAccountNames = [...this.state.filters.selectedAccountNames];
        let selectedTransactionTypes = [...this.state.filters.selectedTransactionTypes];
        if (type === "accountName") {
            const index = selectedAccountNames.indexOf(name);
            if (index === -1) {
                selectedAccountNames.push(name);
            } else {
                selectedAccountNames.splice(index, 1);
            }
        } else {
            const index = selectedTransactionTypes.indexOf(name);
            if (index === -1) {
                selectedTransactionTypes.push(name);
            } else {
                selectedTransactionTypes.splice(index, 1);
            }
        }

        this.setState({
            filters: {
                selectedAccountNames,
                selectedTransactionTypes
            }
        }, () => this.props.handleFilterChange(this.state.filters));
    }

    render() {
        const { accountNames, transactionTypes } = this.props;
        return (
            <div className="filters">
                <h3>Filters</h3>
                <div>
                    <h4>Account Name</h4>
                    {accountNames.map((accountName, index) => (
                        <label key={index}><input type="checkbox" name={accountName} checked={this.state.filters.selectedAccountNames.indexOf(accountName) > -1} onChange={(event) => this.handleChange("accountName", event)} /> {accountName} </label>
                    ))}
                </div>
                <div>
                    <h4>Transaction Type</h4>
                    {transactionTypes.map((transactionType, index) => (
                        <label key={index}><input type="checkbox" name={transactionType} checked={this.state.filters.selectedTransactionTypes.indexOf(transactionType) > -1} onChange={(event) => this.handleChange("transactionType", event)} /> {transactionType} </label>
                    ))}
                </div>
            </div>
        )
    }
}

export default Filter;
