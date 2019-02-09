import { observable, action, runInAction } from 'mobx';
import axios from 'axios';

const API_URL = 'http://performersgallery.azurewebsites.net/api/photos';
const queryString = params => Object.keys(params)
  .map(key => (params[key] ? `${key}=${params[key]}` : ''))
  .join('&');

class PhotoStore {
  @observable photos = [];
  @observable lastPhotoId = null;
  @observable count = 18;

  @action.bound
  async fetch() {
    const { data } = await axios(`${API_URL}?${queryString({
      lastPhotoId: this.lastPhotoId,
      count: this.count,
    })}`);

    if (!data) {
      return;
    }

    const {
      count, emotion, lastPhotoId, photos,
    } = data;

    runInAction(() => {
      this.lastPhotoId = lastPhotoId;
      this.photos = [...this.photos, ...photos];
    });
  }
}

const photoStore = new PhotoStore();

if (process.env.NODE_ENV === 'development') { //eslint-disable-line
  window.siteSeoTextStore = photoStore;
}

export default photoStore;
export { PhotoStore };
