import {Button} from '../Button';
import {useNavigate} from 'react-router-dom';
import {useLayoutEffect} from 'react';
export function Video(props) {
  const navigate = useNavigate();
  const {data} = props;
  const {title, description, createdAt} = data;
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="flex justify-center m-2 hover:opacity-75">
      <div
        className="relative rounded-lg shadow-lg bg-white max-w-md max-h-min"
        onClick={() => {
          navigate('/video', {state: data});
        }}
      >
        <a data-mdb-ripple="true" data-mdb-ripple-color="light">
          <img
            className="rounded-t-lg"
            src="https://cdna.artstation.com/p/assets/images/images/031/514/156/large/alena-aenami-budapest.jpg?1603836263"
            alt=""
            // onClick={() => {
            //   navigate('/video', {state: data});
            // }}
          />
        </a>
        <div className="p-6">
          <div className="flex justify-start items-end mb-2">
            <h1 className="text-black text-xl font-medium mr-2">{title}</h1>
            <p className="text-gray-500 text-sm pb-0.5">{createdAt}</p>
          </div>
          <p className="text-base mb-4`">{description}</p>
          <div>
            <Button
              className="absolute top-1 right-1 m-0 p-0 text-lg bg-transparent hover:bg-transparent"
              title="❌"
              onClick={e => {
                console.log('TODO');
                e.stopPropagation();
              }}
            ></Button>
          </div>
        </div>
      </div>
    </div>
  );
}
