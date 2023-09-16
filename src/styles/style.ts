import { StyleSheet } from "react-native";

export const gStyle = StyleSheet.create({
  main: {
    flex: 1,
    margin: 20
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    margin: 30,
  },
  title: {
    fontSize: 22,
    fontFamily: 'rt-bold',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
    color: '474747'
  },
  item: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginTop: 20,
    marginBottom: 20,
    paddingTop: 30,
    paddingBottom: 30,
    borderColor: 'blue',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 15,
  },
  image: {
    flex: 1,
    width: '80%',
    height: 200,
    resizeMode: 'stretch',
    borderRadius: 10,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingTop: 30,
    paddingBottom: 30,
  },
  priceContainer: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  price: {
    fontFamily: 'rt-light',
    fontSize: 16,
    color: '474747'
  },
  containerField: {
    marginBottom: 20,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 8,
    borderRadius: 15
  },
  area: {
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 8,
    borderRadius: 15
  },
  error: {
    color: 'red',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  text: {
    fontFamily: 'rt-light',
    fontSize: 16,
    marginTop: 20,
    color: '474747'
  },
  infoContainer: {
    marginBottom: 20,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 5,
  },
  info: {
    marginLeft: 5,
    fontFamily: 'rt-light',
    fontSize: 16,
  },
  descriptionContainer: {
    marginBottom: 200,
  },
  description: {
    fontSize: 16,
  },
})
