import React from 'react';
import { shallow, mount } from 'enzyme';

export const shallowRenderComponent = (Component, props = {}) =>
  shallow(<Component {...props} />);

export const mountRenderComponent = (Component, props = {}) =>
  mount(<Component {...props} />);
