import * as React from 'react';
import { Text, View, StyleSheet, FlatList, Image } from 'react-native';
import PropTypes from 'prop-types';
import { defaultStyle } from './style'

const LogView = (props) => {
    const styles = StyleSheet.create({...defaultStyle, ...props.style});
    const renderRow = ({ item }) => {
        return <View style={styles.row}>
          <View style={styles.dateContainer}>
            <Text style={styles.date}>
              {item.time}
            </Text>
          </View>
          <View style={styles.dotContainer}>
            <View style={styles.dot}></View>
          </View>
          <View style={styles.cardContainer}>
          <View style={styles.card}>
              {
                  item.title && <View style={styles.titleContainer}>
                      <Text style={styles.title}>{item.title}</Text>
                  </View>
              }
              {
                  item.image && <View style={styles.imageContainer}>
                      <Image source={item.image} style={styles.image}/>
                  </View>
              }
              {
                  item.description && <View style={styles.descriptionContainer}>
                      <Text style={styles.description}>{Array.isArray(item.description) ? [...item.description].join(', ') : item.description.toString()}</Text>
                  </View>
              }
            </View>
          </View>
        </View>
    }
    return (
      <View style={styles.container}>
        <FlatList 
            data = {props.data}
            renderItem = {item => renderRow(item)}
            keyExtractor = {(item, index) => index}
            {...props.flatList}
        />
      </View>
    );
}

LogView.propTypes = {
  data: PropTypes.array.isRequired,
  style: PropTypes.shape({}),
  flatList: PropTypes.shape({}),
}

export default LogView;

