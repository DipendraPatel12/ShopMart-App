import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const AppIcon = ({
  name,
  size = 20,
  color,
  style,
  solid,
  brand,
  ...props
}) => {
  const iconProps = {
    name,
    size,
    style,
    ...props,
  };

  if (color !== undefined) {
    iconProps.color = color;
  }
  if (solid !== undefined) {
    iconProps.solid = solid;
  }
  if (brand !== undefined) {
    iconProps.brand = brand;
  }

  return <FontAwesome5 {...iconProps} />;
};

export default React.memo(AppIcon);
