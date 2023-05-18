export interface FetchedImage{
  urls: {
    full: string;
    raw: string;
    regular: string;
    small: string;
    thumb: string;
  }
}

export interface ImageParameters{
  query: string;
  orientation: 'portrait' | 'landscape' | 'squarish' | '';
}

