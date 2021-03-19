import { Container } from "./styles";

export function TransactionsTable () {
    return(
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
                    <tr>
                        <td>Desenvolvimento de WebSite</td>
                        <td className="deposit">R$12.000</td>
                        <td>Desenvolvimento</td>
                        <td>18/03/2021</td>
                    </tr>
                    <tr>
                        <td>Aluguel</td>
                        <td className="withdraw" > - R$1.800</td>
                        <td>Pago</td>
                        <td>18/03/2021</td>
                    </tr>
                   
                </tbody>
            </table>
        </Container>
    )
}