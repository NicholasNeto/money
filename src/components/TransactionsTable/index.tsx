import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";



interface ResponseData {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: Date
};


export function TransactionsTable() {

    const [data, setData] = useState<ResponseData[]>([])

    useEffect(() => {
        api.get('http://localhost:3000/api/transactions')
            .then(response => setData(response.data))
    }, [])


    const content = data.map(it => {
        const date = new Date(it.createdAt).toLocaleDateString() 

        return (
            <tr key={it.id} >
                <td>{it.title}</td>
                <td className={`${it.type === 'deposit' ? 'deposit': 'withdraw' }`}>{it.amount}</td>
                <td>{it.category}</td>
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