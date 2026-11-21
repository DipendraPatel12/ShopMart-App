import { StyleSheet } from 'react-native';
import {
  verticalScale,
  spacing,
  typography,
  colors,
} from '../../constants';

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
  scrollView: {
    paddingLeft: spacing.md,
    marginTop: spacing.vSm,
    flexDirection: 'row',
  },
  itemWrapper: {
    marginRight: spacing.sm,
    height: verticalScale(28),
  },
});

export default styles;
