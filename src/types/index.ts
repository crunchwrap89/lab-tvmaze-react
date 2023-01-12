export interface IShow {
  id: number;
  url: string;
  name: string;
  type: string;
  language: string;
  genres: string[];
  status: string;
  runtime: number;
  premiered: string;
  officialSite: string;
  schedule: any;
  rating: any;
  weight: number;
  network: any;
  webChannel: string | null;
  externals: any;
  image: any;
  summary: string;
  updated: number;
  _links: any;
  _embedded: any;
}

export interface IShowSearch {
  score: number;
  show: IShow;
}

export interface Navigator extends NavigatorNetworkInformation {}

declare interface NavigatorNetworkInformation {
  readonly connection?: NetworkInformation;
}

type Megabit = number;
type Millisecond = number;
type EffectiveConnectionType = '2g' | '3g' | '4g' | 'slow-2g';
type ConnectionType = 'bluetooth' | 'cellular' | 'ethernet' | 'mixed' | 'none' | 'other' | 'unknown' | 'wifi' | 'wimax';

interface NetworkInformation extends EventTarget {
  readonly type?: ConnectionType;
  readonly effectiveType?: EffectiveConnectionType;
  readonly downlinkMax?: Megabit;
  readonly downlink?: Megabit;
  readonly rtt?: Millisecond;
  readonly saveData?: boolean;
  onchange?: EventListener;
}
