
import {View, Text, StyleSheet} from "react-native";
import React from "react";

export interface NewCommentProps {
    text: string,
    /** Used to locate this view in end-to-end tests. */
    testID?: string,
}

export function NewComment(props: NewCommentProps) {


    return (
        <View style={styles.root}>
            <Text style={styles.content}>
                {props.text}
            </Text>
        </View>
    );
}
const styles = StyleSheet.create(({
    root: {
        height: 100,
        paddingTop: 10,
        paddingLeft: 10,
        paddingBottom: 10,
        paddingRight: 10,
        flexDirection: "column",
        alignItems: "center",
        rowGap: 10,
        columnGap: 10,
        alignSelf: "stretch",
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        backgroundColor: "rgba(255, 255, 255, 1)",
    },
    content: {
        alignSelf: "stretch",
        color: "rgba(44, 34, 66, 1)",
        fontFamily: "Poppins",
        fontSize: 15,
        fontStyle: "normal",
        fontWeight: "400",
    },
}));
