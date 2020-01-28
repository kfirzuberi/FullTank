import { SET_RECORDS, UPDATE_RECORD, ADD_RECORD, SET_RECORDS_SUCCESS } from '../actions/actionTypes';
import { IRecord } from '../interface';

const records = (state: Array<IRecord> = [], action: any): Array<IRecord> => {
    switch (action.type) {
        case SET_RECORDS_SUCCESS:
            return  action.payload;
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
