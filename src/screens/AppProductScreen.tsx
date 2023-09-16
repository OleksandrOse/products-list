import React from 'react';
import { SafeAreaView } from 'react-native'
import { useAppDispatch } from '../app/hooks';
import { actions as productsActions } from '../features/products/Products';
import AddProductForm from '../components/AddProductForm';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/RootStackParamList';
import { ProductAdd } from '../types/ProductAdd';
import { createProduct } from '../api/products';
import { saveItem } from '../utils/asyncStorage';

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'AddProduct'>;
};

const AddProductScreen: React.FC<Props> = ({ navigation }) => {
  const dispatch = useAppDispatch();

  const handleAddProduct = (product: Omit<ProductAdd, 'id'>) => {
    console.log(product)
    const newProduct = {
      ...product,
      price: Number(product.price)
    }

    createProduct(newProduct)
      .then(result => {
        saveItem('products', result);
        dispatch(productsActions.add(result));
      })
      .catch(error => console.error('Error add product:', error))
      .finally(() => {
        navigation.goBack();
      });
  };

  return (
    <SafeAreaView>
      <AddProductForm onSubmit={handleAddProduct} />
    </SafeAreaView>
  );
};

export default AddProductScreen;
