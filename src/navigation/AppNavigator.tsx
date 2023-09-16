import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import AddProductScreen from '../screens/AppProductScreen';
import ProductInfo from '../screens/ProductInfoScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="ProductsList"
          component={HomeScreen}
          options={{
            title: 'Products List',
            headerStyle: {
              backgroundColor: '#eb5d3d',
              height: 110,
            },
            headerTitleStyle: {
              fontWeight: '500'
            }
          }}
        />
        <Stack.Screen
          name="AddProduct"
          component={AddProductScreen}
          options={{
            title: 'AddProduct',
            headerStyle: {
              backgroundColor: '#eb5d3d',
              height: 110,
              flex: 1,
            },
            headerTitleStyle: {
              fontWeight: '500'
            }
          }}
        />
        <Stack.Screen
          name="ProductInfo"
          component={ProductInfo}
          options={{
            title: 'Product Info',
            headerStyle: {
              backgroundColor: '#eb5d3d',
              height: 110,
             
            },
            headerTitleStyle: {
              fontWeight: '500'
            }
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
