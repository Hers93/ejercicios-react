import logo from './logo.svg';
import Estado from './componente/Estado'
import RenderizadoCondicional from './componente/RenderizadoCondicional';
import RenderizadoElementos from './componente/RenderizadoElementos';
import {EventosES6, EventosES7, MasSobreEventos} from './componente/Eventos'
import CominicacionComponentes from './componente/ComunicacionComponentes'
import AjaxApis from './componente/AjaxApis'
import ContadorHooks from './componente/ContadorHooks'
import ScrollHooks from './componente/ScrollHooks'
import RelojHook from './componente/RelojHook'
import AjaxHooks from './componente/AjaxHooks'
import HooksPersonalizados from './componente/HooksPersonalizados'
import Referencias from './componente/Referencias'
import Formularios from './componente/Formularios'

import './App.css';

function App() {
  return (
    <div className="App">
      <Estado />
      <hr />
      <RenderizadoCondicional />
      <hr />
      <RenderizadoElementos />
      <hr />
      <EventosES6 />
      <hr />
      <EventosES7 />
      <hr />
      <MasSobreEventos />
      <hr />
      <CominicacionComponentes />
       {/* <hr />
      <AjaxApis /> */}
 
      <hr />
      <ContadorHooks />
      <hr />
      <ScrollHooks />
      <hr />
      <RelojHook />
      <hr />
      <AjaxHooks />
      <hr />
      <HooksPersonalizados />
      <hr />
      <Referencias />
      <hr />
      <Formularios />
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    </div>
  )
}

export default App;
