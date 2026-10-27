import { StyleSheet } from 'react-native';
import {
  scale,
  moderateScale,
  colors,
  spacing,
  typography,
} from '../constants';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: spacing.sm,
    padding: spacing.sm,
    alignItems: 'center',
  },
  avatar: {
    width: scale(42),
    height: scale(42),
    backgroundColor: colors.chipBg,
    borderRadius: moderateScale(21),
  },
  textContainer: {
    justifyContent: 'center',
    maxWidth: scale(140),
  },
  greetingText: {
    color: colors.textGrey,
    fontSize: typography.size.xs,
    fontWeight: typography.weight.regular,
  },
  userNameText: {
    fontWeight: typography.weight.semiBold,
    fontSize: typography.size.md,
    color: colors.textSecondary,
  },
});

export default styles;
