import React, { useEffect, useState } from "react";
import { ScrollView, View, Text, StyleSheet, Image, Pressable } from "react-native";
import { Link } from "expo-router";
import { db } from "@/scripts/firebase"
import { collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore";
import { PostData, ProfileData } from "@/constants/Types";
import * as SecureStore from "expo-secure-store";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

export default function FeedScreen() {
    const [userID, setUserID] = useState(uuidv4());

    const [profile, setProfile] = useState<ProfileData>({
        preferences: [false, false, false, false],
        bio: "Edit your bio here...",
        username: "@username",
        allergies: [],
    });

    async function getUser() {
        let uuid = userID;
        let id = (await SecureStore.getItemAsync("userid"))?.replaceAll(/^[\"\\]+|[\"\\]+$/g, "");

        if (id) {
            setUserID(id.replaceAll(/^[\"\\]+|[\"\\]+$/g, ""));
            uuid = id.replaceAll(/^[\"\\]+|[\"\\]+$/g, "");
        }

        await SecureStore.setItemAsync("userid", JSON.stringify(uuid).replaceAll(/^[\"\\]+|[\"\\]+$/g, ""));

        let snapshot = await getDoc(doc(db, `users/${uuid.replaceAll(/^[\"\\]+|[\"\\]+$/g, "")}`));

        if (snapshot.data()) {
            setProfile({...snapshot.data() as ProfileData});
        }
    }

    useEffect(() => {
        getUser();
    }, []);

    const [posts, setPosts] = useState<PostData[]>([]);

    useEffect(() => {
        getDocs(collection(db, "testmeals")).then((snapshot) => {
            let data: PostData[] = [];

            snapshot.docs.forEach((doc) => {
                data.push({...doc.data(), id: doc.id } as PostData);
            });

            setPosts(data);
        });
    }, []);

    async function updateLikes(id: string, index: number) {
        const likes = posts[index].likes;

        await setDoc(doc(db, `testmeals/${id}`), {
            likes: likes + 1,
        }, { merge: true });


        setPosts([...posts.slice(0, index), {...posts[index], likes: posts[index].likes + 1}, ...posts.slice(index + 1)])
    }

    return (
        <View style={{paddingVertical: 60}}>
        {/* Top Bar */}
        <View style={styles.topBar}>
            <Text style={styles.topTitle}>Feed</Text>
        </View>
        <ScrollView style={styles.container}>
            {/* Feed Posts */}
            {posts.filter(post => {
                let predicate = true;

                if (profile.preferences[0] || profile.preferences[1])
                    predicate &&= (post.category === "Vegetarian");
                if (profile.preferences[2] || profile.preferences[3])
                    predicate &&= (post.category !== "Pork")
            }).map((post, index) => (
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
                        <Link href={`/feed/posts/${post.id}`}>
                            <View style={styles.viewIcon}>
                                <Text style={{fontWeight: "bold"}}>Open</Text>
                            </View>
                        </Link>
                    </View>
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
