export interface IShow {
  name: string;
  network: string;
  link: string;
  image: string;
  info: string;
  slot: string;
}

export interface ITimeSlot {
  name: string;
  shows: IShow[];
}
