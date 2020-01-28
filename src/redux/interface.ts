export interface ILocation  {
    latitude: number
    longitude: number
};

export interface IRecord {
    uid: string;
    carId: string;
    gasStation: 'Sonol' | 'Paz' | 'Delek' | 'DorAlon';
    price: number;
    location: ILocation;
    km: number;
    liters: number;
    timestamp: Date;
    userId : string
}

export interface IState {
    records: Array<IRecord>;
}