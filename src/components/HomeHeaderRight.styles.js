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
    flexDirection: 'row',
    gap: spacing.md,
    paddingHorizontal: spacing.sm,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: scale(260),
    height: verticalScale(38),
    borderWidth: 0.5,
    borderColor: colors.border,
    backgroundColor: colors.cardBg,
    borderRadius: moderateScale(20),
    marginRight: spacing.sm,
    paddingHorizontal: spacing.sm,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 0,
    paddingLeft: spacing.xs,
    fontSize: typography.size.sm,
    color: colors.textDark,
  },
  closeBtn: {
    padding: scale(4),
  },
  actionIconBtn: {
    padding: scale(6),
  },
  bellBtn: {
    padding: scale(6),
    marginRight: spacing.xs,
  },
});

export default styles;
