import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, FlatList, Text, TouchableOpacity, Image, View } from 'react-native';
import { Product } from '../types/Product';
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../types/RootStackParamList';
import { gStyle } from '../styles/style';

type Props = {
  products: Product[];
  navigation: StackNavigationProp<RootStackParamList, 'ProductsList'>;
};

const ProductList: React.FC<Props> = ({ products, navigation }) => {
  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={gStyle.item}
          onPress={() => navigation.navigate('ProductInfo', item)}
        >
          <Image
            style={gStyle.image}
            source={{ uri: item.image }}
          />
        <Text style={gStyle.title}>{item.title}</Text>
        <View style={gStyle.priceContainer}>
          <Text style={gStyle.price}>Price:</Text>
          <Text style={gStyle.price}>{item.price}</Text>
        </View>
        
      </TouchableOpacity>
      )}
    />
  );
};

export default ProductList;
