import {View, Text, StyleSheet} from "react-native";
import React from "react";

export interface PreferenceProps {
    preferenceName: string,
    checked?: boolean,
}

export function Preference(props: PreferenceProps) {
    return (
        <View style={styles.root}>
            <Text style={styles.preferenceName}>
                {props.preferenceName}
            </Text>
            <View style={styles.checkbox}>
                props.checked &&
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        flexDirection: "row",
        width: 342,
        height: 25,
        alignItems: "center",
        rowGap: 10,
        columnGap: 10,
    },
    preferenceName: {
        flexGrow: 1,
        flexShrink: 0,
        flexBasis: 0,
        color: "rgba(44, 34, 66, 1)",
        fontFamily: "Poppins",
        fontSize: 15,
        fontStyle: "normal",
        fontWeight: "400",
    },
    checkbox: {
        width: 25,
        height: 25,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexShrink: 0,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        borderWidth: 2,
        borderStyle: "solid",
        borderColor: "rgba(255, 255, 255, 1)",
    },
});
