import { shallowRenderComponent } from '../utils/test-helper';
import Footer from '../components/footer';

describe('Footer Component fully render', () => {
  const footerComponent = shallowRenderComponent(Footer);

  it('fully renders its children', () => {
    expect.assertions(1);
    expect(footerComponent.children().length).toBe(2);
  });

  it(`Footer fully renders component's text`, () => {
    expect.assertions(2);
    expect(
      footerComponent
        .find('[data-test-footer-additional-info]')
        .childAt(0)
        .text()
    ).toBe('Click on the image for project details');
    expect(
      footerComponent
        .find('[data-test-portfolio-contact-link]')
        .childAt(0)
        .text()
    ).toBe('GET IN TOUCH');
  });
});
