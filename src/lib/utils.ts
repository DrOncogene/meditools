import { drawerStore } from '@skeletonlabs/skeleton';
import { get } from 'svelte/store';
import favourites from '$lib/stores/favourites';

export const openDrawer = () => {
  drawerStore.open();
};

export const closeDrawer = () => {
  drawerStore.close();
};

export const closeSideBar = () => {
  const main = <HTMLElement>document.querySelector('main > section');
  const accordion = <HTMLElement>document.querySelector('.accordion');
  const sideBar = <HTMLElement>document.querySelector('.side-bar');

  main.classList.add('!ml-8');
  sideBar.classList.add('!w-0');
  accordion.classList.add('!w-0');
};

export const openSideBar = () => {
  const main = <HTMLElement>document.querySelector('main > section');
  const accordion = <HTMLElement>document.querySelector('.accordion');
  const sideBar = <HTMLElement>document.querySelector('.side-bar');

  main.classList.remove('!ml-8');
  sideBar.classList.remove('!w-0');
  accordion.classList.remove('!w-0');
};

export const addToFavourites = (e: MouseEvent, id: number) => {
  favourites.update((favs) => {
    favs.add(id);
    return favs;
  });

  localStorage.setItem('__meditools__favourites', JSON.stringify(Array.from(get(favourites))));
};

export const removeFromFavourites = (e: MouseEvent, id: number) => {
  favourites.update((favs) => {
    favs.delete(id);
    return favs;
  });

  localStorage.setItem('__meditools__favourites', JSON.stringify(Array.from(get(favourites))));
};
