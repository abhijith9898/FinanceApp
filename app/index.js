import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import TransactionList from './transactionList';
import TransactionDetail from './transactionDetail';
import Summary from './summary';
import { StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';


const transactions = [
  { id: '1', name: 'Rent', amount: 500, date: '2024-10-01' },
  { id: '2', name: 'Utilities', amount: 70, date: '2024-10-05' },
  { id: '3', name: 'Groceries', amount: 100, date: '2024-10-10' },
  { id: '4', name: 'Gas', amount: 100, date: '2024-10-01' },
  { id: '5', name: 'Post Paid', amount: 40, date: '2024-10-05' },
  { id: '6', name: 'Transit', amount: 120, date: '2024-10-10' },
];

const Stack = createStackNavigator();

const TransactionStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#f4511e' }, headerTintColor: '#fff' }}>
      <Stack.Screen 
        name="TransactionsList" 
        options={{ title: 'Transaction List' }}
      >
        {(props) => <TransactionList {...props} transactions={transactions} />}
      </Stack.Screen>
      <Stack.Screen 
        name="TransactionDetail" 
        component={TransactionDetail} 
        options={{ title: 'Transaction Detail' }}   
      />
    </Stack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
       screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Transactions') {
            iconName = focused ? 'list-circle' : 'list-circle-outline';
          } else if (route.name === 'Summary') {
            iconName = focused ? 'pie-chart' : 'pie-chart-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#f4511e',
        tabBarInactiveTintColor: 'gray',
      })}
      >
        <Tab.Screen name="Transactions" component={TransactionStack} />
        <Tab.Screen 
          name="Summary" 
          options={{ title: 'Expense Summary' }}
        >
          {(props) => <Summary {...props} transactions={transactions} />}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
