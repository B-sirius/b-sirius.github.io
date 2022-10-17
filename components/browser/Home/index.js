import styles from './index.module.css';
import {
    HOME_MAIN,
    HOME_DARK,
    HOME_DARKER,
    HOME_HIGHLIGHT,
    HOME_BLACK
} from 'constants/color';
import {
    IMAGES
} from 'constants/image';
import LazyImage from './LazyImage';

const frameWidth = 1512;
const frameHeight = 922;
const lineWidth = 4;

const corner1X = 210;
const corner2X = 1305.5;
const cornerY = 720;

const pictureFrameWidth = 600;
const pictureFrameHeight = 400;

const Background = () => (
    <rect x={0} y={0} width={frameWidth} height={frameHeight} fill={HOME_MAIN} />
)
const WallLine1 = () => (<line x1={corner1X} y1={0} x2={corner1X} y2={cornerY} strokeWidth={lineWidth} stroke={HOME_DARK} />);
const WallLine2 = () => (<line x1={0} y1={frameHeight} x2={corner1X} y2={cornerY} strokeWidth={lineWidth} stroke={HOME_DARK} />);
const WallLine3 = () => (<line x1={corner2X} y1={cornerY} x2={corner1X} y2={cornerY} strokeWidth={lineWidth} stroke={HOME_DARK} />);
const WallLine4 = () => (<line x1={corner2X} y1={0} x2={corner2X} y2={cornerY} strokeWidth={lineWidth} stroke={HOME_DARK} />);
const WallLine5 = () => (<line x1={frameWidth} y1={frameHeight} x2={corner2X} y2={cornerY} strokeWidth={lineWidth} stroke={HOME_DARK} />);
const PictureFrame = () => (
    <g>
        <rect
            x={(frameWidth - pictureFrameWidth) / 2}
            y={153}
            width={pictureFrameWidth}
            height={pictureFrameHeight}
            strokeWidth={lineWidth * 2}
            stroke={HOME_DARK} />
        <LazyImage
            xlinkHref={IMAGES[0].url}
            x={(frameWidth - pictureFrameWidth) / 2}
            y={153}
            width={pictureFrameWidth}
            height={pictureFrameHeight} />
    </g>
);
const HomeText = () => (
    <>
        <clipPath id="homeTextClip">
            <rect x={0} y={0} width={frameWidth} height={frameHeight} />
        </clipPath>
        <g clipPath="url(#homeTextClip)">
            <text
                fill={HOME_DARK}
                x={-265}
                y={-50}
                className={styles.roomText}>
                Banana Room
            </text>
        </g>
    </>
);
const Door = () => (
    <path
        d="M76.5 670 v 178 L143 783 v -178 Z"
        stroke={HOME_DARK}
        strokeWidth={lineWidth}
        fill={HOME_HIGHLIGHT} />
);

const Home = () => {
    return (
        <div className={styles.container}>
            <svg className={styles.svg} viewBox={`0 0 ${frameWidth} ${frameHeight}`}>
                <Background />
                <WallLine1 />
                <WallLine2 />
                <WallLine3 />
                <WallLine4 />
                <WallLine5 />
                <PictureFrame />
                <HomeText />
                <Door />
            </svg>
        </div>
    )
};

export default Home;