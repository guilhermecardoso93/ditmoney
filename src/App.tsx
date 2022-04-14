import { createServer} from 'miragejs'
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyle } from "./styles/global";

createServer({
  routes(){
    this.namespace = 'api'

    this.get('/transactions', ()=>{
      return[
        {
          id: 1,
          title:'Transaction1',
          amout:400,
          category:'Food',
          date: new Date()
        }
      ]
    })
  }
})

export function App() {
  return (
    <>
      <Header/>
      <Dashboard/>
      <GlobalStyle/>
    </>
    
  );
}

