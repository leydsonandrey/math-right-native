import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from 'react-native';

export const SafeArea = ({ children, background }) => {
  return (
    <SafeAreaView style={styles.container(background)}>
      <ScrollView>
        <View style={styles.viewContainer}>
          {children}
        </View>
        <StatusBar style="light" />
    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: (color) => ({
    flex: 1,
    justifyContent: 'center',
    backgroundColor: color,
    paddingTop: StatusBar.currentHeight,
    paddingHorizontal: 20,
  }),
  viewContainer: {
    // paddingHorizontal: 20
  }
});

export default SafeArea;
