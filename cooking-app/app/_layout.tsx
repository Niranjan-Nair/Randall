import React, { createContext, Dispatch, SetStateAction, useContext, useState } from 'react';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { useColorScheme } from '@/hooks/useColorScheme';
import { PostData, ProfileData } from "@/constants/Types";
import * as SecureStore from "expo-secure-store";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import { Profile } from '@/components/ui/Profile';

export const PostsContext = createContext<{
    posts: PostData[];
    setPosts: Dispatch<SetStateAction<PostData[]>> | null;
}>({ posts: [], setPosts: null });

export const UserContext = createContext<{
    user: string;
    setUser: Dispatch<SetStateAction<string>> | null;
}>({ user: "", setUser: null });

export const ProfileContext = createContext<{
    profile: ProfileData | null;
    setProfile: Dispatch<SetStateAction<ProfileData>> | null;
}>({profile: null, setProfile: null});

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const colorScheme = useColorScheme();

    const [posts, setPosts] = useState<PostData[]>([]);
    const [user, setUser] = useState<string>(uuidv4());
    const [profile, setProfile] = useState<ProfileData>({
        preferences: [false, false, false, false],
        bio: "Edit your bio here...",
        username: "@username",
        allergies: [],
    });


    async function getUser() {
        let uuid = user;
        let id = (await SecureStore.getItemAsync("userid"))?.replaceAll(/^[\"\\]+|[\"\\]+$/g, "");

        if (id) {
            setUser(id.replaceAll(/^[\"\\]+|[\"\\]+$/g, ""));
            uuid = id.replaceAll(/^[\"\\]+|[\"\\]+$/g, "");
        }

        await SecureStore.setItemAsync("userid", JSON.stringify(uuid).replaceAll(/^[\"\\]+|[\"\\]+$/g, ""));
    }

    useEffect(() => {
        getUser();
    }, []);

    const [loaded] = useFonts({
        SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    });

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync();
        }
    }, [loaded]);

    if (!loaded) {
        return null;
    }

    return (
        <ProfileContext.Provider value={{profile, setProfile}}>
            <UserContext.Provider value={{user, setUser}}>
                <PostsContext.Provider value={{posts, setPosts}}>
                    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
                        <Stack>
                            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                            <Stack.Screen name="+not-found" />
                        </Stack>
                        <StatusBar style="auto" />
                    </ThemeProvider>
                </PostsContext.Provider>
            </UserContext.Provider>
        </ProfileContext.Provider>
    );
}
