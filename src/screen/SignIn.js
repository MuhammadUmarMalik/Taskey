import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {color} from '../layout/layout';
import Button from '../components/Button';

const SignIn = ({navigation}) => {
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = React.useState('');
  handleSubmit = () => {};
  return (
    <View style={styles.container}>
      <View style={styles.backBtn}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../assets/image/Back.png')}
            style={styles.back}
          />
        </TouchableOpacity>

        <Text style={styles.SignInText}>Sign In</Text>
        <Image
          source={require('../assets/image/Ellipse.png')}
          style={styles.ellipse}
        />
      </View>
      <View style={styles.textSection}>
        <Text style={styles.heading}>Welcome Back</Text>
        <Text style={styles.description}>
          Please Inter your email address {'\n'}and password for Login
        </Text>
      </View>
      <View style={styles.form}>
        <TextInput
          placeholder="Enter your Email"
          placeholderTextColor={color.secondary}
          style={styles.email}
          value={email}
          onChangeText={email => onChangeEmail(email)}
          keyboardType="email-address"
        />
        <TextInput
          placeholder="Enter your password"
          placeholderTextColor={color.secondary}
          style={styles.password}
          value={password}
          onChangeText={password => onChangePassword(password)}
          secureTextEntry={true}
          // onChangeText={onChangeNumber}
        />
        <TouchableOpacity
          onPress={() => navigation.replace('ChangePassword')}
          style={styles.forgetPassLink}>
          <Text style={styles.forgotPassText}>Forgetten Password?</Text>
        </TouchableOpacity>
        <Button
          title={'Sign In'}
          onPress={handleSubmit}
          style={styles.signInBtn}
        />
      </View>
      <View style={styles.SignupLinkWrapper}>
        <Text style={styles.SignupLink}>Not Registrar Yet?</Text>
        <TouchableOpacity onPress={() => navigation.replace('SignUp')}>
          <Text style={styles.SignupTextLink}> Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: color.highlight,
  },
  backBtn: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  back: {
    width: 32,
    height: 32,
    top: 12,
    left: 15,
  },
  SignInText: {
    color: color.secondary,
    alignSelf: 'center',
    fontFamily: 'Poppins-Medium',
    fontWeight: '500',
    fontSize: 18,
    left: 5,
  },
  ellipse: {
    top: 35,
    right: 30,
  },
  textSection: {
    alignItems: 'flex-start',
    left: 15,
    top: 90,
    height: '20%',
  },
  heading: {
    color: color.secondary,
    fontWeight: '600',
    fontSize: 35,
    fontFamily: 'Poppins-SemiBold',
    lineHeight: 45,
  },
  description: {
    color: color.textSecondary,
    fontWeight: '400',
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    lineHeight: 24,
    width: 248,
    top: 12,
  },
  form: {
    top: 70,
    height: '40%',
  },
  email: {
    backgroundColor: color.highlight,
    width: 343,
    height: 60,
    padding: 15,
    color: color.secondary,
    position: 'absolute',
    fontFamily: 'Poppins-Bold',
    borderRadius: 16,
    alignSelf: 'center',
  },
  password: {
    backgroundColor: color.highlight,
    width: 343,
    height: 60,
    padding: 15,
    color: color.secondary,
    position: 'absolute',
    fontFamily: 'Poppins-Bold',
    borderRadius: 16,
    marginTop: '20%',
    alignSelf: 'center',
  },
  forgetPassLink: {
    top: 150,
    width: '90%',
    height: '50%',
  },
  forgotPassText: {
    color: color.secondary,
    fontFamily: 'Poppins-Bold',
    fontSize: 14,
    textAlign: 'right',
    fontWeight: '500',
  },
  signInBtn: {
    width: '90%',
    height: '30%',
    position: 'absolute',
  },
  SignupLinkWrapper: {
    height: '30%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    color: color.secondary,
  },
  SignupLink: {
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    color: color.textSecondary,
    fontFamily: 'Poppins-Regular',
    fontWeight: '400',
    fontSize: 14,
  },
  SignupTextLink: {
    color: color.primary,
    fontFamily: 'Poppins-SemiBold',
    fontWeight: '600',
    fontSize: 14,
  },
});
export default SignIn;
