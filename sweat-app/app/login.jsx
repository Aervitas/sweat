import { StyleSheet, Text, TextInput, View, Pressable } from 'react-native'
import React, { useRef } from 'react'
import ScreenWrapper from '../components/ScreenWrapper'
import Feather from '@expo/vector-icons/Feather';
import Foundation from '@expo/vector-icons/Foundation';
import { StatusBar } from 'expo-status-bar';
import { useRouter } from 'expo-router';
import BackButton from '../components/BackButton';
import { heightPercentage, widthPercentage } from '../helpers/common';
import { theme } from '../constants/theme';
import Input from '../components/Input';
import Button from '../components/Button';


const login = () => {
    const router = useRouter();
    const emailRef = useRef("");
    const passwordRef = useRef("");
    const [loading, setLoading] = React.useState(false);

    const onSubmit = async () => {
        if(!emailRef.current || !passwordRef.current){
            alert("Please fill all the fields");
            return;
        }

        
    }

  return (
    <ScreenWrapper bg="white">
      <StatusBar style="dark" />
      <View style={styles.container}>
        <BackButton router={router} />
        <View>
            <Text style={styles.welcomeText}>Welcome Back!</Text>
        </View>

        <View style={styles.form}>
            <Text style={{fontSize: heightPercentage(1.5), color: theme.colors.text}}>
                Please log in to continue.
            </Text>
            <Input
                icon={<Feather name="mail" size={24} color="black" />}
                placeholder='Enter your email'
                onChangeText={value=> emailRef.current = value}
            />
            <Input
                icon={<Foundation name="key" size={24} color="black" />}
                placeholder='Enter your password'
                onChangeText={value=> passwordRef.current = value}
                secureTextEntry
            />
            <Text style={styles.forgotPassword}>
                Forgot Password?
            </Text>
            {/* button */}
            <Button title={'Log In'} loading={loading} onPress={onSubmit} />
        </View>

        {/* Footer */}
        <View style={styles.footer}>
            <Text style={styles.footerText}>
                Don't have an account?
            </Text>
            <Pressable onPress={()=> router.push('signup')}>
                <Text style={[styles.footerText, {color: theme.colors.primaryDark, fontWeight: theme.fonts.semibold}]}>Sign Up</Text>
            </Pressable>
        </View>
      </View>
    </ScreenWrapper>
  )
}

export default login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 45,
        paddingHorizontal: widthPercentage(5),
    },
    welcomeText: {
        fontSize: heightPercentage(4),
        fontWeight: theme.fonts.bold,
        color: theme.colors.text,
    },
    form: {
        gap: 25,
    },
    forgotPassword: {
        textAlign: 'right',
        fontWeight: theme.fonts.semibold,
        color: theme.colors.text,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5
    }, 
    footerText: {
        textAlign: 'center',
        color: theme.colors.text,
        fontSize: heightPercentage(1.7),
    }
})