import React from 'react'
import { Text } from 'react-native'
import PropTypes, { InferProps } from 'prop-types'
import formatNumber from '../utils/formatNumber'

const propTypes = {
  amount: PropTypes.number.isRequired,
  styles: PropTypes.object
}

type Props = InferProps<typeof propTypes>

function Price ({ amount, styles }: Props) {
  return <Text style={{ ...styles }}>{formatNumber(amount)}</Text>
}

Price.propTypes = propTypes

export default Price

