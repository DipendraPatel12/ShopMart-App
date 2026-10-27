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
  productContainer: {
    marginBottom: spacing.vMd,
  },
  productCard: {
    width: scale(165),
    height: verticalScale(225),
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: moderateScale(20),
    alignItems: 'center',
    position: 'relative',
    backgroundColor: colors.white,
    paddingVertical: spacing.vXs,
  },
  favoriteButtonPosition: {
    position: 'absolute',
    zIndex: 1,
    top: verticalScale(12),
    right: scale(12),
  },
  addToFavoriteBtnContainer: {
    backgroundColor: colors.cardBg,
    padding: scale(6),
    borderRadius: moderateScale(8),
    elevation: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  productInnerCard: {
    width: scale(135),
    height: verticalScale(130),
    backgroundColor: colors.cardBg,
    marginTop: spacing.vXs,
    borderRadius: moderateScale(16),
    justifyContent: 'center',
    alignItems: 'center',
  },
  productImage: {
    width: scale(85),
    height: verticalScale(85),
  },
  productTextContainer: {
    width: '90%',
    alignItems: 'flex-start',
    marginLeft: spacing.sm,
    marginTop: spacing.vXs,
  },
  productText: {
    color: colors.textMuted,
    fontWeight: typography.weight.medium,
    fontSize: typography.size.sm,
  },
  ratingText: {
    color: colors.textMuted,
    fontWeight: typography.weight.medium,
    fontSize: typography.size.xs,
    marginTop: verticalScale(2),
  },
  productPriceAndAddbtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: spacing.sm,
    marginTop: 'auto',
    marginBottom: spacing.vXs,
  },
  priceText: {
    fontSize: typography.size.md,
    fontWeight: typography.weight.semiBold,
    color: colors.textDark,
    marginLeft: scale(2),
  },
  addToCartBtn: {
    backgroundColor: colors.primaryLight,
    borderRadius: moderateScale(15),
    elevation: 1,
    width: scale(28),
    height: scale(28),
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
