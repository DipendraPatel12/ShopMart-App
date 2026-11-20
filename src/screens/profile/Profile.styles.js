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
    padding: spacing.md,
    justifyContent: 'space-between',
    paddingBottom: spacing.xxl,
  },
  profileHeader: {
    alignItems: 'center',
    marginTop: verticalScale(30),
    gap: spacing.vSm,
  },
  avatar: {
    width: scale(90),
    height: scale(90),
    borderRadius: scale(45),
    backgroundColor: colors.surface,
  },
  userName: {
    fontSize: typography.size.title,
    fontWeight: typography.weight.bold,
    color: colors.textDark,
  },
  userEmail: {
    fontSize: typography.size.md,
    color: colors.textMuted,
  },
  logoutBtn: {
    backgroundColor: colors.primary,
    height: verticalScale(48),
    justifyContent: 'center',
    borderRadius: moderateScale(30),
    width: '100%',
    alignSelf: 'center',
  },
  logoutText: {
    textAlign: 'center',
    color: colors.white,
    fontSize: typography.size.lg,
    fontWeight: typography.weight.semiBold,
  },
});

export default styles;
