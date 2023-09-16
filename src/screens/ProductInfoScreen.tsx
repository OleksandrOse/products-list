import React from 'react';
import { View, Text, SafeAreaView, Image } from 'react-native';
import { useAppDispatch, useAppSelector } from '../app/hooks';;
import { gStyle } from '../styles/style';

type Props = {
  route: any;
}

const ProductInfo: React.FC<Props> = ({ route }) => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products.products);

  return (
    <SafeAreaView style={gStyle.container}>
      <View style={gStyle.imageContainer}>
        <Image style={gStyle.image} source={{ uri: route.params.image }} />
      </View>
    
      <Text style={gStyle.title}>{route.params.title}</Text>
        <View style={gStyle.infoContainer}>
        <View style={gStyle.infoRow}>
          <Text style={gStyle.label}>Price:</Text>
          <Text style={gStyle.info}>{route.params.price}</Text>
        </View>
        <View style={gStyle.infoRow}>
          <Text style={gStyle.label}>Category:</Text>
          <Text style={gStyle.info}>{route.params.category}</Text>
        </View>
      </View>
      <View style={gStyle.descriptionContainer}>
        <Text style={gStyle.description}>{route.params.description}</Text>
      </View>
    </SafeAreaView>
  );
};

export default ProductInfo;
