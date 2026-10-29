import { StyleSheet } from 'react-native';
import {
  scale,
  verticalScale,
  moderateScale,
  colors,
  spacing,
  typography,
} from '../../constants';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingHorizontal: spacing.md,
  },
  illustration: {
    width: scale(280),
    height: verticalScale(200),
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: verticalScale(6),
  },
  headingText: {
    fontSize: typography.size.heading,
    fontWeight: typography.weight.bold,
    color: colors.textDark,
  },
  subText: {
    color: colors.textMuted,
    fontWeight: typography.weight.semiBold,
    fontSize: typography.size.base,
  },
  continueBtn: {
    backgroundColor: colors.primary,
    width: scale(220),
    height: verticalScale(50),
    borderRadius: moderateScale(25),
    justifyContent: 'center',
    alignItems: 'center',
  },
  continueText: {
    color: colors.white,
    fontWeight: typography.weight.bold,
    fontSize: typography.size.base,
  },
});

export default styles;
