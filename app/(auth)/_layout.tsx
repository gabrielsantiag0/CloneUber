/* eslint-disable prettier/prettier */
import { Stack } from 'expo-router';

const Layout = () =>{


  return (
      <Stack>
        <Stack.Screen name="Welcome" options={{ headerShown: false }} />
        <Stack.Screen name="Sign-up" options={{ headerShown: false }} />
        <Stack.Screen name="Sign-in" options={{ headerShown: false }} />
      </Stack>
  );
}

export default Layout;