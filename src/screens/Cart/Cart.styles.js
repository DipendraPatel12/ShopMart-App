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
    backgroundColor: colors.background,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.vXs,
    justifyContent: 'space-between',
  },
  listContainer: {
    flex: 1,
  },
  emptyContainer: {
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
  cardWrapper: {
    marginBottom: spacing.vMd,
  },
  cardContainer: {
    borderRadius: moderateScale(16),
    backgroundColor: colors.white,
    padding: spacing.sm,
    elevation: 3,
    shadowColor: colors.black,
    shadowOpacity: 0.08,
    shadowRadius: moderateScale(4),
    shadowOffset: { width: 0, height: 2 },
    flexDirection: 'row',
    gap: spacing.sm,
  },
  cardImageContainer: {
    width: scale(80),
    height: scale(80),
    justifyContent: 'center',
    backgroundColor: colors.surface,
    alignItems: 'center',
    borderRadius: moderateScale(12),
  },
  productImage: {
    width: scale(70),
    height: scale(70),
    borderRadius: moderateScale(10),
  },
  cardDetailContainer: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  productInfo: {
    justifyContent: 'center',
    gap: verticalScale(4),
    flex: 1,
  },
  productTitle: {
    fontWeight: typography.weight.semiBold,
    fontSize: typography.size.md,
    color: colors.textDark,
  },
  productQuantity: {
    color: colors.textMuted,
    fontWeight: typography.weight.medium,
    fontSize: typography.size.sm,
  },
  productPrice: {
    fontWeight: typography.weight.bold,
    fontSize: typography.size.md,
    color: colors.primary,
  },
  qtyControlContainer: {
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  increaseBtn: {
    width: scale(28),
    height: scale(28),
    backgroundColor: colors.primaryLight,
    borderRadius: moderateScale(8),
    justifyContent: 'center',
    alignItems: 'center',
  },
  decreaseBtn: {
    width: scale(28),
    height: scale(28),
    backgroundColor: colors.border,
    borderRadius: moderateScale(8),
    justifyContent: 'center',
    alignItems: 'center',
  },
  orderDetailContainer: {
    borderWidth: 1.5,
    borderRadius: moderateScale(16),
    borderStyle: 'dashed',
    borderColor: colors.primaryLight,
    backgroundColor: '#E3F2FD',
    padding: spacing.md,
    marginVertical: spacing.vSm,
    gap: spacing.vSm,
  },
  orderTitle: {
    textAlign: 'center',
    fontWeight: typography.weight.semiBold,
    fontSize: typography.size.lg,
    color: colors.primary,
  },
  orderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  orderSummaryValues: {
    alignItems: 'flex-end',
  },
  orderDetailText: {
    color: colors.textMuted,
    fontWeight: typography.weight.medium,
    fontSize: typography.size.sm,
    marginBottom: verticalScale(4),
  },
  grandTotalText: {
    fontSize: typography.size.xl,
    fontWeight: typography.weight.bold,
    color: colors.textDark,
    marginTop: verticalScale(4),
  },
  paymentBtn: {
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: moderateScale(28),
    alignSelf: 'stretch',
    paddingVertical: spacing.vMd,
    marginBottom: spacing.vSm,
  },
  paymentBtnText: {
    color: colors.white,
    fontWeight: typography.weight.bold,
    fontSize: typography.size.lg,
  },
});

export default styles;
