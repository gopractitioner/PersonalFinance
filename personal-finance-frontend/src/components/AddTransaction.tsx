// src/components/AddTransaction.tsx
import React, { useState } from 'react';
import axios from 'axios';

const AddTransaction: React.FC = () => {
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState<number>(0);
    const [category, setCategory] = useState('');
    const [date, setDate] = useState('');

    const handleSubmit = () => {
        const newTransaction = { description, amount, category, date };
        axios
            .post('http://localhost:5175/api/transactions', newTransaction)
            .then(() => {
                alert('Transaction added successfully!');
                // 清除表单内容
                setDescription('');
                setAmount(0);
                setCategory('');
                setDate('');
            })
            .catch((error) => console.error('Error adding transaction!', error));
    };

    return (
        <div>
            <h2>Add New Transaction</h2>
            <form onSubmit={(e) => e.preventDefault()}>
                <input
                    type="text"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                />
                <input
                    type="text"
                    placeholder="Category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                />
                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
                <button type="button" onClick={handleSubmit}>
                    Add Transaction
                </button>
            </form>
        </div>
    );
};

export default AddTransaction;
