import React from "react";
import { ScrollView, View, Text, StyleSheet, Image, Pressable } from "react-native";
import { ThemedView } from "@/components/ThemedView";

const posts = [
    {
        username: "@username",
        date: "mm/dd/yy",
        recipeName: "Recipe Name #1",
        description:
            "blah blah blah this is some description about recipe name #1",
        likes: 0,
        comments: 0,
    },
    {
        username: "@username",
        date: "mm/dd/yy",
        recipeName: "Recipe Name #2",
        description:
            "blah blah blah this is some description about recipe name #2",
        likes: 3,
        comments: 1,
    },
    {
        username: "@username",
        date: "mm/dd/yy",
        recipeName: "Recipe Name #3",
        description:
            "blah blah blah this is some description about recipe name #3",
        likes: 3,
        comments: 1,
    },
    {
        username: "@username",
        date: "mm/dd/yy",
        recipeName: "Recipe Name #4",
        description:
            "blah blah blah this is some description about recipe name #4",
        likes: 3,
        comments: 1,
    },
    {
        username: "@username",
        date: "mm/dd/yy",
        recipeName: "Recipe Name #5",
        description:
            "blah blah blah this is some description about recipe name #5",
        likes: 3,
        comments: 1,
    },
];

export default function FeedScreen() {
    return (
        <ScrollView style={styles.container}>
            {/* Top Bar */}
            <View style={styles.topBar}>
                <Text style={styles.topTitle}>Feed</Text>
            </View>

            {/* Feed Posts */}
            {posts.map((post, index) => (
                <View key={index} style={styles.postCard}>
                    {/* Header Row */}
                    <View style={styles.headerRow}>
                        <View style={styles.profilePicPlaceholder} />
                        <Text style={styles.username}>{post.username}</Text>
                        <Text style={styles.date}>{post.date}</Text>
                    </View>

                    {/* Image Area */}
                    <View style={styles.imageArea}>
                        {/* Image placeholder */}
                        <View style={styles.fakeImage} />
                        <Text style={styles.recipeTag}>{post.recipeName}</Text>
                    </View>

                    {/* Interaction Row */}
                    <View style={styles.interactionRow}>
                        <View style={styles.iconGroup}>
                            <Text style={styles.heartIcon}>❤️</Text>
                            <Text>{post.likes}</Text>
                        </View>
                        <View style={styles.iconGroup}>
                            <Text style={styles.commentIcon}>💬</Text>
                            <Text>{post.comments}</Text>
                        </View>
                        <Pressable style={styles.editIcon}>
                            <Text>✏️</Text>
                        </Pressable>
                    </View>

                    {/* Description */}
                    <Text style={styles.description}>{post.description}</Text>
                </View>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#111",
        flex: 1,
        paddingHorizontal: 16,
    },
    topBar: {
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderBottomColor: "#444",
        marginBottom: 12,
    },
    topTitle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#fff",
    },
    postCard: {
        backgroundColor: "#f2f2f2",
        borderRadius: 12,
        padding: 12,
        marginBottom: 20,
    },
    headerRow: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 8,
    },
    profilePicPlaceholder: {
        width: 24,
        height: 24,
        borderRadius: 6,
        backgroundColor: "#fff",
        marginRight: 8,
    },
    username: {
        fontWeight: "bold",
        fontSize: 14,
        flex: 1,
    },
    date: {
        fontSize: 12,
        color: "#555",
    },
    imageArea: {
        marginBottom: 8,
        position: "relative",
    },
    fakeImage: {
        height: 180,
        borderRadius: 8,
        backgroundColor: "#fff",
    },
    recipeTag: {
        position: "absolute",
        bottom: 8,
        left: 8,
        backgroundColor: "#312b4f",
        color: "#fff",
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 6,
        fontWeight: "bold",
        fontSize: 12,
    },
    interactionRow: {
        flexDirection: "row",
        alignItems: "center",
        gap: 16,
        marginBottom: 8,
    },
    iconGroup: {
        flexDirection: "row",
        alignItems: "center",
        gap: 4,
    },
    heartIcon: {
        color: "#e88",
    },
    commentIcon: {
        color: "#88aaff",
    },
    editIcon: {
        marginLeft: "auto",
        backgroundColor: "#c8f78d",
        padding: 4,
        borderRadius: 6,
    },
    description: {
        fontSize: 14,
        color: "#333",
    },
});
