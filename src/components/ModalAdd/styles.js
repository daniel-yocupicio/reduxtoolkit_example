import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  containertransparent: {
    backgroundColor: '#00000070',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  whiteModal: {
    backgroundColor: '#FFFFFF',
    width: '80%',
    borderRadius: 1,
    alignSelf: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    alignSelf: 'center',
    marginVertical: 10,
  },
  input: {
    height: 50,
    width: '70%',
    fontSize: 16,
    fontWeight: '500',
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
    alignSelf: 'center',
    padding: 0,
    marginBottom: 10,
  },
  btn: {
    backgroundColor: '#2ECC71',
    height: 50,
    width: '70%',
    alignSelf: 'center',
    marginBottom: 15,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  btnText: {
    color: '#ffffff',
    fontSize: 17,
    fontWeight: '700',
  },
});

export default styles;
