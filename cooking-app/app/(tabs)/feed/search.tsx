import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search for a recipe you'd like to make!</Text>
      <TextInput
        style={styles.input}
        placeholder="Search..."
        placeholderTextColor="#888"
        value={searchQuery}
        onChangeText={text => setSearchQuery(text)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    marginBottom: 12,
    fontWeight: '600',
    color: 'white',
    textAlign: 'center',
  },
  input: {
    height: 45,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    backgroundColor: 'white',
    fontSize: 16,
  },
});
