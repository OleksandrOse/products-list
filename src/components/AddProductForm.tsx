import React from 'react';
import { TextInput, Button, View, Text, StyleSheet, } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import { ProductAdd } from '../types/ProductAdd';
import { gStyle } from '../styles/style';

const validationSchema = yup.object().shape({
  title: yup.string().required('Title is required'),
  price: yup.number().required('Price is required').typeError('Price must be a number'),
  category: yup.string().required('Category is required'),
  description: yup.string().required('Description is required'),
  image: yup.string().required('Image is required')
});

type Props = {
  onSubmit: (product: Omit<ProductAdd, 'id'>) => void
}

const AddProductForm: React.FC<Props> = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ title: '', price: '', category: '', description: '', image: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        onSubmit(values);
        resetForm();
      }}
    >
      {({ handleChange, handleSubmit, values, errors }) => (
        <View style={styles.container}>
          <View style={gStyle.containerField}>
            <Text style={gStyle.label}>Product title:</Text>
            <TextInput
              style={gStyle.input}
              placeholder="Product Name"
              onChangeText={handleChange('title')}
              value={values.title}
            />
            {errors.title && <Text style={gStyle.error}>{errors.title}</Text>}
          </View>

          <View style={gStyle.containerField}>
            <Text style={gStyle.label}>Product price:</Text>
            <TextInput
              style={gStyle.input}
              placeholder="Product Price"
              onChangeText={handleChange('price')}
              value={values.price.toString()}
              keyboardType="numeric"
            />
            {errors.price && <Text style={gStyle.error}>{errors.price}</Text>}
          </View>

          <View style={gStyle.containerField}>
            <Text style={gStyle.label}>Product category:</Text>
            <TextInput
              style={gStyle.input}
              placeholder="Product Category"
              onChangeText={handleChange('category')}
              value={values.category}
            />
            {errors.category && <Text style={gStyle.error}>{errors.category}</Text>}
          </View>

          <View style={gStyle.containerField}>
            <Text style={gStyle.label}>Product Description:</Text>
            <TextInput
              style={gStyle.area}
              placeholder="Product Description"
              onChangeText={handleChange('description')}
              value={values.description}
              multiline = {true}
              numberOfLines = {4}
            />
            {errors.description && <Text style={gStyle.error}>{errors.description}</Text>}
          </View>

          <View style={gStyle.containerField}>
            <Text style={gStyle.label}>Product Image:</Text>
            <TextInput
              style={gStyle.input}
              placeholder="Product Image"
              onChangeText={handleChange('image')}
              value={values.image}
            />
            {errors.image && <Text style={gStyle.error}>{errors.description}</Text>}
          </View>

          <Button
            title="Add Product"
            onPress={() => handleSubmit()}
          />
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20
  }
});

export default AddProductForm;
