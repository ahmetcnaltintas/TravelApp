import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Stack } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import Colors from '@/constants/Colors'
import {useHeaderHeight} from '@react-navigation/elements'
import CategoryButtons from '@/components/CategoryButtons'
import Listings from '@/components/Listings'
import listingData from '@/data/destinations.json'
import GroupListings from '@/components/GroupListings'
import groupData from '@/data/groups.json'

const Page = () => {
  const headerHeight = useHeaderHeight();
  const [category, setCategory] = useState('Tümü');

  const onCategoryChanged = (category: string) => {
    console.log("Kategori", category);
    setCategory(category);
  }
  return (
    <>
    <Stack.Screen options={{ 
      headerTransparent: true,
      headerTitle: "",
      headerLeft: () => (
        <TouchableOpacity 
        onPress={() => {}} 
        style={{ 
          marginLeft:20, 
          backgroundColor: Colors.white,
          padding: 10,
          borderRadius: 10,
          shadowColor: "#171717",
          shadowOffset: {width: 2, height: 4},
          shadowOpacity: 0.2,
          shadowRadius: 3,
        }}>
          <Ionicons name='menu' size={20} color={Colors.black} />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity 
        onPress={() => {}} 
        style={{ 
          marginRight:20, 
          backgroundColor: Colors.white,
          padding: 10,
          borderRadius: 10,
          shadowColor: "#171717",
          shadowOffset: {width: 2, height: 4},
          shadowOpacity: 0.2,
          shadowRadius: 3,
        }}>
          <Ionicons name='notifications' size={20} color={Colors.black} />
        </TouchableOpacity>
      ),
     }} />
      <View style={[styles.container, {paddingTop: headerHeight}]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.headingText}>Hoşgeldin Admin!</Text>

          {/* ARAMA KUTUSU VE FİLTRELEME BUTONU START */}
          <View style={styles.searchSectionWrapper}>
              <View style={styles.searchBar}>
                <Ionicons name='search' size={18} style={{ marginRight:5, }} color={Colors.black} />
                <TextInput placeholder='Search' />
              </View>
              <TouchableOpacity onPress={() => {}} style={styles.filterBtn}>
                <Ionicons name='options' size={28} color={Colors.white} />
              </TouchableOpacity>
          </View>
          {/* ARAMA KUTUSU VE FİLTRELEME BUTONU END */}

          {/* KATEGORİ BUTONLARI START */}
          <CategoryButtons onCategoryChanged={onCategoryChanged} />
          {/* KATEGORİ BUTONLARI END */}

          {/* KATEGORİ LİSTELEME START */}
          <Listings listings={listingData} category={category} />
          {/* KATEGORİ LİSTELEME END */}

          {/* KATEGORİ GRUPLARI LİSTELEME END */}
          <GroupListings listings={groupData} />
          {/* KATEGORİ GRUPLARI LİSTELEME END */}
          
        </ScrollView>
      </View>
    </>
  )
}

export default Page

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
})