import logo from './logo.svg';
import './App.css';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import InnerImageZoom from 'react-inner-image-zoom';
import Slick from 'react-slick';

function App() {
  return (
    <div className="App">
      <Slick dots={true}>
          <InnerImageZoom
            src="apple1.jfif"
            width={400}
            height={400}
            fullscreenOnMobile={true}
          />
          <InnerImageZoom
            src="apple2.jpg"
            width={400}
            height={400}
            fullscreenOnMobile={true}
          />
          <InnerImageZoom
            src="apple3.jfif"
            width={400}
            height={400}
            fullscreenOnMobile={true}
          />
    </Slick>/
    </div>
  );
}

export default App;
