import React, { Component } from "react";
import { getTransactionsData } from "../services/service";

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            transactions: []
        }
    }

    async componentDidMount() {
        const response = await getTransactionsData();
        const { transactions } = response;
        this.setState({
            transactions
        });
    }

    render() {
        return (
            <div className="home-page">
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
                                <td>{transaction.account}</td>
                                <td>{transaction.accountName}</td>
                                <td>{transaction.currencyCode}</td>
                                <td>{transaction.amount}</td>
                                <td>{transaction.transactionType}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default HomePage;
