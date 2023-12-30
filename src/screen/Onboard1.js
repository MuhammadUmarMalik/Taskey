import {
  View,
  Button,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {color} from '../layout/layout';
const Onboard1 = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/image/onboardImage.png')}
        style={styles.heroImage}
      />
      <Text style={styles.heroText}>Task Management</Text>
      <Text style={styles.heading}>
        Let's create a {'\n'}
        <Text style={{color: color.primary, fontWeight: 'bold'}}>space </Text>
        for your {'\n'}workflows.
      </Text>
      <Image
        source={require('../assets/image/slicebar.png')}
        style={styles.slicebar}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => navigation.replace('SignIn')}>
          <Text style={styles.skipButton}>Skip</Text>
        </TouchableOpacity>
        <Image
          source={require('../assets/image/Rectangle5904.png')}
          style={styles.RectangleImage}
        />
        <TouchableOpacity
          style={styles.Arrow}
          onPress={() => navigation.navigate('Onboard2')}>
          <Image
            source={require('../assets/image/Arrow-Right.png')}
            style={styles.arrowImg}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.highlight,
  },
  heroImage: {
    width: '100%',
    height: '60%',
  },
  heroText: {
    fontFamily: 'ProductSans-Bold',
    fontSize: 18,
    fontWeight: '400',
    color: color.primary,
    marginLeft: '10%',
  },
  heading: {
    fontFamily: 'ProductSans-Bold',
    fontSize: 35,
    fontWeight: '400',
    color: color.secondary,
    marginLeft: '10%',
  },
  slicebar: {
    marginLeft: '15%',
    marginTop: '10%',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  skipButton: {
    color: color.secondary,
    marginLeft: '25%',
    marginTop: '60%',
    fontSize: 14,
    fontFamily: 'ProductSans-Bold',
    fontWeight: '400',
  },
  RectangleImage: {},
  Arrow: {
    position: 'absolute',
  },
  arrowImg: {
    left: 300,
    top: 70,
  },
});
export default Onboard1;
