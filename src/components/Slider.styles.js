import { StyleSheet } from 'react-native';
import {
  scale,
  verticalScale,
  moderateScale,
  colors,
  spacing,
} from '../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: spacing.vSm,
  },
  slideWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: moderateScale(20),
    position: 'relative',
    height: '100%',
  },
  slideImage: {
    width: '92%',
    height: '92%',
    resizeMode: 'cover',
    borderRadius: moderateScale(20),
  },
  paginationContainer: {
    position: 'absolute',
    bottom: verticalScale(18),
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dotStyle: {
    backgroundColor: colors.white,
    borderRadius: moderateScale(50),
    width: scale(8),
    height: scale(8),
  },
  activeDotStyle: {
    backgroundColor: colors.primary,
    borderRadius: moderateScale(50),
    width: scale(16),
    height: scale(8),
  },
  paginationGap: {
    gap: scale(6),
  },
});

export default styles;
