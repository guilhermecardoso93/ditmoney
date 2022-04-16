import { createServer } from 'miragejs'
import { useState } from 'react'
import Modal from 'react-modal'

import { Dashboard } from './components/Dashboard'
import { Header } from './components/Header'
import { NewTransactionModal } from './components/NewTransactionModal'
import { GlobalStyle } from './styles/global'
import { TransactionsProvider } from './hooks/useTransactions'

createServer({
  routes () {
    this.namespace = 'api'

    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'Transaction1',
          amout: 400,
          category: 'Food',
          date: new Date()
        }
      ]
    })
  }
})

Modal.setAppElement('#root')

export function App () {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(
    false
  )

  function handleOpenNewTransactionModal () {
    setIsNewTransactionModalOpen(true)
  }

  function handleCloseNewTransactionModal () {
    setIsNewTransactionModalOpen(false)
  }

  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <GlobalStyle />
    </TransactionsProvider>
  )
}
