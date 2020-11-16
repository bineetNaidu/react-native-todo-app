import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button } from 'react-native';

const TodoForm = ({ handleNewTodo }) => {
  const [text, setText] = useState('');

  const handlePress = () => {
    handleNewTodo(text);
    setText('');
  };

  return (
    <View>
      <TextInput
        placeholder="new todo..."
        value={text}
        style={styles.input}
        onChangeText={(val) => setText(val)}
      />
      <Button color="coral" onPress={handlePress} title="Add Todo" />
    </View>
  );
};

export default TodoForm;

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});
