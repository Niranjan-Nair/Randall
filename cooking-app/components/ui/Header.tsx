
import {View, Text, StyleSheet} from "react-native";
import React from "react";

export interface HeaderProps {
    title: string,
    hasBack?: boolean,
    /** Used to locate this view in end-to-end tests. */
    testID?: string,
}

export function Header(props: HeaderProps) {

    return (
        <View style={styles.root} testID={props.testID ?? "42:417"}>
            {props.hasBack && 
                <View style={styles.back}>
                    <View/>
                </View>
            }
            <Text style={styles.title}>
                {props.title}
            </Text>
            {props.hasBack && 
                <View style={styles.settingsButton}>
                    <View/>
                </View>
            }
        </View>
    );
}
const styles = StyleSheet.create(({
    root: {
        flexDirection: "row",
        paddingTop: 15,
        paddingLeft: 30,
        paddingBottom: 15,
        paddingRight: 30,
        alignItems: "center",
        rowGap: 15,
        columnGap: 15,
        alignSelf: "stretch",
        borderBottomColor: "rgba(44, 34, 66, 1)",
        borderBottomWidth: 2,
        backgroundColor: "rgba(233, 234, 239, 1)",
    },
    back: {
        flexDirection: "row",
        width: 30,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        maxHeight: 38,
        flexGrow: 1,
        flexShrink: 0,
        flexBasis: 0,
        alignSelf: "stretch",
        overflow: "hidden",
        color: "rgba(44, 34, 66, 1)",
        textAlign: "center",
        fontFamily: "Poppins",
        fontSize: 25,
        fontStyle: "normal",
        fontWeight: "700",
    },
    settingsButton: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        rowGap: 10,
        columnGap: 10,
    },
}));
