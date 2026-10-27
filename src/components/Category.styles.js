import { StyleSheet } from 'react-native';
import {
  scale,
  verticalScale,
  moderateScale,
  colors,
  spacing,
  typography,
} from '../constants';

export const styles = StyleSheet.create({
  container: {
    marginBottom: spacing.vMd,
  },
  categoryTitle: {
    fontWeight: typography.weight.semiBold,
    marginLeft: spacing.lg,
    fontSize: typography.size.lg,
    color: colors.textDark,
  },
  itemWrapper: {
    marginLeft: spacing.md,
    marginTop: spacing.vSm,
    height: verticalScale(28),
  },
  categoryCard: {
    backgroundColor: colors.chipBg,
    borderRadius: moderateScale(10),
    paddingHorizontal: scale(12),
    paddingVertical: verticalScale(4),
    elevation: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryTextNames: {
    color: colors.textDark,
    fontSize: typography.size.xs,
    fontWeight: typography.weight.medium,
    textTransform: 'capitalize',
  },
  highlightAllTextBg: {
    backgroundColor: colors.black,
    borderRadius: moderateScale(10),
    paddingHorizontal: scale(14),
    paddingVertical: verticalScale(4),
    elevation: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  highlightAllText: {
    color: colors.white,
    fontSize: typography.size.xs,
    fontWeight: typography.weight.semiBold,
  },
});

export default styles;
