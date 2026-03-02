import { newSpecPage } from '@stencil/core/testing';
import { Cv1AmbulanceWlEditor } from '../cv1-ambulance-wl-editor';

describe('cv1-ambulance-wl-editor', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Cv1AmbulanceWlEditor],
      html: `<cv1-ambulance-wl-editor></cv1-ambulance-wl-editor>`,
    });
    expect(page.root).toEqualHtml(`
      <cv1-ambulance-wl-editor>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cv1-ambulance-wl-editor>
    `);
  });
});
