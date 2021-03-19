import React from 'react';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { GlobalStyle } from './styles/global'

import { createServer } from 'miragejs'


createServer({
  routes(){
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
  return (
    <>
      <Header />
      <Dashboard />
      <GlobalStyle />
    </>
  );
}
