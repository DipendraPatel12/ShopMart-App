import { StyleSheet } from 'react-native';
import {
  scale,
  moderateScale,
  colors,
  spacing,
} from '../constants';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    shadowColor: colors.black,
    shadowOpacity: 0.1,
    shadowRadius: moderateScale(4),
    shadowOffset: { width: 0, height: 2 },
    borderRadius: moderateScale(10),
    marginRight: spacing.sm,
    paddingVertical: spacing.vXs,
    paddingHorizontal: scale(12),
  },
});

export default styles;
