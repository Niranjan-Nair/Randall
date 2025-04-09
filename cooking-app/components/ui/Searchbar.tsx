import {View, Text, StyleSheet} from 'react-native';
import React from "react";

export interface SearchbarProps {
  text: string,
  /** Used to locate this view in end-to-end tests. */
  testID?: string,
}

export function Searchbar(props: SearchbarProps) {
  return (
    <View style={styles.root} testID={props.testID ?? "93:19754"}>
      <Text style={styles.query} testID="43:665">
        {props.text}
      </Text>
      <View style={styles.xButton} testID="43:666">
 
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    height: 30,
    paddingTop: 0,
    paddingLeft: 10,
    paddingBottom: 0,
    paddingRight: 5,
    alignItems: 'center',
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
  query: {
    flexDirection: 'column',
    justifyContent: 'center',
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
    alignSelf: 'stretch',
    overflow: 'hidden',
    color: 'rgba(44, 34, 66, 1)',
    fontFamily: 'Poppins',
    fontSize: 15,
    fontStyle: 'normal',
    fontWeight: '400',
  },
  xButton: {
    flexDirection: 'row',
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: 10,
    columnGap: 10,
  },
});
