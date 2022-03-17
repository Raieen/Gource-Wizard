import {Button} from '../components/Button';
import {Videos} from '../components/video/Videos';
import {useNavigate} from 'react-router-dom';

export default function library() {
  const navigate = useNavigate();
  return (
    <div>
      <h1 className="margin">🧙 Gource Wizard ✨</h1>

      <div className="flex h-screen items-center justify-center flex-col">
        <p className="margin text-center text-5xl">The Hidden Library.</p>

        <Button
          title="Wizards Tower 🧙"
          onClick={() => {
            navigate('/');
          }}
        ></Button>
        <Videos
          className="text-center"
          items={[
            {content: 'Mulan'},
            {content: 'Alladin'},
            {content: 'Encanto'},
            {content: 'Atlantis'},
            {content: 'Beauty and the Beast'},
          ]}
        ></Videos>
      </div>
    </div>
  );
}
