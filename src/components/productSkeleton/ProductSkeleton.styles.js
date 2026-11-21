import { StyleSheet } from 'react-native';
import {
  scale,
  verticalScale,
  moderateScale,
  colors,
  spacing,
} from '../../constants';

export const styles = StyleSheet.create({
  productContainer: {
    marginBottom: spacing.vMd,
    alignItems: 'center',
  },
  productCard: {
    width: scale(165),
    height: verticalScale(225),
    borderWidth: 1,
    borderColor: colors.borderLight,
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
  productInnerCard: {
    width: scale(135),
    height: verticalScale(130),
    backgroundColor: colors.surface,
    marginTop: spacing.vXs,
    borderRadius: moderateScale(16),
    justifyContent: 'center',
    alignItems: 'center',
  },
  productTextContainer: {
    width: '90%',
    alignItems: 'flex-start',
    marginLeft: spacing.sm,
    marginTop: spacing.vXs,
  },
  ratingSkeleton: {
    marginTop: verticalScale(6),
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
});

export default styles;
