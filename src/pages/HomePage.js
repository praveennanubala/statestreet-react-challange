import React, { Component } from "react";
import { getTransactionsData } from "../services/service";
import Filter from "../components/Filter";

class HomePage extends Component {
    transactionTypes = [];
    accountNames = [];
    allTransactions = [];
    constructor(props) {
        super(props);
        this.state = {
            transactions: []
        }
    }

    async componentDidMount() {
        const response = await getTransactionsData();
        const { transactions } = response;
        transactions.forEach(element => {
            if (this.transactionTypes.indexOf(element.transactionType) === -1) {
                this.transactionTypes.push(element.transactionType);
            }
            if (this.accountNames.indexOf(element.accountName) === -1) {
                this.accountNames.push(element.accountName);
            }
        });
        this.allTransactions = transactions;
        this.setState({
            transactions
        });
    }

    handleFilterChange = (filters) => {
        let results = this.allTransactions;
        if (filters.selectedAccountNames.length > 0) {
            results = results.filter(x => filters.selectedAccountNames.indexOf(x.accountName) > -1);
        }
        if (filters.selectedTransactionTypes.length > 0) {
            results = results.filter(x => filters.selectedTransactionTypes.indexOf(x.transactionType) > -1);
        }
        this.setState({
            transactions: results
        });
    }

    handleTransactionClick = (event, selectedTransaction) => {
        event.preventDefault();
        this.props.history.push({
            pathname: `/transaction/view/${selectedTransaction.account}`,
            state: {
                selectedTransaction
            }
        })
    }

    render() {
        return (
            <div className="home-page">
                <h2 className="title">My Transactions</h2>
                <hr />
                <div>
                    <Filter accountNames={this.accountNames} transactionTypes={this.transactionTypes} handleFilterChange={this.handleFilterChange} />
                    <div className="table-container">
                        <table>
                            <thead>
                                <tr>
                                    <th>ACCOUNT NO.</th>
                                    <th>ACCOUNT NAME</th>
                                    <th>CURRENCY</th>
                                    <th>AMOUNT</th>
                                    <th>TRANSACTION TYPE</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.transactions.map((transaction) => (
                                    <tr key={transaction.account}>
                                        <td><a href="" onClick={(event) => this.handleTransactionClick(event, transaction)}>{transaction.account}</a></td>
                                        <td>{transaction.accountName}</td>
                                        <td>{transaction.currencyCode}</td>
                                        <td>{transaction.amount}</td>
                                        <td>{transaction.transactionType}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomePage;
