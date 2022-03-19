import {Button} from '../components/Button';
import {Videos} from '../components/video/Videos';
import {AppBanner} from '../components/navigation/AppBanner';
import {useNavigate} from 'react-router-dom';

export default function library() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="relative">
        <AppBanner></AppBanner>
        <Button
          className="fixed bottom-5 right-5 p-5 text-xl"
          title="Potion Brewing 🧪"
          onClick={() => {
            navigate('/create');
          }}
        ></Button>
      </div>

      <div className="flex h-screen items-center justify-center flex-col mx-10">
        <p className="margin text-center text-5xl">The Hidden Library.</p>

        <Videos
          className="text-center bg-g"
          items={[
            {content: 'Mulan'},
            {content: 'Alladin'},
            {content: 'Encanto'},
            {content: 'Atlantis'},
            {content: 'Beauty and the Beast'},
          ]}
        ></Videos>

        <div className="flex items-center">
          <Button
            title="Previous"
            className="px-4 py-2 font-bold text-gray-700 bg-gray-200 rounded-md hover:bg-gray-400 hover:text-white"
            onClick={() => {
              navigate('/library');
            }}
          ></Button>
          <p className="px-10 py-2 text-gray-700 bg-gray-200 rounded-md font-mono">
            1
          </p>
          <Button
            title="Next"
            className="px-4 py-2 font-bold text-gray-700 bg-gray-200 rounded-md hover:bg-gray-400 hover:text-white"
            onClick={() => {
              navigate('/library');
            }}
          ></Button>
        </div>
      </div>
    </div>
  );
}
