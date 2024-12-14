import Titulo from "./Titulo"

function App() {
  return (
    <div>
      <Titulo cor="red" nome="Luan" paragrafo={true} />
      <Titulo cor="purple" nome="Lucca" />
      <Titulo cor="blue" />
      <Titulo cor="orange" />
      <Titulo/>
    </div>
  ) 
}

export default App