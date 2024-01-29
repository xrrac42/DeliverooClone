import { View, Text, ScrollView, StyleSheet, SafeAreaView} from 'react-native'
import React from 'react'
import Colors from '../constants/Colors';
import Restaurants from '../Components/Restaurants';
import Categories from '../Components/Categories';


const Page = () => {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={{ paddingBottom: 40, paddingTop: "20%"}}>
          <Categories />
          <Text style={styles.header}>Top picks in your neighbourhood</Text>
          <Restaurants />
          <Text style={styles.header}>Offers near you</Text>
          <Restaurants />
        </ScrollView>
      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      top: 50,
      backgroundColor: Colors.lightGrey,
    },
    header: {
      fontSize: 18,
      fontWeight: 'bold',
      marginTop: 16,
      marginBottom: 8,
      paddingHorizontal: 16,
    },
  });
  
  export default Page;