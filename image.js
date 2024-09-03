class ImageTextOverlay extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                #image-container {
                    position: relative;
                    display: inline-block;
                }
                #image-container img {
                    width: 100%;
                    height: auto;
                }
                #overlay-text {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    color: white;
                    font-size: 24px;
                    font-weight: bold;
                    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
                    text-align: center;
                }
            </style>
            <div id="image-container">
                <img id="background-image" src="" alt="Background Image">
                <div id="overlay-text"></div>
            </div>
        `;
    }

    connectedCallback() {
        const imageUrl = this.getAttribute('image-url');
        const text = this.getAttribute('overlay-text');

        this.shadowRoot.getElementById('background-image').src = imageUrl;
        this.shadowRoot.getElementById('overlay-text').innerText = text;
    }
}

customElements.define('image-text-overlay', ImageTextOverlay);
