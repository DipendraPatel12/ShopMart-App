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
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.vMd,
    borderBottomWidth: 1,
    borderBottomColor: colors.borderLight,
    backgroundColor: colors.white,
  },
  headerTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
  },
  headerTitle: {
    fontSize: typography.size.xl,
    fontWeight: typography.weight.bold,
    color: colors.textDark,
  },
  badge: {
    backgroundColor: colors.primary,
    borderRadius: moderateScale(10),
    paddingHorizontal: spacing.xs,
    paddingVertical: verticalScale(2),
  },
  badgeText: {
    color: colors.white,
    fontSize: typography.size.xs,
    fontWeight: typography.weight.bold,
  },
  headerActions: {
    flexDirection: 'row',
    gap: spacing.sm,
  },
  clearAllText: {
    fontSize: typography.size.sm,
    color: colors.primary,
    fontWeight: typography.weight.medium,
  },
  listContent: {
    padding: spacing.md,
    gap: spacing.vSm,
  },
  itemCard: {
    backgroundColor: colors.white,
    borderRadius: moderateScale(12),
    padding: spacing.md,
    borderWidth: 1,
    borderColor: colors.borderLight,
    position: 'relative',
  },
  unreadCard: {
    borderLeftWidth: scale(4),
    borderLeftColor: colors.primary,
    backgroundColor: colors.white,
  },
  itemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: verticalScale(4),
  },
  itemTitle: {
    fontSize: typography.size.base,
    fontWeight: typography.weight.semiBold,
    color: colors.textDark,
    flex: 1,
    marginRight: spacing.xs,
  },
  unreadDot: {
    width: moderateScale(8),
    height: moderateScale(8),
    borderRadius: moderateScale(4),
    backgroundColor: colors.primary,
    marginLeft: spacing.xs,
    alignSelf: 'center',
  },
  itemBody: {
    fontSize: typography.size.sm,
    color: colors.textMuted,
    lineHeight: verticalScale(18),
  },
  itemFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: verticalScale(8),
  },
  itemDate: {
    fontSize: typography.size.xs,
    color: colors.textMuted,
  },
  deleteText: {
    fontSize: typography.size.xs,
    color: colors.error,
    fontWeight: typography.weight.medium,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing.xl,
  },
  emptyTitle: {
    fontSize: typography.size.lg,
    fontWeight: typography.weight.semiBold,
    color: colors.textDark,
    marginTop: spacing.vMd,
  },
  emptySubtitle: {
    fontSize: typography.size.sm,
    color: colors.textMuted,
    textAlign: 'center',
    marginTop: spacing.vXs,
  },
});

export default styles;
