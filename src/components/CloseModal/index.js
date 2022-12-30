import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {changemodal as changeModalAdd} from '../../slices/modalAddSlice';
import {changemodal as changeModalEdit} from '../../slices/modalEditSlice';
import styles from './styles';

const CloseModal = ({type}) => {
  const dispatch = useDispatch();

  const closeModal = () => {
    if (type === 'add') {
      dispatch(changeModalAdd());
    }
    if (type === 'edit') {
      dispatch(changeModalEdit());
    }
  };

  return (
    <TouchableOpacity style={styles.container} onPress={closeModal}>
      <Text style={styles.text}>x</Text>
    </TouchableOpacity>
  );
};

export default CloseModal;
