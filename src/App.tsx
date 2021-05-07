import { Helmet } from 'react-helmet';

import './App.scss';
import Header from './organisms/header';
import SectionDescription from './atoms/section-description';
import PurgeButton from './atoms/purge-button';

function App() {
  return (
    <>
      <Helmet>
        <title>ICON // Fancy Button</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400&display=swap" rel="stylesheet" />
      </Helmet>
      <Header />
      <main className="App">
        <SectionDescription title="Fancy Button">
          Use this <a href="https://www.figma.com/file/HDQ6aAV1iD5vmBBLo3zQI2/Exercise?node-id=0%3A1" rel="noreferrer" target="_blank">design</a> to build an interactive button.
        </SectionDescription>
        <section className="flex flex-col items-center">
          <PurgeButton />
        </section>
      </main>
    </>
  );
}

export default App;
