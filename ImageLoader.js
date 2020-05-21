import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';

import PropTypes from 'prop-types';
import constants from './constants';

const styles = StyleSheet.create({
  imageLoader: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    opacity: 0.7,
  },
});

const propTypes = {
  size: PropTypes.number,
  loaderColor: PropTypes.string,
};

const defaultProps = {
  size: constants.SIZE,
  loaderColor: constants.LOADER_COLOR,
};

const ImageLoader = ({size, loaderColor, containerStyle}) => {
  return (
    <View style={[containerStyle, styles.imageLoader]}>
      <ActivityIndicator size="small" color={loaderColor} />
    </View>
  );
};

ImageLoader.propTypes = propTypes;
ImageLoader.defaultProps = defaultProps;

export default ImageLoader;
