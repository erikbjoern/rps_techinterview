import React from 'react';
import { shallow } from 'enzyme'

import DisplayWinner from '../components/DisplayWinner'

describe('DisplayWinner', () => {
  const wrapper = shallow(
    <DisplayWinner 
      winner="Left wins!" 
    />
  )

  it('renders with winner prop', () => {
    expect(wrapper.find('#winner').text()).toEqual(
      'Result: Left wins!'
    )
  })
})