
import {View, Text, StyleSheet} from 'react-native';
import React from "react";

export interface DirectionProps {
  description: string,
  hasPhoto?: boolean,
  modifiable?: boolean,
  /** Used to locate this view in end-to-end tests. */
  testID?: string,
}

export function Direction(props: DirectionProps) {


  return (
    <View style={styles.root} testID={props.testID ?? "87:4463"}>
      <View style={styles.photo} testID="88:5194">
        {props.modifiable && 
          <View/>
        }
      </View>
      <Text style={styles.info} testID="87:4458">
        {props.description}
      </Text>
      {props.modifiable && 
        <View style={styles.edit} testID="88:4854">
          <View style={styles.editButton} testID="88:4888">
            <View/>
          </View>
          <View style={styles.delete} testID="88:4911">
            <View/>
          </View>
        </View>
      }
    </View>
  );
}

const styles = StyleSheet.create(({
  root: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    rowGap: 15,
    columnGap: 15,
    alignSelf: 'stretch',
  },
  photo: {
    width: 100,
    height: 100,
    paddingTop: 10,
    paddingLeft: 10,
    paddingBottom: 10,
    paddingRight: 10,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: 10,
    columnGap: 10,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
  info: {
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
    color: 'rgba(44, 34, 66, 1)',
    fontFamily: 'Poppins',
    fontSize: 15,
    fontStyle: 'normal',
    fontWeight: '400',
  },
  edit: {
    paddingTop: 5,
    paddingLeft: 5,
    paddingBottom: 5,
    paddingRight: 5,
    flexDirection: 'column',
    alignItems: 'center',
    rowGap: 10,
    columnGap: 10,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
  editButton: {
    flexDirection: 'row',
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: 10,
    columnGap: 10,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: 'rgba(154, 181, 255, 1)',
  },
  delete: {
    flexDirection: 'row',
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: 10,
    columnGap: 10,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: 'rgba(255, 154, 154, 1)',
  },
}))
