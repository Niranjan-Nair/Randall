import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { type PostData } from "@/constants/Types";

export function Post(props: PostData) {
    return (
        <View style={styles.root}> 
            <View style={styles.header}>
                <View style={styles.profile}>
                    <View style={styles.profilePicture}/>
                    <Text style={styles.username}>
                        {`username`}
                    </Text>
                </View>
                <Text style={styles.date}>
                    {props.date.toLocaleDateString()}
                </Text>
            </View>
            <View style={styles.recipePhoto}>
                <View style={styles.titleFrame}>
                    <Text style={styles.recipeName}>
                        {props.title}
                    </Text>
                </View>
            </View>
            <View style={styles.footer}>
                <View style={styles.engagement}>
                    <View style={styles.likes}>
                        <View style={styles.likeButton}>
                                <IconSymbol size={28} name="heart" color="rgba(44, 34, 66, 1)" />
                        </View>
                        <Text style={styles.numberOfLikes}>
                            {props.likes}
                        </Text>
                    </View>
                    <View style={styles.comments}>
                        <View style={styles.commentButton}>
                                <IconSymbol size={28} name="message" color="rgba(44, 34, 66, 1)" />
                        </View>
                        <Text style={styles.numberOfComments}>
                            {props.comments.length}
                        </Text>
                    </View>
                </View>
                <View style={styles.openButton}>
                        <IconSymbol size={28} name="chevron.forward" color="rgba(44, 34, 66, 1)" />
                </View>
            </View>
            <Text style={styles.recipeDescription}>
                {props.description}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        flexDirection: "column",
        alignItems: "center",
        rowGap: 10,
        columnGap: 10,
        alignSelf: "stretch",
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        backgroundColor: "rgba(233, 234, 239, 1)",
    },
    profilePicture: {
        width: 30,
        height: 30,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        backgroundColor: "rgba(255, 255, 255, 1)",
    },
    username: {
        width: 96,
        flexDirection: "column",
        justifyContent: "center",
        alignSelf: "stretch",
        overflow: "hidden",
        color: "rgba(44, 34, 66, 1)",
        fontFamily: "Poppins",
        fontSize: 15,
        fontStyle: "normal",
        fontWeight: "700",
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        rowGap: 15,
        columnGap: 15,
        alignSelf: "stretch",
    },
    profile: {
        flexDirection: "row",
        alignItems: "center",
        rowGap: 10,
        columnGap: 10,
        flexGrow: 1,
        flexShrink: 0,
        flexBasis: 0,
    },
    date: {
        color: "rgba(44, 34, 66, 1)",
        fontFamily: "Poppins",
        fontSize: 15,
        fontStyle: "normal",
        fontWeight: "400",
    },
    recipeName: {
        color: "rgba(233, 234, 239, 1)",
        fontFamily: "Poppins",
        fontSize: 15,
        fontStyle: "normal",
        fontWeight: "700",
    },
    recipePhoto: {
        height: 322,
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        rowGap: 10,
        columnGap: 10,
        alignSelf: "stretch",
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        backgroundColor: "rgba(255, 255, 255, 1)",
    },
    titleFrame: {
        flexDirection: "row",
        paddingTop: 5,
        paddingLeft: 10,
        paddingBottom: 5,
        paddingRight: 10,
        justifyContent: "center",
        alignItems: "center",
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 0,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 8,
        backgroundColor: "rgba(44, 34, 66, 1)",
    },
    footer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        alignSelf: "stretch",
    },
    engagement: {
        flexDirection: "row",
        alignItems: "center",
        rowGap: 15,
        columnGap: 15,
    },
    likes: {
        flexDirection: "row",
        alignItems: "center",
        rowGap: 5,
        columnGap: 5,
    },
    likeButton: {
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
    numberOfLikes: {
        color: "rgba(44, 34, 66, 1)",
        fontFamily: "Poppins",
        fontSize: 15,
        fontStyle: "normal",
        fontWeight: "700",
    },
    comments: {
        flexDirection: "row",
        alignItems: "center",
        rowGap: 5,
        columnGap: 5,
    },
    commentButton: {
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
    numberOfComments: {
        color: "rgba(44, 34, 66, 1)",
        fontFamily: "Poppins",
        fontSize: 15,
        fontStyle: "normal",
        fontWeight: "700",
    },
    openButton: {
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
        backgroundColor: "rgba(170, 232, 132, 1)",
    },
    recipeDescription: {
        alignSelf: "stretch",
        color: "rgba(44, 34, 66, 1)",
        fontFamily: "Poppins",
        fontSize: 15,
        fontStyle: "normal",
        fontWeight: "400",
    },
});
