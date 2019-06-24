import { shallowRenderComponent } from '../utils/test-helper';
import BioContainer from '../components/about/about-me';

describe('BioContainer Component fully render', () => {
  const bioContainer = shallowRenderComponent(BioContainer);

  it('fully renders its children', () => {
    expect.assertions(4);
    expect(bioContainer.children().length).toBe(2);
    expect(
      bioContainer.find('[data-test-bio-intro-container]').children().length
    ).toBe(4);
    expect(
      bioContainer.find('[data-test-bio-secondary-info]').children().length
    ).toBe(2);
    expect(
      bioContainer.find('[data-test-bio-list-of-skills]').children().length
    ).toBe(7);
  });
});
