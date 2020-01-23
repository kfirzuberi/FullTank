import { SET_RECORDS, ADD_RECORD, UPDATE_RECORD } from './actionTypes';
import { IRecord } from '../interface';

export const setRecrods = (records: Array<IRecord>) => ({
    type: SET_RECORDS,
    payload: records
});

export const updateRecrod = (record: IRecord) => ({
    type: UPDATE_RECORD,
    payload: record
});

export const addRecrod = (record: IRecord) => ({
    type: ADD_RECORD,
    payload: record
});