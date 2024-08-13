import { 
  Dimensions,
  Image, 
  ImageBackground, 
  SafeAreaView, 
  ScrollView, 
  StatusBar, 
  StyleSheet, 
  Text, 
  TouchableOpacity,
  View 
} from 'react-native';
import React from 'react';
import { router } from 'expo-router';
import Colors from '@/constants/Colors';

const { width, height } = Dimensions.get('screen');

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="transparent" translucent={true} />
      <ImageBackground 
        source={require('assets/images/introbg.png')} 
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled={true}
          style={styles.scroll_container}
        >
          {/* SCREEN ONE */}
          <View style={styles.screen}>
            <View style={styles.image_container}>
              <Image
                source={require('assets/images/slider1.png')}
                style={styles.image}
              />
            </View>
            <View style={styles.circle_container}>
              <View style={styles.circle1} />
              <View style={styles.circle2} />
              <View style={styles.circle3} />
            </View>
            <View style={styles.text_container}>
              <Text style={styles.text_title}>Hoş Geldiniz!</Text>
              <Text style={styles.text_description}>
                Uygulamamızda sizleri görmekten mutluluk duyuyoruz.
              </Text>
            </View>
          </View>

          {/* SCREEN TWO */}
          <View style={styles.screen}>
            <View style={styles.image_container}>
              <Image
                source={require('assets/images/slider2.png')}
                style={styles.image}
              />
            </View>
            <View style={styles.circle_container}>
              <View style={styles.circle3} />
              <View style={styles.circle4} />
              <View style={styles.circle3} />
            </View>
            <View style={styles.text_container}>
              <Text style={styles.text_title}>Harika Özellikler</Text>
              <Text style={styles.text_description}>
                Uygulamamızda keşfedebileceğiniz birçok harika özellik bulunuyor.
              </Text>
            </View>
          </View>

          {/* SCREEN THREE */}
          <View style={styles.screen}>
            <View style={styles.image_container}>
              <Image
                source={require('assets/images/slider3.png')}
                style={styles.image3}
              />
            </View>
            <View style={styles.circle_container}>
              <View style={styles.circle3} />
              <View style={styles.circle2} />
              <View style={styles.circle1} />
            </View>
            <View style={styles.text_container}>
              <Text style={styles.text_title}>Hemen Başlayın</Text>
              <Text style={styles.text_description}>
                Uygulamamıza giriş yaparak tüm özelliklerden faydalanmaya başlayın.
              </Text>
              <TouchableOpacity
                onPress={() => router.push('/(auth)/login')}
                style={styles.btn}
              >
                <Text style={styles.btn_text}>Giriş Yap</Text>
              </TouchableOpacity>
            </View>
          </View>

        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  scroll_container: {
    flex: 1,
  },
  screen: {
    width: width,
    height: height, // Her bir ekranın tam ekran kaplamasını sağla
    justifyContent: 'center',
  },
  image_container: {
    flex: 1.5,
    justifyContent: 'center',
  },
  image: {
    width: width - 40,
    height: height / 3,
    resizeMode: 'stretch',
    alignSelf: 'center',
  },
  image3: {
    width: width,
    height: height / 3.5,
    resizeMode: 'stretch',
    alignSelf: 'center',
  },
  circle_container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle1: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: Colors.primaryColor,
  },
  circle2: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: Colors.secondary,
    marginHorizontal: 8,
  },
  circle3: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: Colors.secondary,
  },
  circle4: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: Colors.primaryColor,
    marginHorizontal: 8,
  },
  text_container: {
    paddingHorizontal: 20,
    flex: 1,
    marginTop: 30,
  },
  text_title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.black,
    textAlign: 'center',
  },
  text_description: {
    fontSize: 17,
    color: Colors.black,
    marginTop: 17,
    textAlign: 'center',
  },
  btn: {
    paddingTop: 10,
    width: width / 2.5,
    alignSelf: 'center',
    marginVertical: 20,
    marginTop: 40,
    backgroundColor: Colors.primaryColor,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn_text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});
