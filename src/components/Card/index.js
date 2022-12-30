import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {deleteTask} from '../../slices/taskSlice';
import {changemodal} from '../../slices/modalEditSlice';
import {setTask} from '../../slices/editTaskSlice';
import styles from './styles';

const Card = ({data}) => {
  const dispatch = useDispatch();

  const removeTask = () => {
    dispatch(deleteTask(data));
  };

  const openModalEdit = () => {
    dispatch(setTask(data));
    dispatch(changemodal());
  };

  return (
    <View style={styles.container}>
      <View style={styles.actions}>
        <TouchableOpacity style={styles.edit} onPress={openModalEdit}>
          <Text style={styles.editText}>Editar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.delete} onPress={removeTask}>
          <Text style={styles.deleteText}>Eliminar</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.status}>
          status: {data.done ? 'finalizada' : 'Pendiente'}
        </Text>
        <Text style={styles.date}>
          {data.initDate.toString()} -{' '}
          {data.finishDate === null ? 'Indefinida' : data.finishDate.toString()}
        </Text>
        <Text style={styles.text}>{data.text}</Text>
      </View>
    </View>
  );
};

export default Card;
