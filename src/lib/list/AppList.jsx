import React from 'react';
import { FlashList } from '@shopify/flash-list';

const AppList = ({ estimatedItemSize = 100, ...props }) => {
  return (
    <FlashList
      estimatedItemSize={estimatedItemSize}
      {...props}
    />
  );
};

export default AppList;
