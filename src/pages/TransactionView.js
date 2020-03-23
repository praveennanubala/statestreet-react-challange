import React, { Component } from "react";

class TransactionsViewPage extends Component {
    render() {
        const { selectedTransaction } = this.props.location.state
        return (
            <div className="view-page">
                <h2>Transaction {selectedTransaction.account}</h2>
                <hr />
                <div>
                    <small> Account No: </small>
                    <span>{selectedTransaction.account} </span>
                </div>
                <div>
                    <small> Account Name: </small>
                    <span>{selectedTransaction.accountName} </span>
                </div>
                <div>
                    <small> Currency Code: </small>
                    <span>{selectedTransaction.currencyCode} </span>
                </div>
                <div>
                    <small> Amount: </small>
                    <span>{selectedTransaction.amount} </span>
                </div>
                <div>
                    <small> Transaction Type: </small>
                    <span>{selectedTransaction.transactionType} </span>
                </div>
            </div>
        )
    }

}

export default TransactionsViewPage;
