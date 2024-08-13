import { FontAwesome } from '@expo/vector-icons';
import { Stack } from 'expo-router';

export default function DrawerLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="index"
        options={{
          title: "Kurslarım",
        }}
      />
      <Stack.Screen
        name="detail"
        options={{
          title: "Detay",
        }}
      />
    </Stack>
  );
}