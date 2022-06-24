import Header from './components/header/Header';
import { Card } from './components/cards/Card';
import { data } from './helper/data';
import './App.scss';

function App() {
  return (
    <>
      <Header />
      <main>
        {
          data.map((item, index) => {
            return <Card
              key={index}
              {...item}

            />
          })
        }
      </main>
    </>
  );
}

export default App;
