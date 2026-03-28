import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Profile Card</Text>
        <Text style={styles.name}>Name: Emir Yapparov</Text>
        <Text style={styles.role}>Role: Frontend Student</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>Contact Section</Text>
        <Text style={styles.item}>Email: emir@example.com</Text>
        <Text style={styles.item}>Phone: +7 700 000 0000</Text>
        <Text style={styles.item}>City: Almaty</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
    gap: 16
  },
  card: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 14
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 8
  },
  name: {
    fontSize: 16,
    marginBottom: 4
  },
  role: {
    fontSize: 16
  },
  item: {
    fontSize: 16,
    marginBottom: 4
  }
});
