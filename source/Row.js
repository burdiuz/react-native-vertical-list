import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableHighlight, StyleSheet } from 'react-native';

const Row = (props) => {
  const { style, children } = props;
  return (
    <View {...props} style={[styles.row, style]}>
      {children}
    </View>
  );
};

export const TouchableRow = (props) => {
  const { style, children } = props;
  return (
    <TouchableHighlight {...props} style={styles.touchable}>
      <Row style={style}>{children}</Row>
    </TouchableHighlight>
  );
};

Row.propTypes = {
  children: PropTypes.node,
};

Row.defaultProps = {
  children: undefined,
};

const styles = StyleSheet.create({
  touchable: {
    flex: 1,
    alignItems: 'stretch',
  },
  row: {
    flexDirection: 'row',
    padding: 2,
    justifyContent: 'space-between',
  },
});

export default Row;
