import React, {useState} from 'react';
import {View, Text, Modal, TextInput, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {changemodal} from '../../slices/modalAddSlice';
import {addTask} from '../../slices/taskSlice';
import CloseModal from '../CloseModal';
import styles from './styles';

const ModalAdd = () => {
  const [text, setText] = useState('');
  const isVisible = useSelector(state => state.modaladd);

  const dispatch = useDispatch();

  const saveTask = () => {
    dispatch(addTask(text));
    setText('');
    dispatch(changemodal());
  };

  return (
    <Modal visible={isVisible} transparent={true}>
      <View style={styles.containertransparent}>
        <View style={styles.whiteModal}>
          <CloseModal type={'add'} />
          <Text style={styles.title}>Agregar nueva tarea</Text>
          <TextInput
            placeholder="Ingrese la tarea"
            style={styles.input}
            onChange={e => setText(e.nativeEvent.text)}
            value={text}
          />
          <TouchableOpacity style={styles.btn} onPress={saveTask}>
            <Text style={styles.btnText}>Agregar tarea</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ModalAdd;
