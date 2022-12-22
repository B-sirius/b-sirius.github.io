import dynamic from "next/dynamic";

const DynamicDevice = dynamic(() => import('./Device'), { ssr: false });

export default DynamicDevice;