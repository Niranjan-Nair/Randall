import {View,StyleSheet} from "react-native";
import React from "react";


export interface NavigationProps {
    /** Used to locate this view in end-to-end tests. */
}

export function Navigation(props: NavigationProps) {

    return (
        <View style={styles.root}>
            <View style={styles.profileButton}>
        
            </View>
            <View style={styles.newPostButton}>
             
            </View>
            <View style={styles.searchButton}>
    
            </View>
            <View style={styles.homeButton}>
         
            </View>
        </View>
    );
}
const styles = StyleSheet.create(({
    root: {
        flexDirection: "row",
        height: 90,
        paddingTop: 10,
        paddingLeft: 30,
        paddingBottom: 20,
        paddingRight: 30,
        justifyContent: "space-between",
        alignItems: "center",
        flexShrink: 0,
        alignSelf: "stretch",
        borderTopColor: "rgba(44, 34, 66, 1)",
        borderTopWidth: 2,
    },
    profileButton: {
        flexDirection: "row",
        height: 30,
        justifyContent: "center",
        alignItems: "center",
    },
    newPostButton: {
        flexDirection: "row",
        width: 30,
        height: 30,
        justifyContent: "center",
        alignItems: "center",
        rowGap: 10,
        columnGap: 10,
    },
    searchButton: {
        flexDirection: "row",
        width: 30,
        height: 30,
        justifyContent: "center",
        alignItems: "center",
        rowGap: 10,
        columnGap: 10,
    },
    homeButton: {
        flexDirection: "row",
        height: 30,
        justifyContent: "center",
        alignItems: "center",
    },
}));
