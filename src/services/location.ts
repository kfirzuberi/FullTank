import { ILocation } from "../redux/interface";
import Geolocation from '@react-native-community/geolocation';

export const getCurrentLocation = async (): Promise<ILocation> => {
    const location = await getLocation();
    const { longitude, latitude } = location;

    return { longitude, latitude };
}

const getLocation = (): Promise<any> => {
    return new Promise((resolve, reject) => {
        Geolocation.getCurrentPosition(position => {
            resolve(position.coords)
        }, error => {
            reject(error);
        })
    });
}