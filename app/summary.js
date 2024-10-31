import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Summary = ({ transactions }) => {
  const totalExpenses = transactions.reduce((sum, transaction) => sum + transaction.amount, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.total}>Total Expense: ${totalExpenses}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#ffffff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  total: {
    fontSize: 20,
    color: '#f4511e',
  },
});

export default Summary;
