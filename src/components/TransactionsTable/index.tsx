import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";



interface Transaction {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
};


export function TransactionsTable() {

    const [transactions, setTransactions ] = useState<Transaction[]>([])

    useEffect(() => {
        api.get('http://localhost:3000/api/transactions')
            .then(response => setTransactions(response.data.transactions))
            .catch(error => console.log(error))
            // .then(data => console.log(data))
    }, [])

    
    

    const content = transactions.map(transaction => {
        const date = new Date(transaction.createdAt).toLocaleDateString() 
        return (
            <tr key={transaction.id} >
                <td>{transaction.title}</td>
                <td className={transaction.type}>{transaction.amount}</td>
                <td>{transaction.category}</td>
                <td>{date}</td>
            </tr>
        )
    })

    debugger
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Preço</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    {content}
                </tbody>
            </table>
        </Container>
    )
}