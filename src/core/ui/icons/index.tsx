import {Image} from 'react-native'
import {useMemo} from "react";
const arrowLeftBlack = require('./images/arrow-left-black.png');
const arrowLeftPurple = require('./images/arrow-left-purple.png');
const arrowLeftWhite = require('./images/arrow-left-white.png');

export type IconProps = {
    name: keyof typeof ICONS;
    size: number;
};

const ICONS:Record<string, any> = {
    arrowLeftBlack,
    arrowLeftPurple,
    arrowLeftWhite
}
 const Icon = ({ name, size }: IconProps) => {
    const icon = ICONS[name];

    if (!icon) {
        return null;
    }

     return useMemo(() => <Image source={icon} style={{ width: size, height: size }} />, [icon, size]);

};


export default Icon;
