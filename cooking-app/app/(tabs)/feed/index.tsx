import React, { useEffect } from "react";
import { ScrollView, View, Text, StyleSheet, Image, Pressable } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { posts } from "@/constants/data";
import { Link } from "expo-router";

export default function FeedScreen() {
    return (
        <View style={{paddingVertical: 60}}>
        {/* Top Bar */}
        <View style={styles.topBar}>
            <Text style={styles.topTitle}>Feed</Text>
        </View>
        <ScrollView style={styles.container}>
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
                        <View style={styles.nearbyIcons}>
                            <View style={styles.iconGroup}>
                                <Text style={styles.heartIcon}>❤️</Text>
                                <Text style={{color: "#fff"}}>{post.likes}</Text>
                            </View>
                            <View style={styles.iconGroup}>
                                <Text style={styles.commentIcon}>💬</Text>
                                <Text style={{color: "#fff"}}>{post.comments}</Text>
                            </View>
                        </View>
                        <Link href={`/feed/posts/${index}`}>
                            <View style={styles.viewIcon}>
                                <Text style={{fontWeight: "bold"}}>Open</Text>
                            </View>
                        </Link>
                    </View>

                    {/* Description */}
                    <Text style={styles.description}>{post.description}</Text>
                </View>
            ))}
            <View style={{height: 80}}/>
        </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#111",
        paddingHorizontal: 16,
        paddingTop: 14,
        marginBottom: 80,
        height: "100%",
    },
    topBar: {
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderBottomColor: "#444",
    },
    topTitle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#fff",
    },
    postCard: {
        borderRadius: 12,
        padding: 12,
        marginBottom: 12,
    },
    headerRow: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 16,
    },
    profilePicPlaceholder: {
        width: 40,
        height: 40,
        borderRadius: 6,
        backgroundColor: "#fff",
        marginRight: 8,
    },
    username: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 16,
        flex: 1,
    },
    date: {
        fontSize: 14,
        color: "#aaa",
    },
    imageArea: {
        marginBottom: 16,
        position: "relative",
    },
    fakeImage: {
        height: 250,
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
        justifyContent: "space-between",
        marginBottom: 16,
    },
    nearbyIcons: {
        flexDirection: "row",
        alignItems: "center",
        gap: 16,
    },
    iconGroup: {
        flexDirection: "row",
        alignItems: "center",
        gap: 4,
    },
    heartIcon: {
        color: "#e88",
        fontSize: 20,
    },
    commentIcon: {
        color: "#88aaff",
        fontSize: 20,
    },
    viewIcon: {
        marginLeft: "auto",
        backgroundColor: "#c8f78d",
        padding: 4,
        borderRadius: 6,
    },
    description: {
        fontSize: 16,
        color: "#fff",
    },
});
