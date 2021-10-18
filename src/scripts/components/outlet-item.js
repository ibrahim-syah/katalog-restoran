/* eslint-disable no-underscore-dangle */
import CONFIG from '../globals/config';

class OutletItem extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  set outlets(outlets) {
    this._outlets = outlets;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
        <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        :host {
            text-align: left;
        }
        
        
        .post-item {
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            width: 100%;
            border-radius: 5px;
            position: relative;
        }
        
        .post-item__content {
            padding: 24px;
        }
        
        .post-item__thumbnail {
            width: 100%;
            max-height: 200px;
            object-fit: cover;
        }

        .post-city-banner {
            padding: 12px;
            position: absolute;
            left: 0px;
            top: 10px;
            background-color: #fff;
            border-radius: 0px 18px 18px 0px;
        }
        
        .post-item__city {
            font-size: 20px;
            font-weight: 100;
            text-transform: uppercase;
            color: #000;
        }
        
        .post-item__title {
            font-family: 'Ephesis', cursive;
            font-size: 32px;
            font-weight: 500;
            margin-top: 16px;
            color: #000;
            text-decoration: none;
        }

        .post-item__title:hover {
            font-weight: 600;
        }
        
        .post-item__description {
            margin-top: 16px;
            font-size: 16px;
            line-height: 1.5em;
            color: #424242;
        }

        @media screen and (min-width: 650px) {
        
            .post-item__content {
                padding: 16px 32px 32px 32px;
            }
        
            .post-item__title {
                font-size: 30px;
            }
        
            .post-item__description {
                font-size: 16px;
            }
        }

        </style>
        `;

    this._outlets.forEach((element) => {
      this.shadowDOM.innerHTML += `
               <article class="post-item">
                    <div class="post-city-banner">
                    <span class="post-item__city" tabindex=0>${element.city}</span>
                    </div>
                    <img class="post-item__thumbnail"
                         src="${CONFIG.BASE_IMAGE_URL}medium/${element.pictureId}" alt="Picture of ${element.name}" tabindex=0>
                    <div class="post-item__content">
                        <a href="#/detail/${element.id}" class="post-item__title" tabindex=0>${element.name}</a>
                        <p class="post-item__description" tabindex=0>${element.description}</p>
                    </div>
                </article>
               `;
    });
  }
}

customElements.define('outlet-item', OutletItem);
