// src/components/Transactions.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Transaction {
    id: number;
    description: string;
    amount: number;
    date: string;
    category: string;
}

const Transactions: React.FC = () => {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    // src/components/Transactions.tsx
    const handleDelete = (id: number) => {
        axios
            .delete(`http://localhost:5175/api/transactions/${id}`)
            .then(() => {
                // 从当前交易列表中删除已删除的交易
                setTransactions(transactions.filter(transaction => transaction.id !== id));
                alert('Transaction deleted successfully!');
            })
            .catch((error) => console.error('Error deleting transaction!', error));
    };


    // Fetch all transactions when the component mounts
    useEffect(() => {
        axios
            .get('http://localhost:5175/api/transactions')
            .then((response) => setTransactions(response.data))
            .catch((error) => console.error('There was an error fetching transactions!', error));
    }, []);

    return (
        <div>
            <h1>Transactions</h1>
            <table>
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Amount</th>
                        <th>Category</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((transaction) => (
                        <tr key={transaction.id}>
                            <td>{transaction.description}</td>
                            <td>${transaction.amount}</td>
                            <td>{transaction.category}</td>
                            <td>{new Date(transaction.date).toLocaleDateString()}</td>
                            <td>
                                <button onClick={() => handleDelete(transaction.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Transactions;
