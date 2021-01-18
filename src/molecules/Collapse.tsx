import React, { useState, useCallback } from 'react'
import { StyleSheet, View, TouchableWithoutFeedback } from 'react-native'
import Typography from '../atoms/Typography'
import { FontAwesome } from '@expo/vector-icons'
import colors from '../constants/colors'
import PropTypes, { InferProps } from 'prop-types'

const propTypes = {
  title: PropTypes.string.isRequired
}

type Props = InferProps<typeof propTypes>

function Collapse ({ title }: Props) {
  const [ collapsed, setCollapsed ] = useState(false)

  const toCollapse = useCallback(() => setCollapsed(!collapsed), [setCollapsed, collapsed])

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={toCollapse}>
        <View style={styles.containerTitle}>
          <Typography type='title-4' style={styles.title}>{title}</Typography>
          {collapsed ? (
            <FontAwesome name='minus-square-o' size={18} color={colors.darkGray} />
            ) : (
            <FontAwesome name='plus-square-o' size={18} color={colors.darkGray} />
          )}
        </View>
      </TouchableWithoutFeedback>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  containerTitle: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  title: {
    marginRight: 7,
    marginBottom: 5
  }
})

export default Collapse
