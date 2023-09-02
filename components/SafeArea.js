import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from 'react-native';

import { Colors } from '../theme/Colors'

const SafeAreaComponent = ({ children, isScrollView }) => {
  if (isScrollView) {
    return (
      <SafeAreaView style={styles.container(Colors.black)} >
        <ScrollView>
          <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
            <View style={styles.viewContainer}>
              {children}
            </View>
          </View>
          <StatusBar style="light" />
        </ScrollView>
      </SafeAreaView>
    )
  } else {
    return (
      <SafeAreaView style={styles.container(Colors.black)} >
        <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
          <View style={styles.viewContainer}>
            {children}
          </View>
        </View>
        <StatusBar style="light" />
      </SafeAreaView>
    )
  }
}

export const SafeArea = ({ children, isScrollView }) => {
  return (
    <SafeAreaComponent isScrollView={isScrollView}>
      {children}
    </SafeAreaComponent>
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
    width: '100%',
    maxWidth: 720,
    gap: 20
  }
});

export default SafeArea;
