import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, Modal } from 'react-native';
import { Stack, router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import Colors from '@/constants/Colors';
import { useHeaderHeight } from '@react-navigation/elements';
import CategoryButtons from '@/components/CategoryButtons';
import Listings from '@/components/Listings';
import listingData from '@/data/destinations.json';
import GroupListings from '@/components/GroupListings';
import groupData from '@/data/groups.json';
import { useNavigation } from '@react-navigation/native';
import { DrawerActions } from '@react-navigation/native';
import { useAuth } from '@/contexts/AuthContext'; 

const Page = () => {
  const navigation = useNavigation();
  const headerHeight = useHeaderHeight();
  const [category, setCategory] = useState('Tümü');
  const [menuVisible, setMenuVisible] = useState(false);
  const { user, signOut } = useAuth();

  const onCategoryChanged = (category: string) => {
    console.log("Kategori", category);
    setCategory(category);
  }

  const toggleMenu = () => setMenuVisible(!menuVisible);

  const handleLogout = async () => {
    await signOut();
    toggleMenu();
    router.push('/loading');
  };

  return (
    <>
      <Stack.Screen options={{ 
        headerTransparent: true,
        headerTitle: "",
        headerLeft: () => (
          <TouchableOpacity 
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())} 
            style={styles.headerButton}>
            <Ionicons name='menu' size={20} color={Colors.black} />
          </TouchableOpacity>
        ),
        headerRight: () => (
          <View>
            <TouchableOpacity 
              onPress={toggleMenu} 
              style={styles.headerButton}>
                <Image source={{ uri: user?.avatar }} style={styles.avatarImage} />
            </TouchableOpacity>

            <Modal
              animationType="fade"
              transparent={true}
              visible={menuVisible}
              onRequestClose={toggleMenu}
            >
              <TouchableOpacity 
                style={styles.modalOverlay} 
                activeOpacity={1} 
                onPress={toggleMenu}
              >
                <View style={styles.modalContent}>
                  <TouchableOpacity style={styles.menuItem} onPress={handleLogout}>
                    <Text>Logout</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={() => router.push('/(tabs)/profile')}>
                    <Text>Profile</Text>
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            </Modal>
          </View>
        ),
      }} />
      <View style={[styles.container, {paddingTop: headerHeight}]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.headingText}>Hoşgeldin {user?.name}</Text>

          {/* ARAMA KUTUSU VE FİLTRELEME BUTONU */}
          <View style={styles.searchSectionWrapper}>
            <View style={styles.searchBar}>
              <Ionicons name='search' size={18} style={{ marginRight:5, }} color={Colors.black} />
              <TextInput placeholder='Search' />
            </View>
            <TouchableOpacity onPress={() => {}} style={styles.filterBtn}>
              <Ionicons name='options' size={28} color={Colors.white} />
            </TouchableOpacity>
          </View>

          {/* KATEGORİ BUTONLARI */}
          <CategoryButtons onCategoryChanged={onCategoryChanged} />

          {/* KATEGORİ LİSTELEME */}
          <Listings listings={listingData} category={category} />

          {/* KATEGORİ GRUPLARI LİSTELEME */}
          <GroupListings listings={groupData} />
          
        </ScrollView>
      </View>
    </>
  )
}

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: Colors.bgColor,
  },
  headingText: {
    fontSize: 26,
    fontWeight: '800',
    color: Colors.black,
    marginTop: 10,
  },
  searchSectionWrapper: {
    flexDirection: 'row',
    marginVertical: 20,
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: Colors.white,
    padding: 16,
    borderRadius: 10,
  },
  filterBtn: {
    backgroundColor: Colors.primaryColor,
    padding: 12,
    borderRadius: 10,
    marginLeft: 20,
  },
  headerButton: {
    marginHorizontal: 20,
    backgroundColor: Colors.white,
    padding: 10,
    borderRadius: 10,
    shadowColor: "#171717",
    shadowOffset: {width: 2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  avatarImage: {
    width: 25,
    height: 25,
    borderRadius: 10,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    marginTop: 60,
    marginRight: 10,
    backgroundColor: Colors.white,
    borderRadius: 10,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  menuItem: {
    padding: 10,
  },

});