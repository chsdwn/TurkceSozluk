import { Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('screen');
export const SCREEN_WIDTH = width;
export const SCREEN_HEIGHT = height;

export const IS_ANDROID = Platform.OS === 'android';
export const IS_IOS = Platform.OS === 'ios';
