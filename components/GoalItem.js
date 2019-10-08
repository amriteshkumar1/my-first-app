import React from 'react';
import {Text,StyleSheet,TouchableOpacity} from 'react-native';



const GoalItem=props =>{
    return(<TouchableOpacity onPress={props.onDelete.bind(this,props.id)}>
        <Text style={styles.listItem} >{props.title}</Text>
        </TouchableOpacity>) 
};


const styles = StyleSheet.create({
   
    listItem:{
      padding:10,
      backgroundColor:'#ccc',
      marginVertical:10,
      borderColor:'blue',
      borderWidth:1,
      borderRadius:10,
      width:250
    }
  });
export default GoalItem;