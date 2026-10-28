import React from 'react';
import FastImage from 'react-native-fast-image';

const AppImage = ({
  source,
  style,
  resizeMode = 'cover',
  objectFit,
  ...props
}) => {
  const imageSource = typeof source === 'string' ? { uri: source } : source;

  const fit = objectFit || resizeMode || 'cover';

  return (
    <FastImage
      style={[{ resizeMode: fit, objectFit: fit }, style]}
      source={imageSource}
      resizeMode={fit}
      objectFit={fit}
      {...props}
    />
  );
};

export default AppImage;
