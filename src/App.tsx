
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { NewTransactionModal } from './components/NewTransactionModal';
import { GlobalStyle } from './styles/global'

import { createServer } from 'miragejs'
import { useState } from 'react';


createServer({
  routes() {
    this.namespace = 'api'

    this.get('transactions', () => {
      return [
        {
          id: 1,
          title: 'Salario',
          amount: 400,
          type: 'deposit',
          category: 'Desenvolvimento',
          createdAt: new Date(),
        },
        {
          id: 2,
          title: 'Transaction 1',
          amount: 1000,
          type: 'withdraw',
          category: 'Food',
          createdAt: new Date(),
        },
        {
          id: 3,
          title: 'Desenvolvimento de Website',
          amount: 500,
          type: 'deposit',
          category: 'Work',
          createdAt: new Date(),
        },
        {
          id: 4,
          title: 'Aluguel',
          amount: 600,
          type: 'withdraw',
          category: 'Aluguel',
          createdAt: new Date(),
        },
      ]
    })

  }
})

export function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal} />
      <GlobalStyle />
    </>
  );
}
