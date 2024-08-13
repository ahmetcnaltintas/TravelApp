import { Drawer } from 'expo-router/drawer';
import { FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons';

export default function DrawerLayout() {
  return (
    <Drawer screenOptions={{ headerShown: false }}>
      <Drawer.Screen
        name="(tabs)"
        options={{
          drawerLabel: "Anasayfa",
          title: "Home",
          headerShown: false,
          drawerIcon: ({ color }) => <FontAwesome name="home" size={24} color={color} />,
        }}
      />
      <Drawer.Screen
        name="(courses)"
        options={{
          drawerLabel: "Kurslarım",
          title: "Kurs",
          drawerIcon: ({ color }) => <FontAwesome name="book" size={24} color={color} />,
        }}
      />
      <Drawer.Screen
        name="(exams)"
        options={{
          drawerLabel: "Sınavlarım",
          title: "Kurs",
          drawerIcon: ({ color }) => <FontAwesome name="pencil-square" size={24} color={color} />,
        }}
      />
      <Drawer.Screen
        name="(live-lesson)"
        options={{
          drawerLabel: "Canlı Derslerim",
          title: "Kurs",
          drawerIcon: ({ color }) => <MaterialIcons name="play-lesson" size={24} color={color} />,
        }}
      />
      <Drawer.Screen
        name="(purchase-history)"
        options={{
          drawerLabel: "Satın Alma Geçmişi",
          title: "Kurs",
          drawerIcon: ({ color }) => <Ionicons name="card" size={24} color={color} />,
        }}
      />
    </Drawer>
  );
}
