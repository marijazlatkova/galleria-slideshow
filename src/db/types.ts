export interface ArtPiece {
  id: number;
  name: string;
  year: number;
  description: string;
  source: string;
  artist: {
    name: string;
    image: string;
  };
  images: {
    thumbnail: string;
    hero: {
      small: string;
      large: string;
    };
    gallery: string;
  };
}

export interface SharedIcons {
  backButton: string;
  nextButton: string;
  viewImage: string;
  logo: string;
}