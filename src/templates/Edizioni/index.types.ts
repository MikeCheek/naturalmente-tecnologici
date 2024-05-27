type Activity = {
  title: string;
  photos: string[];
  outputs: string;
};

type Section = { title: string; description?: string; imageName?: string; youtubeSrc?: string };

export default interface EdizioniData {
  theme: string;
  title: string;
  imagesPath: string;
  year: string;
  articleLinks?: string[];
  youtubePlaylist?: string;
  activities?: Activity[];
  story: Section[];
}
