
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

const StationImage = ({ station = 'None', width = '40', height = '40' }: any) =>
    (<SvgXml width={width} height={height} xml={map[station]} />)

export default StationImage;