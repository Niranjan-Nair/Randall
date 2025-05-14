import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, Image, StyleSheet, Pressable } from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import { PostData } from "@/constants/Types";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "@/scripts/firebase";

export default function RecipeScreen() {
    const { postid } = useLocalSearchParams<{postid: string}>();

    const [recipe, setRecipe] = useState<PostData>({
        name: "",
        imageURI: "",
        username: "",
        likes: 0,
        locale: "",
        ingredients: [],
        instructions: [],
        tags: [],
        date: new Date(),
        id: "",
    });

    useEffect(() => {
        async function getData() {
            const data = await getDoc(doc(db, `testmeals/${postid}`));
            setRecipe(data.data() as PostData);
        }

        getData();
    }, []);

    async function updateLikes() {
        const likes = recipe.likes;

        await setDoc(doc(db, `testmeals/${postid}`), {
            likes: likes + 1,
        }, { merge: true });

        setRecipe({...recipe, likes: likes + 1});
    }


    return (
        <View style={styles.container}>
            {/* Top Bar */}
            <View style={styles.topBar}>
                <Pressable style={styles.topIcon} onPress={() => router.back()}>
                    <Text style={styles.topIconText}>←</Text>
                </Pressable>
                <Text style={styles.topTitle}>Recipe</Text>
                <Pressable style={styles.topIcon} onPress={() => updateLikes()}>
                    <Text style={styles.topIconText}>⚙</Text>
                </Pressable>
            </View>

            <ScrollView contentContainerStyle={styles.scrollContainer}>
                {/* Recipe Image */}
                <View style={styles.recipeImageBox}>
                    {recipe.imageURI ? (
                        <Image source={{ uri: recipe.imageURI }} style={styles.recipeImage} />
                    ) : (
                        <View style={styles.emptyImageBox} />
                    )}
                    <View style={styles.recipeNameTag}>
                        <Text style={styles.recipeNameText}>{recipe.name}</Text>
                    </View>
                </View>

                {/* Username / Date / Likes */}
                <View style={styles.userRow}>
                    <View style={styles.avatarPlaceholder} />
                    <Text style={styles.usernameText}>{recipe.username}</Text>
                    <Text style={styles.dateText}>{new Date((recipe.date as {nanoseconds: number; seconds: number}).seconds * 1000).toDateString()}</Text>
                    <View style={styles.likeButton}>
                        <Text style={styles.heartIcon}>❤️</Text>
                        <Text style={styles.likeCount}>{recipe.likes}</Text>
                    </View>
                </View>

                {/* Ingredients */}
                <Text style={styles.sectionTitle}>Ingredients</Text>
                {recipe.ingredients.map((item, index) => (
                    <View key={index} style={styles.ingredientRow}>
                        <Text style={styles.ingredientLabel}>{item.name}</Text>
                        <Text style={styles.ingredientAmount}>{item.amount}</Text>
                    </View>
                ))}

                {/* Directions */}
                <Text style={styles.sectionTitle}>Directions</Text>
                {recipe.instructions.map((item, index) => (
                    <Text style={styles.directionText} key={index}>{item}</Text>
                ))}

                {/* View Comments Button
                    <Pressable style={styles.commentsButton}>
                        <Text style={styles.commentsButtonText}>View Comments</Text>
                    </Pressable>
                */}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#111" },
    scrollContainer: { padding: 16, paddingBottom: 100 },
    topBar: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderBottomColor: "#444",
        paddingHorizontal: 16,
        marginTop: 60,
    },
    topIconText: {
        fontSize: 18,
        color: "#fff",
    },
    topTitle: { fontSize: 20, fontWeight: "bold", color: "#fff" },
    topIcon: {
        fontSize: 24,
        color: "#fff",
        width: 32,
        alignItems: "center",
    },

    recipeImageBox: {
        position: "relative",
        height: 220,
        backgroundColor: "#fff",
        borderRadius: 12,
        marginBottom: 16,
        overflow: "hidden",
        justifyContent: "center",
        alignItems: "center",
    },
    recipeImage: { width: "100%", height: "100%", resizeMode: "cover" },
    emptyImageBox: { width: "100%", height: "100%", backgroundColor: "#fff" },
    recipeNameTag: {
        position: "absolute",
        bottom: 0,
        left: 0,
        backgroundColor: "#3D2C8D",
        paddingVertical: 4,
        paddingHorizontal: 12,
        borderTopRightRadius: 12,
    },
    recipeNameText: { color: "#fff", fontWeight: "bold", fontSize: 16 },

    userRow: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 16,
        gap: 8,
    },
    avatarPlaceholder: {
        width: 32,
        height: 32,
        backgroundColor: "#fff",
        borderRadius: 6,
    },
    usernameText: { fontWeight: "bold", fontSize: 16, color: "#fff" },
    dateText: { fontSize: 16, color: "#fff", marginLeft: "auto", marginRight: 8 },
    likeButton: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#F7B7B7",
        borderRadius: 8,
        paddingVertical: 4,
        paddingHorizontal: 8,
    },
    heartIcon: { fontSize: 16, marginRight: 4 },
    likeCount: { fontSize: 16, fontWeight: "bold" },

    sectionTitle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#fff",
        marginBottom: 12,
        marginTop: 16,
    },
    ingredientRow: {
        flexDirection: "row",
        backgroundColor: "#fff",
        paddingVertical: 12,
        paddingHorizontal: 12,
        borderRadius: 10,
        marginBottom: 8,
        justifyContent: "space-between",
    },
    ingredientLabel: { fontSize: 16, color: "#333" },
    ingredientAmount: { fontSize: 16, fontWeight: "bold", color: "#333" },

    directionRow: {
        flexDirection: "row",
        marginBottom: 12,
        gap: 12,
        alignItems: "flex-start",
    },
    directionImagePlaceholder: {
        width: 60,
        height: 60,
        backgroundColor: "#fff",
        borderRadius: 12,
    },
    directionText: { flex: 1, fontSize: 16, color: "#fff" },

    commentsButton: {
        marginTop: 20,
        backgroundColor: "#A5C4FF",
        paddingVertical: 14,
        borderRadius: 10,
        alignItems: "center",
    },
    commentsButtonText: { fontWeight: "bold", fontSize: 16, color: "#000" },
});
