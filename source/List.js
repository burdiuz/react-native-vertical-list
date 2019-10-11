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

export const List = ({ items, filter, itemRenderer, emptyRenderer, children }) => {
  let content;

  if (items && items.length) {
    if (filter) {
      content = items.filter(filter).map(itemRenderer);
    } else {
      content = items.map(itemRenderer);
    }
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
  filter: PropTypes.func,
  children: PropTypes.node,
};

List.defaultProps = {
  filter: undefined,
  items: undefined,
  children: undefined,
  emptyRenderer: () => null,
};

export const VerticalList = ({
  items,
  itemRenderer,
  emptyRenderer,
  filter,
  style,
  children,
  ...props
}) => {
  return (
    <View {...props} style={[styles.verticalList, style]}>
      <List items={items} itemRenderer={itemRenderer} emptyRenderer={emptyRenderer} filter={filter}>
        {children}
      </List>
    </View>
  );
};
