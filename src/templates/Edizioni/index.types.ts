type Activity = {
  title: string;
  photos: string[];
  outputs: string;
};

export default interface EdizioniData {
  theme: string;
  title: string;
  image: string;
  year: string;
  articleLinks?: string[];
  youtubePlaylist?: string;
  activities: Activity[];
}
