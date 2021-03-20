
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { NewTransactionModal } from './components/NewTransactionModal';
import { GlobalStyle } from './styles/global'

import { createServer, Model,  } from 'miragejs'
import { useState } from 'react';


createServer({

  models: {
    transactions: Model
  },

  seeds(server){
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Freelance de website",
          type: 'deposit',
          category: 'Dev',
          amount: 6000,
          createdAt: new Date('2021-02-12'),
        },
        {
          id: 2,
          title: "Aluguel",
          type: 'withdraw',
          category: 'Casa',
          amount: 1100,
          createdAt: new Date('2021-02-15'),
        }
      ]
    })
  },

  routes() {
    this.namespace = 'api'

    this.get('transactions', () => {
      return this.schema.all('transactions')
    })

    this.post('transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)
      return schema.create('transactions', data)      
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
