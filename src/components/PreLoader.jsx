import { MutatingDots } from 'react-loader-spinner';
import '../styles/Preloader.css'

export default function Preloader() {
  return (
    <div className="preloader">
      <MutatingDots 
        height="100"
        width="100"
        color="#ae60d3"
        secondaryColor= '#8b26c3'
        radius='15'
        ariaLabel="mutating-dots-loading"
        visible={true}
      />
    </div>
  );
}