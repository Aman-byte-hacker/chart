import CustomChart from './components/customChart';
import MyLineChart from './components/lineChart';


const App = () => {
  return (
    <div style={{ marginLeft: '10%' }} className="App">
      <header className="App-header">
        <h1>Wallets</h1>
        <div className='charts' style={{ display: 'flex'}}>
        <CustomChart />
        <MyLineChart />
        </div>
      </header>
    </div>
  )
}

export default App;