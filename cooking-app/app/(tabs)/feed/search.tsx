import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Pressable, ScrollView } from 'react-native';
import Content from "@/components/Content";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function SearchBar() {
    const [searchQuery, setSearchQuery] = useState('');
    return (
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="Search..."
            value={searchQuery}
            onChangeText={text => setSearchQuery(text)}
          />
        </View>
      );

}

    const styles = StyleSheet.create({
        container: {
          margin: 10,
        },
        input: {
          height: 40,
          borderColor: '#ccc',
          borderWidth: 1,
          borderRadius: 8,
          paddingHorizontal: 10,
          backgroundColor: 'white',
        },
      });
      
