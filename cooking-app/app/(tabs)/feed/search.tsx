import React, { useContext, useState } from 'react';
import { View, TextInput, StyleSheet, Pressable, ScrollView, Text, Image } from 'react-native';
import Content from "@/components/Content";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { PostsContext } from '@/app/_layout';
import { PostData } from '@/constants/Types';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '@/scripts/firebase';
import { Link } from 'expo-router';
import { ingredients } from '@/constants/data';

export default function SearchBar() {
    const {posts, setPosts} = useContext(PostsContext);
    const [searchQuery, setSearchQuery] = useState("");

    async function updateLikes(id: string, index: number) {
        const likes = posts[index].likes;

        await setDoc(doc(db, `testmeals/${id}`), {
            likes: likes + 1,
        }, { merge: true });


        setPosts!([...posts.slice(0, index), {...posts[index], likes: posts[index].likes + 1}, ...posts.slice(index + 1)]);
    }

    return (
        <View style={{paddingVertical: 60}}>
            {/* Top Bar */}
            <View style={styles.topBar}>
                <TextInput
                    style={styles.input}
                    placeholder="Search..."
                    value={searchQuery}
                    onChangeText={text => setSearchQuery(text)}
                />
            </View>
            {searchQuery === ""? <Text style={{
                alignSelf: "center",
                color: "#ffffff",
                fontWeight: "bold",
                fontSize: 18,
                textAlign: "center",
                marginTop: "65%",
                paddingHorizontal: 30,
            }}>Search for a recipe in the searchbar above.</Text> : <ScrollView style={styles.container}>
                {/* Feed Posts */}
                {posts.filter((post: PostData) =>
                    (post.category
                    + post.date
                    + post.ingredients.map(ingredient => ingredient.name).join("")
                    + post.locale
                    + post.name
                    + post.tags.join("")
                    + post.username).toLowerCase().indexOf(searchQuery.toLowerCase().trim()) !== -1
                ).map((post: PostData, index: number) => (
                    <View key={post.id} style={styles.postCard}>
                        {/* Header Row */}
                        <View style={styles.headerRow}>
                            <View style={styles.profilePicPlaceholder} />
                            <Text style={styles.username}>{post.username}</Text>
                            <Text style={styles.date}>{new Date((post.date as {nanoseconds: number; seconds: number}).seconds * 1000).toDateString()}</Text>
                        </View>
    
                        {/* Image Area */}
                        <View style={styles.imageArea}>
                            <Image source={{ uri: post.imageURI }} style={styles.recipeImage} />
                            <Text style={styles.recipeTag}>{post.name}</Text>
                        </View>
    
                        {/* Interaction Row */}
                        <View style={styles.interactionRow}>
                            <View style={styles.nearbyIcons}>
                                <View style={styles.iconGroup}>
                                    <Pressable onPress={() => updateLikes(post.id, index)}>
                                        <Text style={styles.heartIcon}>❤️</Text>
                                    </Pressable>
                                    <Text style={{color: "#fff"}}>{post.likes}</Text>
                                </View>
                                {/*
                                    <View style={styles.iconGroup}>
                                        <Text style={styles.commentIcon}>💬</Text>
                                        <Text style={{color: "#fff"}}>0</Text>
                                    </View>
                                */}
                            </View>
                            <Link href={{
                                    pathname: "/feed/posts/[postid]",
                                    params: { postid: post.id },
                                }}>
                                <View style={styles.viewIcon}>
                                    <Text style={{fontWeight: "bold"}}>Open</Text>
                                </View>
                            </Link>
                        </View>
                    </View>
                ))}
                <View style={{height: 80}}/>
            </ScrollView>}
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 15,
        paddingTop: 12,
    },
    input: {
        height: 40,
        width: "100%",
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        backgroundColor: 'white',
    },
    topBar: {
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderBottomColor: "#444",
        paddingHorizontal: 30,
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
    recipeImage: {
        height: 250,
        borderRadius: 8,
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
