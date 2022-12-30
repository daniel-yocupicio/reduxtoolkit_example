import React from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';

// redux
import {useDispatch, useSelector} from 'react-redux';
//import {addTask, deleteTask, editTask} from '../slices/taskSlice';
import {changemodal} from '../slices/modalAddSlice';

// styles
import styles from './styles';

// components
import Card from '../components/Card';
import ModalAdd from '../components/ModalAdd';
import ModalEdit from '../components/ModalEdit';

const TaskScreen = () => {
  const tasks = useSelector(state => state.tasks);

  const dispatch = useDispatch();

  const openModal = () => {
    dispatch(changemodal());
  };

  return (
    <View style={styles.container}>
      <ModalAdd />
      <ModalEdit />
      <FlatList
        data={tasks}
        renderItem={({item, index}) => <Card data={item} />}
      />
      <TouchableOpacity style={styles.btn} onPress={openModal}>
        <Text style={styles.btnText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TaskScreen;
