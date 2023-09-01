import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  useWindowDimensions,
} from 'react-native';

export const SafeArea = ({ children, background }) => {
  const { height, width, scale, fontScale } = useWindowDimensions();
  console.log(height, width, scale, fontScale)
  return (
    <SafeAreaView style={styles.container(background)}>
      <ScrollView>
        <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
          <View style={styles.viewContainer}>
            {children}
          </View>
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
    width: '100%',
    maxWidth: 720
  }
});

export default SafeArea;
