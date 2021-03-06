import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './index.css';
import App from './App';
import Customize from './routes/customize';
import Library from './routes/library';
import Create from './routes/create';
import Video from './routes/video';
import reportWebVitals from './reportWebVitals';
import gqlClient from '../src/services';
import {ApolloProvider} from '@apollo/client';
import frontEndConfig from './config';
import Loading from './routes/loading';
import FailedRender from './routes/failed_render';
import TimeoutRender from './routes/timeout_render';
import Unauthenticated from './routes/unauthenticated';
import Container from './Container';

console.log(`🧙 Started Gource Wizard at ${frontEndConfig.url}`);

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={gqlClient}>
      <BrowserRouter>
        <Container>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="library" element={<Library />} />
            <Route path="create" element={<Create />} />
            <Route path="customize" element={<Customize />} />
            <Route path="loading" element={<Loading />} />
            <Route path="video/:videoId" element={<Video />} />
            <Route path="video/failed" element={<FailedRender />} />
            <Route path="video/timeout" element={<TimeoutRender />} />
            <Route path="unauthenticated" element={<Unauthenticated />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
