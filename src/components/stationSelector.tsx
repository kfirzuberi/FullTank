import React, { useState, useEffect } from "react";
import { Container, Content, Card, Icon, Text, Right, CardItem, Button, Item, Input, Thumbnail } from "native-base";
import { Image } from "react-native";
import { SvgXml } from 'react-native-svg';
import DelekSvg from '../assets/images/stations/delek.svg';
import PazSvg from '../assets/images/stations/paz.svg';
import SonolSvg from '../assets/images/stations/sonol.svg';
import DorAlonSvg from '../assets/images/stations/dor-alon.svg';

const map = {
    'Sonol': SonolSvg,
    'Delek': DelekSvg,
    'Paz': PazSvg,
    'DorAlon': DorAlonSvg
};

const StationSelector = ({ selected = 'none', updateSelected = () => { } }: any) => {
    const [station, setStation] = useState(selected);

    const updateStation = (newStation: string) => {
        setStation(newStation);
        updateSelected && updateSelected(newStation);
    }

    const buttons = Object.keys(map).map(sat => (
        <Button key={sat} light bordered primary={sat===selected} onPress={() => updateStation(sat)}>
            <SvgXml width="40" height="40" xml={map[sat]} />
        </Button>));
    return <>{buttons}</>

};

export default StationSelector;