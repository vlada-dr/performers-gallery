import { observable, action, runInAction } from 'mobx';
import axios from 'axios';

const API_URL = 'https://performersgallery.azurewebsites.net/api/photos';

const queryString = params => Object.keys(params)
  .map(key => (params[key] ? `${key}=${params[key]}&` : ''))
  .join('')
  .slice(0, -1);

const capitalizeFirstLetter = (string) => {
  if (!string) {
    return null;
  }

  return string.charAt(0).toUpperCase() + string.slice(1);
};

class PhotoStore {
  @observable photos = [];
  @observable lastPhotoId = null;
  @observable count = 18;
  @observable hasMore = true;
  @observable emotion = null;

  @action.bound
  async fetch(emotion = null) {
    if (emotion && this.emotion !== emotion) {
      this.emotion = emotion;
      this.lastPhotoId = null;
      this.photos = [];
    }

    let parsedEmotion = capitalizeFirstLetter(this.emotion);

    if (this.emotion === 'No filters') {
      parsedEmotion = null;
    }

    const { data } = await axios(`${API_URL}?${queryString({
      lastPhotoId: this.lastPhotoId,
      count: this.count,
      emotion: parsedEmotion,
    })}`);

    if (!data) {
      return;
    }

    const { lastPhotoId, photos } = data;

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
