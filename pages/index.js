import DynamicDevice from 'components/Device';
import BrowserHome from 'components/browser/Home';
import MobileHome from 'components/mobile/Home';

export default function Home() {
  return (
    <DynamicDevice>
      { (isBrowser) => {
        if (isBrowser) {
          return <BrowserHome />
        }
        return <MobileHome />;
      } }
    </DynamicDevice>
    
  )
}
