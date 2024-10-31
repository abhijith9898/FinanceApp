import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TransactionDetail = ({ route }) => {
  const { transaction } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{transaction.name}</Text>
      <Text style={styles.amount}>Amount: ${transaction.amount}</Text>
      <Text style={styles.date}>Date: {transaction.date}</Text>
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
  amount: {
    fontSize: 18,
    marginBottom: 5,
    color: '#f4511e',
  },
  date: {
    fontSize: 16,
    color: '#555',
  },
});

export default TransactionDetail;
