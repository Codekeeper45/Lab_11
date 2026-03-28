import React from 'react';
import { FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { products, Product } from '../data/products';

type RootStackParamList = {
  ProductList: undefined;
  ProductDetail: { product: Product };
};

type ProductListScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'ProductList'>;
};

export function ProductListScreen({ navigation }: ProductListScreenProps) {
  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => navigation.navigate('ProductDetail', { product: item })}
            style={styles.card}
          >
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.info}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.category}>{item.category}</Text>
              <Text style={styles.price}>${item.price.toFixed(2)}</Text>
            </View>
          </Pressable>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  listContent: {
    padding: 16,
    gap: 12
  },
  card: {
    backgroundColor: '#f6f6f6',
    borderRadius: 12,
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    height: 160,
    backgroundColor: '#e6e6e6'
  },
  info: {
    padding: 12
  },
  name: {
    fontSize: 18,
    fontWeight: '700',
    color: '#222'
  },
  category: {
    marginTop: 4,
    fontSize: 14,
    color: '#666'
  },
  price: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: '700',
    color: '#0066cc'
  }
});
