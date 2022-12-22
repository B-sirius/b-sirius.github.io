import { isBrowser } from 'react-device-detect';

export default function Device({ children }) {
    return <div>{children(isBrowser)}</div>
}