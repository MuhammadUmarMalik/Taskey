import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {color} from '../layout/layout.js';
import Button from '../components/Button.js';
const Splash = ({navigation}) => {
  return (
    <View style={styles.conatainer}>
      <View style={styles.section1}>
        <Image
          source={require('../assets/image/Layer2.png')}
          style={styles.icon}
        />
        <Image
          source={require('../assets/image/image5.png')}
          style={styles.hero}
        />
      </View>
      <View style={styles.section2}>
        <Image
          source={require('../assets/image/Group1418.png')}
          style={styles.slideImg}
        />
        <Text style={styles.Logo}>Taskey</Text>
        <Text style={styles.heading}>Building Better Workplaces </Text>
        <Text style={styles.description}>
          Create a unique emotional story that {'\n'}describes better than words
        </Text>
        <Button
          title={'Get Started'}
          onPress={() => navigation.navigate('Onboard1')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  conatainer: {
    flex: 1,
    alignItems: 'center',
  },
  hero: {
    width: '100%',
    height: '50%',
  },
  icon: {
    alignSelf: 'flex-start',
    position: 'absolute',
    zIndex: 1,
    margin: '1%',
  },
  section1: {
    backgroundColor: color.primary,
    width: '100%',
    height: '100%',
  },
  section2: {
    backgroundColor: color.highlight,
    width: '100%',
    height: '50%',
    bottom: 1,
    position: 'absolute',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  slideImg: {
    alignSelf: 'center',
    marginTop: '2%',
  },
  Logo: {
    color: color.primary,
    fontFamily: 'PollerOne-Regular',
    fontSize: 46,
    fontWeight: '400',
    textAlign: 'center',
    marginTop: '5%',
    marginBottom: '3%',
    lineHeight: 48,
  },
  heading: {
    color: color.secondary,
    fontFamily: 'ProductSans-Bold',
    fontSize: 37,
    fontWeight: '700',
    textAlign: 'center',
    letterSpacing: 0.8,
    lineHeight: 45,
  },
  description: {
    color: color.textSecondary,
    fontFamily: 'ProductSans-Bold',
    fontSize: 14,
    fontWeight: '700',
    textAlign: 'center',
    letterSpacing: 0,
    lineHeight: 24,
  },
});
export default Splash;
