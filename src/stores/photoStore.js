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
  @observable hasMore = false;

  @action.bound
  async fetch(lastId) {
    const { data } = await axios(`${API_URL}?${queryString({
      lastPhotoId: lastId,
      count: this.count,
    })}`);

    if (!data) {
      return;
    }

    const {
      count, emotion, lastPhotoId, photos,
    } = data;

    const newPhotos = photos.filter(({ id }) => !this.photos.find(p => p.id === id));

    runInAction(() => {
      this.lastPhotoId = lastPhotoId;
      this.photos = [...this.photos, ...newPhotos];
      this.hasMore = photos.length % 18 === 0;
    });
  }
}

const photoStore = new PhotoStore();

if (process.env.NODE_ENV === 'development') { //eslint-disable-line
  window.siteSeoTextStore = photoStore;
}

export default photoStore;
export { PhotoStore };
