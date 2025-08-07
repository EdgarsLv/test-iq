import { ResolveFn } from '@angular/router';
import { getDownloadURL, ref } from 'firebase/storage';
import { storage } from '../../firebase.config';

async function getOgImageUrl(resultId: string): Promise<string> {
  const imageRef = ref(storage, `og-images/${resultId}.png`);
  return await getDownloadURL(imageRef);
}

export const imageResolver: ResolveFn<any> = async (route) => {
  const id = route.paramMap.get('id');

  if (!id) return null;

  return await getOgImageUrl(id);
};
