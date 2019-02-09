import RouterStore from './RouterStore';
import { PhotoStore } from './photoStore';

export function createStores(history) {
  const routerStore = new RouterStore(history);
  const photoStore = new PhotoStore();
  return {
    routerStore,
    photoStore,
  };
}
