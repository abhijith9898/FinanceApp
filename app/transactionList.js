import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const TransactionList = ({ transactions, navigation }) => {
  return (
    <FlatList
      data={transactions}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('TransactionDetail', { transaction: item })}>
          <View style={styles.card}>
            <Text style={styles.transactionName}>{item.name}</Text>
            <Text style={styles.transactionDetails}>${item.amount} - {item.date}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  transactionName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  transactionDetails: {
    fontSize: 14,
    color: '#555',
  },
});

export default TransactionList;
