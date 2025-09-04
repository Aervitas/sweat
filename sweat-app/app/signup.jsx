import { StyleSheet, Text, TextInput, View, Pressable, Alert } from 'react-native'
import React, { useRef } from 'react'
import ScreenWrapper from '../components/ScreenWrapper'
import Feather from '@expo/vector-icons/Feather';
import Foundation from '@expo/vector-icons/Foundation';
import Ionicons from '@expo/vector-icons/Ionicons';
import { StatusBar } from 'expo-status-bar';
import { useRouter } from 'expo-router';
import BackButton from '../components/BackButton';
import { heightPercentage, widthPercentage } from '../helpers/common';
import { theme } from '../constants/theme';
import Input from '../components/Input';
import Button from '../components/Button';
import { supabase } from '../lib/supabase';


const Signup = () => {
    const router = useRouter();
    const emailRef = useRef("");
    const nameRef = useRef("");
    const passwordRef = useRef("");
    const [loading, setLoading] = React.useState(false);

    const onSubmit = async () => {
        if(!emailRef.current || !passwordRef.current || !nameRef.current){
            alert("Please fill all the fields");
            return;
        }
        
        const name = nameRef.current.trim();
        const email = emailRef.current.trim();
        const password = passwordRef.current.trim();
        
        setLoading(true);

        const {data: {session}, error} = await supabase.auth.signUp({
            email,
            password,
            options: {
                data: {
                    name
                }
            }
        });

        setLoading(false);
        //console.log('session: ', session);
        //console.log('error: ', error);
        if(error) {
            Alert.alert('Error', error.message);
        }
    }

  return (
    <ScreenWrapper bg="white">
      <StatusBar style="dark" />
      <View style={styles.container}>
        <BackButton router={router} />
        <View>
            <Text style={styles.welcomeText}>Get Started</Text>
        </View>

        <View style={styles.form}>
            <Text style={{fontSize: heightPercentage(1.5), color: theme.colors.text}}>
                Please fill all details to sign up.
            </Text>
            <Input
                icon={<Ionicons name="person" size={24} color="black" />}
                placeholder='Enter your name'
                onChangeText={value=> nameRef.current = value}
            />
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
            
            {/* button */}
            <Button title={'Sign Up'} loading={loading} onPress={onSubmit} />
        </View>

        {/* Footer */}
        <View style={styles.footer}>
            <Text style={styles.footerText}>
                Already have an account?
            </Text>
            <Pressable onPress={()=> router.push('login')}>
                <Text style={[styles.footerText, {color: theme.colors.primaryDark, fontWeight: theme.fonts.semibold}]}>Log In</Text>
            </Pressable>
        </View>
      </View>
    </ScreenWrapper>
  )
}

export default Signup

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