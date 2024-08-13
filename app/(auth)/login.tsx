import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import { useAuth } from '../../contexts/AuthContext';
import { Stack, router } from 'expo-router';
import Colors from '@/constants/Colors';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

export default function LoginScreen() {
  const [email, setEmail] = useState('john@mail.com'); // input'a varsayılan email gönderildi
  const [password, setPassword] = useState('changeme'); // input'a varsayılan password gönderildi
  const { signIn } = useAuth();

  const handleLogin = async () => {
    try {
      await signIn(email, password);
      router.replace('/(drawer)');
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <>
    <Stack.Screen
      options={{
        headerTransparent: true,
        headerTitle: "",
        headerLeft: () => (
          <TouchableOpacity onPress={() => router.back()} style={styles.headerLeftBtn}>
            <View style={styles.headerLeftContainer}>
              <Feather name='arrow-left' size={20} color={Colors.black} />
            </View>
          </TouchableOpacity>
        ),
      }}
    />

    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity onPress={handleLogin}>
        <Text>Login</Text>
      </TouchableOpacity>

      <Button title="Login" onPress={handleLogin} />
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  button: {
    color: Colors.primaryColor,
  },
  headerLeftBtn: {
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    borderRadius: 10,
    padding: 4,
  },
  headerLeftContainer: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    padding: 6,
  },
});