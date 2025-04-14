
import {View, Text,StyleSheet} from 'react-native';
import React from "react";

export interface CommentProps {
  date: string,
  handle: string,
  numLikes: string,
  numReplies: string,
  text: string,
  /** Used to locate this view in end-to-end tests. */
  testID?: string,
}

export function Comment(props: CommentProps) {


  return (
    <View style={styles.root} testID={props.testID ?? "87:4535"}>
      <View style={styles.header} testID="87:4513">
        <View style={styles.profile} testID="87:4514">
          <View style={styles.profilePicture} testID="87:4515"/>
          <Text style={styles.username} testID="87:4516">
            {props.handle}
          </Text>
        </View>
        <Text style={styles.date} testID="87:4517">
          {props.date}
        </Text>
      </View>
      <Text style={styles.info} testID="87:4519">
        {props.text}
      </Text>
      <View style={styles.engagement} testID="87:4522">
        <View style={styles.likes} testID="87:4523">
          <View style={styles.likeButton} testID="87:4524">
     
          </View>
          <Text style={styles.numberOfLikes} testID="87:4526">
            {props.numLikes}
          </Text>
        </View>
        <View style={styles.comments} testID="87:4527">
          <View style={styles.commentButton} testID="87:4528">
       
          </View>
          <Text style={styles.numberOfComments} testID="87:4530">
            {props.numReplies}
          </Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create(({
  root: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    rowGap: 10,
    columnGap: 10,
  },
  profilePicture: {
    width: 30,
    height: 30,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
  username: {
    width: 96,
    flexDirection: 'column',
    justifyContent: 'center',
    alignSelf: 'stretch',
    overflow: 'hidden',
    color: 'rgba(44, 34, 66, 1)',
    fontFamily: 'Poppins',
    fontSize: 15,
    fontStyle: 'normal',
    fontWeight: '700',
  },
  header: {
    flexDirection: 'row',
    width: 342,
    height: 30,
    alignItems: 'center',
    rowGap: 15,
    columnGap: 15,
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    rowGap: 10,
    columnGap: 10,
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
  },
  date: {
    color: 'rgba(44, 34, 66, 1)',
    fontFamily: 'Poppins',
    fontSize: 15,
    fontStyle: 'normal',
    fontWeight: '400',
  },
  info: {
    width: 342,
    height: 69,
    color: 'rgba(44, 34, 66, 1)',
    fontFamily: 'Poppins',
    fontSize: 15,
    fontStyle: 'normal',
    fontWeight: '400',
  },
  engagement: {
    flexDirection: 'row',
    alignItems: 'center',
    rowGap: 15,
    columnGap: 15,
  },
  likes: {
    flexDirection: 'row',
    alignItems: 'center',
    rowGap: 5,
    columnGap: 5,
  },
  likeButton: {
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
  numberOfLikes: {
    color: 'rgba(44, 34, 66, 1)',
    fontFamily: 'Poppins',
    fontSize: 15,
    fontStyle: 'normal',
    fontWeight: '700',
  },
  comments: {
    flexDirection: 'row',
    alignItems: 'center',
    rowGap: 5,
    columnGap: 5,
  },
  commentButton: {
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
  numberOfComments: {
    color: 'rgba(44, 34, 66, 1)',
    fontFamily: 'Poppins',
    fontSize: 15,
    fontStyle: 'normal',
    fontWeight: '700',
  },
}));
