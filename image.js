import { html, LitElement } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js';

// define the component
export class ImageTextOverlayPlugIn extends LitElement {
  
  static properties = {
    imageUrl: { type: String },
    overlayText: { type: String }
  };
  
  // return a promise for contract changes.
  static getMetaConfig() {
    return {
      controlName: 'Image Text Overlay',
      fallbackDisableSubmit: false,
      groupName: 'Custom Plugins',
      version: '1.0',
      properties: {
        imageUrl: {
          type: 'string',
          title: 'Image Source',
          description: 'URL of the image to be used as the background'
        },
        overlayText: {
          type: 'string',
          title: 'Overlay Text',
          description: 'Text to display in the middle of the image'
        }
      }
    };
  }

  // function to render the overlay
  renderOverlay() {
    return html`
      <div style="position: relative; display: inline-block;">
        <img src="${this.imageUrl}" style="width: 100%; height: auto;" alt="Background Image">
        <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); color: white; font-size: 24px; font-weight: bold; text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7); text-align: center;">
          ${this.overlayText}
        </div>
      </div>
    `;
  }

  render() {
    return this.renderOverlay();
  }
}

// registering the web component
const elementName = 'image-text-overlay-plugin';
customElements.define(elementName, ImageTextOverlayPlugIn);
