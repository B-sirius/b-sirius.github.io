import { useEffect, useState } from "react";
import {
    HOME_BLACK
} from 'constants/color';

const LazyImage = (props) => {
    const { xlinkHref } = props;
    
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const image = new Image();
        image.src = xlinkHref;
        image.onload = () => {
            setLoaded(true);
        }
    }, []);

    if (loaded) {
        return <image {...props} />
    }
    return <rect fill={HOME_BLACK} {...props} />
}

export default LazyImage;
