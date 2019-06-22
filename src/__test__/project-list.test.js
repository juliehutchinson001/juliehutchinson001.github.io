import { shallowRenderComponent } from '../utils/test-helper';
import Images from '../components/project/project-list';

describe('Project-List Component fully render', () => {
  const imagesComponent = shallowRenderComponent(Images);

  it('projects fully renders its children', () => {
    expect.assertions(5);
    expect(imagesComponent.children().length).toBe(18);
    expect(
      imagesComponent.find('[data-test-carousel-slide-project-wrapper]').length
    ).toBe(6);
    expect(
      imagesComponent.find('[data-test-carousel-slide-project-header]').length
    ).toBe(6);
    expect(imagesComponent.find('[data-test-carousel-slide-link]').length).toBe(
      6
    );
    expect(imagesComponent.find('[data-test-carousel-route-link]').length).toBe(
      6
    );
  });
});
