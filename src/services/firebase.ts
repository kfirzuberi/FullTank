import { IRecord, ILocation } from "src/redux/interface"
import firestore from '@react-native-firebase/firestore';
import { getCurrentLocation } from "./location";

export const set = async (record: IRecord): Promise<IRecord> => {
    record.location = new firestore.GeoPoint(32, 35);

    await firestore()
        .collection('records')
        .doc(record.uid)
        .update(record);

    return record;
}

export const add = async (record: IRecord): Promise<IRecord> => {
    const cleanRecord = { ...record };
    console.log('2222222')
    const currentLocation = await getCurrentLocation();
    console.log('yo')
    cleanRecord.location = new firestore.GeoPoint(currentLocation.latitude,currentLocation.longitude);

    delete cleanRecord.uid;

    const documentSnapshot = await firestore()
        .collection('records')
        .add(cleanRecord);

    cleanRecord.uid = documentSnapshot.id;

    return cleanRecord;
}

export const getAll = async (): Promise<Array<any>> => {
    const snapshot = await firestore().collection('records').get();

    const records = snapshot.docs.map((doc) => {
        const data = doc.data() || {};
        const { carId, price, km, liters, timestamp, gasStation } = data;
        const location : ILocation = { latitude: data.location._latitude, longitude: data.location._longitude };
        const record: IRecord = { carId, timestamp: timestamp.toDate(), km, price, gasStation, location, uid: doc.id, liters };

        return record;
    });

    return records;
}
