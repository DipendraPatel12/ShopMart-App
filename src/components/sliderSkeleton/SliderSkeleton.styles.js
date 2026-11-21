import { StyleSheet, Dimensions } from 'react-native';
import {
  scale,
  verticalScale,
  spacing,
} from '../../constants';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    width,
    height: width * 0.48,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.vSm,
  },
  paginationContainer: {
    position: 'absolute',
    bottom: verticalScale(18),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: scale(6),
  },
});

export default styles;
