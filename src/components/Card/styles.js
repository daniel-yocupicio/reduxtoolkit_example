import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#ffffff',
    elevation: 1,
    marginVertical: 10,
    paddingVertical: 20,
  },
  actions: {
    display: 'flex',
    flexDirection: 'row',
    width: 160,
    justifyContent: 'space-between',
    position: 'absolute',
    top: 5,
    right: 5,
  },
  edit: {
    backgroundColor: '#2ECC71',
    borderRadius: 5,
    width: 70,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  editText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '700',
  },
  delete: {
    backgroundColor: '#E74C3C',
    borderRadius: 5,
    width: 70,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '700',
  },
  status: {
    fontSize: 16,
    fontWeight: '600',
    margin: 5,
  },
  date: {
    fontSize: 16,
    fontWeight: '400',
    margin: 5,
  },
  text: {
    fontSize: 17,
    margin: 5,
    color: '#000000bb',
  },
});

export default styles;
