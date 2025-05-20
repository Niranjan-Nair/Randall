import React from "react";
import { Redirect } from "expo-router";

// This just redirects to feed
export default function Goofage() {
    return <Redirect href="/feed"/>;
}
