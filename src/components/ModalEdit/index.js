import React, {useEffect, useState} from 'react';
import {View, Text, Modal, TouchableOpacity, TextInput} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {editTask} from '../../slices/taskSlice';
import {changemodal} from '../../slices/modalEditSlice';
import {resetTask} from '../../slices/editTaskSlice';
import CloseModal from '../CloseModal';
import styles from './styles';
import {getDate} from '../../utils/date';

const ModalEdit = () => {
  const isVisible = useSelector(state => state.modaledit);
  const taskData = useSelector(state => state.edittask);
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    setText(taskData?.text);
    setDone(taskData?.done);
  }, [taskData]);

  const saveChanges = (textparam, doneparam) => {
    let data = {};
    if (taskData.finishDate !== null && doneparam) {
      data = {...taskData, text: textparam};
    }
    if (taskData.finishDate !== null && !doneparam) {
      data = {...taskData, text: textparam, finishDate: null, done: doneparam};
    }
    if (taskData.finishDate === null && doneparam) {
      data = {
        ...taskData,
        text: textparam,
        finishDate: getDate(),
        done: doneparam,
      };
    }
    if (taskData.finishDate === null && !doneparam) {
      data = {...taskData, text: textparam};
    }

    dispatch(editTask(data));
    dispatch(changemodal());
    dispatch(resetTask());
  };

  return (
    <Modal visible={isVisible} transparent={true}>
      <View style={styles.containertransparent}>
        <View style={styles.whiteModal}>
          <CloseModal type={'edit'} />
          <Text style={styles.title}>Editar tarea</Text>
          <Text style={styles.description}>Descripción de la tarea:</Text>
          <TextInput
            value={text}
            placeholder="Escriba la tarea"
            style={styles.input}
            onChange={e => setText(e.nativeEvent.text)}
          />
          <TouchableOpacity
            style={{
              ...styles.done,
              ...(done ? {} : {backgroundColor: '#E74C3C'}),
            }}
            onPress={() => setDone(!done)}>
            <Text style={styles.donetext}>
              {done ? 'Estado finalizado' : 'Estado pendiente'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => saveChanges(text, done)}>
            <Text style={styles.btnText}>Guardar cambios</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ModalEdit;
