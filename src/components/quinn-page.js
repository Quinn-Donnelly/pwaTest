import { html } from '@polymer/lit-element';
import { PageViewElement } from './page-view-element.js';
import { SharedStyles } from './shared-styles.js';

class QuinnPage extends PageViewElement {
  _render(props) {
    return html`
      ${SharedStyles}
      <section>
        <h2>Welcome to the Wacky World of String Literals</h2>
      </section>
    `
  }
}

window.customElements.define('quinn-page', QuinnPage);
