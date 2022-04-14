import { Container } from "./styles";

export function TransactionsTable(){
  return(
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
        <tr>
            <td className="title">WebSite</td>
            <td className="deposit">R$1.2000</td>
            <td>Desenvolvimento</td>
            <td>22/03/2022</td>
          </tr>
          <tr>
            <td className="title">Trigg</td>
            <td className="withdraw">-R$350,00</td>
            <td>Cartão Crédito</td>
            <td>10/03/2022</td>
          </tr>
          <tr>
            <td className="title">Salário</td>
            <td className="withdraw">-R$2000</td>
            <td>Emprego</td>
            <td>05/03/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}