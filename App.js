import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Alert } from 'react-native';
import Header from './src/Header';
import Todo from './src/Todo';
import TodoForm from './src/TodoForm';

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'buy coffee', key: '1' },
    { text: 'create an app', key: '2' },
    { text: 'play on the switch', key: '3' },
  ]);

  const pressHandler = (key) => setTodos(todos.filter((t) => t.key !== key));

  const handleNewTodo = (text) => {
    if (text.length) {
      const newTodo = { text, key: (todos.length + 1).toString() };
      setTodos([newTodo, ...todos]);
    } else {
      Alert.alert('Opps!', 'Todo Field Cant Be Empty!', [
        {
          text: 'Understood',
          onPress: () => console.log('Alert Closed'),
        },
      ]);
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <TodoForm handleNewTodo={handleNewTodo} />
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <Todo item={item} pressHandler={pressHandler} />
            )}
          />
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});
