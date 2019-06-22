import { shallowRenderComponent } from '../utils/test-helper';
import Footer from '../components/footer';

describe('Footer Component fully render', () => {
  const footerComponent = shallowRenderComponent(Footer);

  it('fully renders its children', () => {
    expect.assertions(1);
    expect(footerComponent.children().length).toBe(2);
  });
});
