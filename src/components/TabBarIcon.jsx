import React from 'react';
import { AppIcon } from '../lib';
import { colors, moderateScale } from '../constants';

const TabBarIcon = ({ name, focused, size = 20 }) => {
  return (
    <AppIcon
      name={name}
      size={moderateScale(size)}
      color={focused ? colors.primary : colors.textMuted}
    />
  );
};

export default React.memo(TabBarIcon);
