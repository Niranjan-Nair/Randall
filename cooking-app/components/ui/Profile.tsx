
import {View, Text, StyleSheet} from 'react-native';
import React from "react";

export interface ProfileProps {
  bio: string,
  handle: string,
  modifiable?: boolean,
  /** Used to locate this view in end-to-end tests. */
  testID?: string,
}

export function Profile(props: ProfileProps) {


  return (
    <View style={styles.root} testID={props.testID ?? "43:479"}>
      <View style={styles.profilePicture} testID="42:221"/>
      <View style={styles.description} testID="42:223">
        <View style={styles.descriptionHeader} testID="42:239">
          <Text style={styles.handle} testID="42:224">
            {props.handle}
          </Text>
          {props.modifiable && 
            <View style={styles.editButton} testID="42:241">

            </View>
          }
        </View>
        <Text style={styles.bio} testID="42:225">
          {props.bio}
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create(({
  root: {
    flexDirection: 'row',
    width: 342,
    alignItems: 'center',
    rowGap: 15,
    columnGap: 15,
  },
  profilePicture: {
    width: 100,
    height: 100,
    flexShrink: 0,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
  handle: {
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
    color: 'rgba(44, 34, 66, 1)',
    fontFamily: 'Poppins',
    fontSize: 15,
    fontStyle: 'normal',
    fontWeight: '700',
  },
  description: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    rowGap: 10,
    columnGap: 10,
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
    alignSelf: 'stretch',
  },
  descriptionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    rowGap: 10,
    columnGap: 10,
    alignSelf: 'stretch',
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
  bio: {
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
}));
