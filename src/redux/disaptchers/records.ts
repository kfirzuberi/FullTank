import { getAll, set, add } from "../../services/firebase";
import * as recordActions from "../actions/records";
import { IRecord } from "../interface";
import { show } from "../../services/toast";

export const getAllRecords = () => async (dispatch: any) => {
    dispatch(recordActions.setRecords());

    const records = await getAll();

    dispatch(recordActions.setRecordsSuccess(records));
};

export const addNewRecord = (newRecord : IRecord) => async (dispatch: any) => {
    const record = await add(newRecord);
    
    dispatch(recordActions.addRecord(record));
    show("recourd updated", "Okay");
};

export const updateRecord = (recordToUpdate : IRecord) => async (dispatch: any) => {
    const record = await set(recordToUpdate);

    dispatch(recordActions.updateRecord(record));
    show("recourd updated", "Okay");
};