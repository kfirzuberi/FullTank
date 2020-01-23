import { SET_RECORDS, UPDATE_RECORD, ADD_RECORD } from '../actions/actionTypes';
import { IRecord } from '../interface';
//import * as moment from 'moment';
const moment = require('moment');


const recordsData: Array<IRecord> = [
    {
        uid: "1234",
        carId: "1234",
        gasStation: "Delek",
        price: 45,
        location: "1234",
        km: 4,
        liters: 22,
        timestamp: moment().subtract(10, 'days').toDate()
    },
    {
        uid: "133234",
        carId: "1234",
        gasStation: "Paz",
        price: 45,
        location: "1234",
        km: 4,
        liters: 6,
        timestamp:  moment().subtract(5, 'days').toDate()
    },
    {
        uid: "31234",
        carId: "1234",
        gasStation: "DorAlon",
        price: 45,
        location: "1234",
        km: 4,
        liters: 6,
        timestamp: moment().subtract(3, 'days').toDate()
    },
    {
        uid: "123435",
        carId: "1234",
        gasStation: "Sonol",
        price: 45,
        location: "1234",
        km: 4,
        liters: 6,
        timestamp: moment().toDate()
    }
]

const records = (state: Array<IRecord> = recordsData, action: any): Array<IRecord> => {
    switch (action.type) {
        case SET_RECORDS:
            return {
                ...state,
                ...action.payload
            };
        case ADD_RECORD: {
            return [...state, action.payload];
        }
        case UPDATE_RECORD: {
            return state.map((record: IRecord) =>
                (record.uid !== action.payload.uid) ? record : { ...record, ...action.payload });
        }
        default: {
            return state;
        }
    }
};

export default records;
