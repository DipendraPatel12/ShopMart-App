import { moderateScale } from './metrics';

export const typography = {
  size: {
    tiny: moderateScale(10),
    xs: moderateScale(12),
    sm: moderateScale(13),
    md: moderateScale(14),
    base: moderateScale(15),
    lg: moderateScale(16),
    xl: moderateScale(18),
    title: moderateScale(20),
    heading: moderateScale(24),
  },


  weight: {
    regular: '400',
    medium: '500',
    semiBold: '600',
    bold: '700',
    extraBold: '800',
  },
};

export default typography;
