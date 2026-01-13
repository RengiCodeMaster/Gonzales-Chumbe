

export interface NewsItem {
  title: string;
  url: string;
  source: string;
}

export enum SectionId {
  HOME = 'home',
  ABOUT = 'about',
  SERVICES = 'services',
  TEAM = 'team',
  CONTACT = 'contact',
  NEWS = 'news'
}