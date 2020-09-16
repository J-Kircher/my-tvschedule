export interface ISlot {
  slot: string;
}

export interface ISchedule {
  name: string;
  time: ISlot[];
}

export interface IShow {
  name: string;
  network: string;
  link: string;
  image: string;
  info: string;
  season?: number;
  start: string;
  slot: string;
}

export interface ITimeSlot {
  name: string;
  shows: IShow[];
}

export interface INetworkData {
  network: string;
  count: number;
}
