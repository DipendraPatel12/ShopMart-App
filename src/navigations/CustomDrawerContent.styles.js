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
    flex: 1,
    backgroundColor: colors.background,
  },
  drawerScrollView: {
    flexGrow: 1,
  },
  profileHeader: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.vLg,
    paddingBottom: spacing.vMd,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  avatar: {
    width: scale(60),
    height: scale(60),
    borderRadius: moderateScale(30),
    backgroundColor: colors.chipBg,
    marginBottom: spacing.vSm,
  },
  userName: {
    fontSize: typography.size.lg,
    fontWeight: typography.weight.semiBold,
    color: colors.textDark,
  },
  userEmail: {
    fontSize: typography.size.xs,
    color: colors.textMuted,
    marginTop: verticalScale(2),
  },
  menuItemsContainer: {
    paddingVertical: spacing.vMd,
    paddingHorizontal: spacing.sm,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: verticalScale(12),
    paddingHorizontal: spacing.md,
    borderRadius: moderateScale(12),
    marginBottom: verticalScale(4),
  },
  menuItemActive: {
    backgroundColor: colors.chipBg,
  },
  menuItemText: {
    fontSize: typography.size.md,
    fontWeight: typography.weight.medium,
    color: colors.textDark,
    marginLeft: spacing.md,
  },
  menuItemTextActive: {
    color: colors.primary,
    fontWeight: typography.weight.semiBold,
  },
  footer: {
    borderTopWidth: 1,
    borderTopColor: colors.border,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.vMd,
  },
  logoutBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: verticalScale(10),
    paddingHorizontal: spacing.md,
    borderRadius: moderateScale(12),
  },
  logoutText: {
    fontSize: typography.size.md,
    fontWeight: typography.weight.medium,
    color: colors.error,
    marginLeft: spacing.md,
  },
});

export default styles;
