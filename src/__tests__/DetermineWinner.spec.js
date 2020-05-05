import React from 'react'
import { shallow } from 'enzyme'

import DetermineWinner from '../components/DetermineWinner'

describe('DetermineWinner', () => {
  const handleSubmit = jest.fn()
  const wrapper = shallow(
    <DetermineWinner
      onSubmitHandler={handleSubmit}
    />
  )

  it('on submit the onSubmitHandler is being called', () => {
    wrapper.find('form').simulate('submit')
    expect(handleSubmit).toHaveBeenCalled()
  })
})