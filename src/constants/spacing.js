import { scale, verticalScale } from './metrics';

export const spacing = {
  xs: scale(4),
  sm: scale(8),
  md: scale(16),
  lg: scale(20),
  xl: scale(24),
  xxl: scale(32),

  vXs: verticalScale(4),
  vSm: verticalScale(8),
  vMd: verticalScale(16),
  vLg: verticalScale(20),
  vXl: verticalScale(24),
  vXxl: verticalScale(32),
};

export default spacing;
