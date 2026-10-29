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
  container: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: spacing.vMd,
  },
  contentWrapper: {
    alignItems: 'center',
    gap: verticalScale(30),
  },
  imageWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashImage: {
    width: scale(280),
    height: verticalScale(260),
  },
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: scale(8),
  },
  dot: {
    backgroundColor: colors.border,
    width: scale(10),
    height: verticalScale(8),
    borderRadius: moderateScale(10),
  },
  activeDot: {
    backgroundColor: colors.primary,
    width: scale(22),
    height: verticalScale(8),
    borderRadius: moderateScale(10),
  },
  titleContainer: {
    width: scale(220),
  },
  titleText: {
    fontSize: typography.size.title,
    fontWeight: typography.weight.medium,
    textAlign: 'center',
    color: colors.textDark,
    lineHeight: verticalScale(28),
  },
  buttonContainer: {
    gap: verticalScale(16),
    alignItems: 'center',
  },
  nextBtn: {
    backgroundColor: colors.primary,
    width: scale(200),
    height: verticalScale(48),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: moderateScale(12),
  },
  nextBtnText: {
    fontWeight: typography.weight.semiBold,
    fontSize: typography.size.lg,
    color: colors.white,
  },
  skipBtn: {
    padding: spacing.xs,
  },
  skipBtnText: {
    color: colors.primary,
    fontSize: typography.size.lg,
    textAlign: 'center',
    fontWeight: typography.weight.medium,
  },
});

export default styles;
