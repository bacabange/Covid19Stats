import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { ThemeContext } from 'styled-components';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
});

const Indicator = ({ number, name }) => {
  const theme = useContext(ThemeContext);

  return (
    <View style={styles.container}>
      <Text style={{ color: theme.text, fontSize: 20 }}>{new Intl.NumberFormat().format(number)}</Text>
      <Text style={{ color: theme.textCardTitle, fontSize: 12 }}>{name}</Text>
    </View>
  )
}

Indicator.propTypes = {
  number: PropTypes.number,
  name: PropTypes.string,
}

Indicator.defaultProps = {
  number: 0,
  name: 'No-named',
}

export default Indicator
