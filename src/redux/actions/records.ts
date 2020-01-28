import { SET_RECORDS, ADD_RECORD, UPDATE_RECORD, SET_RECORDS_SUCCESS } from './actionTypes';
import { IRecord } from '../interface';

export const setRecords = () => ({
    type: SET_RECORDS
});

export const setRecordsSuccess = (records: Array<IRecord>) => ({
    type: SET_RECORDS_SUCCESS,
    payload: records
});


export const updateRecord = (record: IRecord) => ({
    type: UPDATE_RECORD,
    payload: record
});

export const addRecord = (record: IRecord) => ({
    type: ADD_RECORD,
    payload: record
});