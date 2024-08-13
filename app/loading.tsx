import { Dimensions, Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import Colors from '@/constants/Colors';
import { router } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { width, height } = Dimensions.get('window');

const Loading = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState<boolean | null>(null);

  useEffect(() => {
    checkFirstLaunch();
  }, []);

  const checkFirstLaunch = async () => {
    try {
      const value = await AsyncStorage.getItem('alreadyLaunched');
      if (value === null) {
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    } catch (error) {
      console.error('Error checking first launch:', error);
      setIsFirstLaunch(false);
    }
  };

  const handleButtonPress = async () => {
    if (isFirstLaunch) {
      await AsyncStorage.setItem('alreadyLaunched', 'true');
      router.push('/(auth)/intro');
    } else {
      router.push('/(auth)/login');
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('assets/images/bg.png')} style={styles.backgroundImage} />
      <View style={styles.content}>
        <View style={styles.logoContainer}>
          <Image source={require('assets/images/animonik.png')} style={styles.logo} />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleButtonPress} style={styles.button}>
            <Text style={styles.buttonText}>
              {isFirstLaunch ? "Animonik'e Hoşgeldiniz" : "Devam Et"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    width: width,
    height: height,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    marginBottom: 150,
  },
  logo: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
  },
  buttonContainer: {
    marginTop: 50,
  },
  button: {
    backgroundColor: Colors.black,
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 19,
    fontWeight: 'bold',
  },
});
