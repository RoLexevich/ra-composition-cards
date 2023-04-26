import './App.css';
import Card from './components/Card';
import data from './data/Data';


export default  function App() {
  return (
    <div className="App">
      {data.map(item => {
        return (
          <Card key={item.id} {...item}>
            <h5 className="card-title">{item.title}</h5>
            <p className="card-text">{item.descr}</p>
          </Card>
        )
      })}
    </div>
  );
}