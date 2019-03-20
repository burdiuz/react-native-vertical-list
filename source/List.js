import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  verticalList: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
});

export const List = (props) => {
  const { items, itemRenderer, emptyRenderer, style, children } = props;
  let content;

  if (items && items.length) {
    content = items.map(itemRenderer);
  } else {
    content = emptyRenderer();
  }

  return (
    <>
      {content}
      {children}
    </>
  );
};

List.propTypes = {
  items: PropTypes.array,
  itemRenderer: PropTypes.func.isRequired,
  emptyRenderer: PropTypes.func,
  children: PropTypes.node,
};

List.defaultProps = {
  items: undefined,
  children: undefined,
  emptyRenderer: () => null,
};

export const VerticalList = ({
  items,
  itemRenderer,
  emptyRenderer,
  style,
  children,
  ...props
}) => {
  return (
    <View {...props} style={[styles.verticalList, style]}>
      <List
        items={items}
        itemRenderer={itemRenderer}
        emptyRenderer={emptyRenderer}
      >
        {children}
      </List>
    </View>
  );
};
