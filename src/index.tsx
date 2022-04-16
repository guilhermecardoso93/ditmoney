import React from 'react'
import ReactDOM from 'react-dom/client'
import { createServer, Model } from 'miragejs'
import { App } from './App'


createServer({
  models:{
    transaction: Model,
  },

  seeds(server){
    server.db.loadData({
      transactions:[
        {
          id:1,
          title:'Vivo',
          type:'withdraw',
          category:'Telefone',
          amount:39,
          createdAt: new Date('2022-04-15 18:05:56')
        },
        {
          id:2,
          title:'Salário',
          type:'deposit',
          category:'Salário',
          amount:2000,
          createdAt: new Date('2022-04-15 18:05:56')
        }
      ]
    })
  },


  routes(){
    this.namespace = 'api'

    this.get('/transactions', () =>{
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)
    })
  }
})

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
