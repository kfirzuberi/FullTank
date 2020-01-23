import { IState, IRecord } from "../interface";

export const getRecords = (store: IState): Array<IRecord> => store.records;
