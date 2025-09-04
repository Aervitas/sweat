import { Alert, StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import ScreenWrapper from '../../components/ScreenWrapper'
import { useAuth } from '../../context/AuthContext'
import { supabase } from '../../lib/supabase'

const Home = () => {

  const {user, setAuth} = useAuth();

  console.log(' this dude is logged in: ', user);
  const onLogout = async () => {
    setAuth(null);
    const {error} = await supabase.auth.signOut();
    if(error) {
      Alert.alert('Error signing out', error.message);
    }
  }

  return (
    <ScreenWrapper>
      <Text>home</Text>
      <Button title="logout" onPress={onLogout} />
    </ScreenWrapper>
  )
}

export default Home

const styles = StyleSheet.create({})