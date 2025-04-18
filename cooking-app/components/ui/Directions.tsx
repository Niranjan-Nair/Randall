
import {View, Text, StyleSheet} from "react-native";
import React from "react";

export interface DirectionProps {
    description: string,
    hasPhoto?: boolean,
    modifiable?: boolean,
}

export function Direction(props: DirectionProps) {
    return (
        <View style={styles.root}>
            <View style={styles.photo}>
                {props.modifiable && 
                    <View/>
                }
            </View>
            <Text style={styles.info}>
                {props.description}
            </Text>
            {props.modifiable && 
                <View style={styles.edit}>
                    <View style={styles.editButton}>
                        <View/>
                    </View>
                    <View style={styles.delete}>
                        <View/>
                    </View>
                </View>
            }
        </View>
    );
}

const styles = StyleSheet.create(({
    root: {
        flexDirection: "row",
        alignItems: "flex-start",
        rowGap: 15,
        columnGap: 15,
        alignSelf: "stretch",
    },
    photo: {
        width: 100,
        height: 100,
        paddingTop: 10,
        paddingLeft: 10,
        paddingBottom: 10,
        paddingRight: 10,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        rowGap: 10,
        columnGap: 10,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        backgroundColor: "rgba(255, 255, 255, 1)",
    },
    info: {
        flexGrow: 1,
        flexShrink: 0,
        flexBasis: 0,
        color: "rgba(44, 34, 66, 1)",
        fontFamily: "Poppins",
        fontSize: 15,
        fontStyle: "normal",
        fontWeight: "400",
    },
    edit: {
        paddingTop: 5,
        paddingLeft: 5,
        paddingBottom: 5,
        paddingRight: 5,
        flexDirection: "column",
        alignItems: "center",
        rowGap: 10,
        columnGap: 10,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        backgroundColor: "rgba(255, 255, 255, 1)",
    },
    editButton: {
        flexDirection: "row",
        width: 30,
        height: 30,
        justifyContent: "center",
        alignItems: "center",
        rowGap: 10,
        columnGap: 10,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        backgroundColor: "rgba(154, 181, 255, 1)",
    },
    delete: {
        flexDirection: "row",
        width: 30,
        height: 30,
        justifyContent: "center",
        alignItems: "center",
        rowGap: 10,
        columnGap: 10,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        backgroundColor: "rgba(255, 154, 154, 1)",
    },
}))
