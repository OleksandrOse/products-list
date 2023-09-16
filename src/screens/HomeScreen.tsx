import React, { useEffect } from 'react';
import { Button, SafeAreaView } from 'react-native';
import { useAppDispatch, useAppSelector } from '../app/hooks';;
import ProductList from '../components/ProductList';
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../types/RootStackParamList';
import { getProducts } from '../api/products';
import { actions } from '../features/products/Products'
import { gStyle } from '../styles/style';
import { saveData, getData } from '../utils/asyncStorage';


type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'ProductsList'>;
};

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products.products);

  useEffect(() => {
    (async () => {
      try {
        const savedProducts = await getData('products');
        if (!savedProducts) {
          const fetchedProducts = await getProducts();
          if (fetchedProducts) {
            saveData('products', fetchedProducts);
            dispatch(actions.set(fetchedProducts));
          }
        } else {
          dispatch(actions.set(savedProducts));
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    })()
  }, []);

  return (
    <SafeAreaView style={gStyle.main}>
      <Button
        title="Add Product"
        onPress={() => navigation.navigate('AddProduct')}
      />
      
      <ProductList products={products} navigation={navigation} />
    </SafeAreaView>
  );
};

export default HomeScreen;
