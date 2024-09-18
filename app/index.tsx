/* eslint-disable prettier/prettier */
import { Redirect } from "expo-router";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = (): void => {
    return <Redirect href='/(auth)welcome' />;
}

export default Home;