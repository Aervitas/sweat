import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { theme } from '../constants/theme'
import Ionicons from '@expo/vector-icons/Ionicons';

const BackButton = ({size=24, router}) => {
  return (
    <Pressable onPress={()=> router.back()} style={styles.button}>
        <Ionicons name="return-down-back-outline" size={size} color={theme.colors.text}/>
    </Pressable>
  )
}

export default BackButton

const styles = StyleSheet.create({
    button: {
        alignSelf: 'flex-start',
        padding: 5,
        borderRadius: theme.radius.sm,
        backgroundColor: 'rgba(0,0,0,0.07)'
    }
})