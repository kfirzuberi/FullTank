export interface IRecord {
    uid: string;
    carId: string;
    gasStation: 'Sonol' | 'Paz' | 'Delek' | 'DorAlon';
    price: number;
    location: string;
    km: number;
    liters: number;
    timestamp: Date;
}

export interface IState {
    records : Array<IRecord>;
}