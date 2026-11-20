import { StyleSheet } from 'react-native';
import {
  verticalScale,
  moderateScale,
  colors,
  spacing,
  typography,
} from '../../constants';

export const styles = StyleSheet.create({
  keyboardContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  formContainer: {
    padding: spacing.xl,
  },
  fieldContainer: {
    justifyContent: 'flex-start',
    gap: spacing.vXs,
    marginBottom: spacing.vSm,
  },
  label: {
    fontSize: typography.size.sm,
    fontWeight: typography.weight.medium,
    color: colors.textDark,
  },
  textInputStyle: {
    borderWidth: 1,
    borderRadius: moderateScale(20),
    height: verticalScale(48),
    paddingHorizontal: spacing.md,
    borderColor: colors.border,
    color: colors.textDark,
    fontSize: typography.size.sm,
  },
  forgetBtn: {
    marginBottom: spacing.vMd,
  },
  forgetBtnText: {
    color: colors.primary,
    textAlign: 'right',
    marginRight: spacing.xs,
    fontSize: typography.size.sm,
    fontWeight: typography.weight.medium,
  },
  loginBtnContainer: {
    width: '100%',
    backgroundColor: colors.primary,
    borderRadius: moderateScale(20),
  },
  buttonDisabled: {
    opacity: 0.6,
  },
  loginBtnText: {
    textAlign: 'center',
    paddingVertical: spacing.vMd,
    color: colors.white,
    fontWeight: typography.weight.semiBold,
    fontSize: typography.size.base,
  },
  errorText: {
    textAlign: 'center',
    marginTop: spacing.vMd,
    color: colors.error,
    fontWeight: typography.weight.medium,
    fontSize: typography.size.sm,
  },
  validationError: {
    color: colors.error,
    marginTop: verticalScale(4),
    fontSize: typography.size.xs,
  },
  bottomNavIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: spacing.vMd,
    marginBottom: spacing.xxl,
  },
  socialText: {
    color: colors.textMuted,
    fontSize: typography.size.sm,
  },
  iconContainer: {
    flexDirection: 'row',
    gap: spacing.lg,
  },
  signupRow: {
    flexDirection: 'row',
  },
  noAccountText: {
    color: colors.textDark,
    fontSize: typography.size.sm,
  },
  signupLink: {
    color: colors.primary,
    fontSize: typography.size.sm,
    fontWeight: typography.weight.semiBold,
  },
});

export default styles;
