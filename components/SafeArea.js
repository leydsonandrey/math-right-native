import { StatusBar } from 'expo-status-bar'
import React from 'react'
import {
  View,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Platform
} from 'react-native'

import { Colors } from '../ui/Colors'

export function SafeAreaComponent({ children, notScrollView }) {
  if (notScrollView) {
    return (
      <SafeAreaView style={styles.container(Colors.black)} >
        <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
          <View style={styles.viewContainer(notScrollView)}>
            {children}
          </View>
        </View>
        <StatusBar style="light" />
      </SafeAreaView>
    )
  } else {
    return (
      <SafeAreaView style={styles.container(Colors.black)}>
        <ScrollView>
          <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
            <View style={styles.viewContainer(notScrollView)}>
              {children}
            </View>
          </View>
          <StatusBar style="light" />
        </ScrollView>
      </SafeAreaView>
    )
  }
}

export default function SafeArea({ children, notScrollView }) {
  return (
    <SafeAreaComponent notScrollView={notScrollView}>
      {children}
    </SafeAreaComponent>
  )
}

const styles = StyleSheet.create({
  container: (color) => ({
    flex: 1,
    justifyContent: 'center',
    backgroundColor: color,
    ...Platform.select({
      ios: {
        paddingTop: StatusBar.currentHeight,
      },
      android: {
        paddingTop: StatusBar.currentHeight,
      },
      default: {
        paddingTop: 0
      }
    })
  }),
  viewContainer: (notScrollView) => ({
    width: '100%',
    maxWidth: 500,
    paddingHorizontal: 20,
    paddingBottom: 20,
    marginTop: notScrollView ? 0 : 20,
    gap: 15,
  })
})
