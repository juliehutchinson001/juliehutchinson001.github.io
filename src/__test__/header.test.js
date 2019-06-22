import { shallowRenderComponent } from '../utils/test-helper';
import Header from '../components/header';

describe('Header Component fully render', () => {
  const headerComponent = shallowRenderComponent(Header);

  it('fully renders its children', () => {
    expect.assertions(3);

    expect(headerComponent.children().length).toBe(1);

    expect(
      headerComponent.find('[data-test-navigation-list]').children().length
    ).toBe(3);

    expect(
      headerComponent.find('[data-test-navigation-home-link]').children().length
    ).toBe(2);
  });
});
