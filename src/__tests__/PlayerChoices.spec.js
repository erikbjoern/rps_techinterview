import React from 'react'
import { shallow } from 'enzyme'

import PlayerChoices from '../components/PlayerChoices'

describe('PlayerChoices', () => {
  const handleChange = jest.fn()
  const handleSubmit = jest.fn()
  const wrapper = shallow(
    <PlayerChoices
      leftChoice='rock'
      rightChoice='paper'
      onChangeHandler={handleChange}
      onSubmitHandler={handleSubmit}
    />
  )

  it('renders with a leftChoice prop', () => {
    expect(wrapper.find('#leftChoice').props().value).toEqual('rock')
  })
  
  it('renders with a rightChoice prop', () => {
    expect(wrapper.find('#rightChoice').props().value).toEqual('paper')
  })

  it('on change the onChangeHandler is being called', () => {
    wrapper.find('#leftChoice').simulate('change')
    expect(handleChange).toHaveBeenCalled()
    wrapper.find('#rightChoice').simulate('change')
    expect(handleChange).toHaveBeenCalled()
  })
  
  it('on submit the onSubmitHandler is being called', () => {
    wrapper.find('form').simulate('submit')
    expect(handleSubmit).toHaveBeenCalled()
  })
})