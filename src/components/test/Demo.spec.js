import React from 'react';
import Demo from './Demo';

describe('Demo Component', () => {
  it('renders component', () => {
    const wrapper = mount(<Demo />);

    expect(wrapper.find('div')).toHaveLength(1);
    expect(wrapper.instance().state.id).toEqual(5);
  });
});
