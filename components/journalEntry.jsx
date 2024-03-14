import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const JournalEntryInput = ({ onEntrySubmit }) => {
  const [selectedPrompt, setSelectedPrompt] = useState('');
  const [entryText, setEntryText] = useState('');

  const prompts = [
    "List 6 things you're grateful for today.",
    "Describe a time this week you had a 'glimmer moment'.",
    "What are you proud of yourself for accomplishing today?",
  ];

  const handleTextChange = (text) => {
    setEntryText(text);
  };

  const handleSubmit = () => {
    // Handle submission of entryText and selectedPrompt
    onEntrySubmit(selectedPrompt, entryText);
    setEntryText(''); // Clear the input after submission
    setSelectedPrompt(''); // Reset selected prompt
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Select a Prompt:</Text>
      <Picker
        selectedValue={selectedPrompt}
        onValueChange={(itemValue, itemIndex) => setSelectedPrompt(itemValue)}
        style={styles.picker}>
        {prompts.map((prompt, index) => (
          <Picker.Item key={index} label={prompt} value={prompt} />
        ))}
      </Picker>
      <TextInput
        multiline
        placeholder="Your journal entry"
        style={styles.textInput}
        value={entryText}
        onChangeText={handleTextChange}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  label: {
    marginBottom: 10,
  },
  picker: {
    marginBottom: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
    height: 100,
    textAlignVertical: 'top', // Align text at the top on Android
  },
});

export default JournalEntryInput;