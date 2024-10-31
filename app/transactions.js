// screens/TransactionsStack.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TransactionsListScreen from './transactionList';
import TransactionDetailScreen from './transactionDetail';

const Stack = createStackNavigator();

export default function TransactionsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="TransactionsList" component={TransactionsListScreen} options={{ title: 'Transactions' }} />
      <Stack.Screen name="TransactionDetail" component={TransactionDetailScreen} options={{ title: 'Transaction Detail' }} />
    </Stack.Navigator>
  );
}
