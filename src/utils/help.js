import {async} from '@firebase/util';
import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * Converts a URI to a Blob object.
 *
 * @param {string} uri - The URI of the file to convert to a Blob object.
 * @returns {Promise<Blob>} - A Promise that resolves to a Blob object representing the contents of the file at the specified URI.
 * @throws {Error} - If an error occurs while converting the file to a Blob object.
 *
 * @example
 * // Convert an image file to a Blob object
 * const uri = 'file://path/to/image.jpg';
 * uriToBlob(uri)
 *   .then(blob => {
 *     // Use the Blob object as needed
 *   })
 *   .catch(error => console.error(error));
 */
function uriToBlob(uri) {
  return new Promise((resolve, reject) => {
    fetch(uri)
      .then(response => response.blob())
      .then(blob => resolve(blob))
      .catch(error => reject(error));
  });
}

// Save the user LogIn  Session
const SaveIsUserLoggedIn = async () => {
  try {
    await AsyncStorage.setItem('isUserLoggedIn', 'true');
  } catch (error) {
    alert(error.message);
  }
};

// remove the user when user log out

const removeIsUserLoggedIn = async () => {
  try {
    await AsyncStorage.setItem('isUserLoggedIn', 'false');
  } catch (error) {
    alert(error.message);
  }
};
// get logged value of user
const getIsUSerLoggedIn = async () => {
  try {
    const response = await AsyncStorage.getItem('isUserLoggedIn');
    return response;
  } catch (error) {
    alert(error.message);
  }
};

const saveUserUid = async uid => {
  try {
    await AsyncStorage.setItem('user_ID', uid);
  } catch (error) {
    alert(error.message);
  }
};

const getUserUid = async () => {
  try {
    const response = await AsyncStorage.getItem('user_ID', uid);
    return response;
  } catch (error) {
    alert(error.message);
  }
};
export {
  uriToBlob,
  SaveIsUserLoggedIn,
  removeIsUserLoggedIn,
  getIsUSerLoggedIn,
  saveUserUid,
  getUserUid,
};
