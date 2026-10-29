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
    backgroundColor: colors.background,
    position: 'relative',
  },
  columnWrapper: {
    justifyContent: 'space-evenly',
    paddingHorizontal: spacing.xs,
  },
  noFavoriteCard: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center',
    gap: spacing.vMd,
  },
  emptyText: {
    fontSize: typography.size.xl,
    fontWeight: typography.weight.semiBold,
    color: colors.textMuted,
  },
  cartSuccess: {
    backgroundColor: colors.white,
    width: scale(250),
    paddingVertical: spacing.vSm,
    paddingHorizontal: spacing.md,
    position: 'absolute',
    borderRadius: moderateScale(20),
    elevation: 10,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: verticalScale(4) },
    shadowOpacity: 0.15,
    shadowRadius: moderateScale(8),
    bottom: verticalScale(80),
    alignSelf: 'center',
  },
  cartSuccessText: {
    textAlign: 'center',
    fontWeight: typography.weight.medium,
    fontSize: typography.size.md,
    color: colors.textDark,
  },
});

export default styles;
