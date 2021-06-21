import React, { useState } from 'react'
import Titulo from '../general/Titulo';
import Cursos from './Cursos';
import Calendario from './Calendario';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Calendar from 'react-calendar'
  
  

function Alumno() {
    const titulo = useSelector(store=>store.cursos.curso?.title);
    const curso = useSelector(store=>store.cursos.curso)
    const [date, setDate] = useState(new Date());

    const onChange = ()=>{
        setDate(date);
    }
    return (
        <Router>
            <Switch>
                <Route path={`/alumno/${titulo}/planificacion`}>
                    <div className="alumno" style={{backgroundImage:`${curso?.image}`}}>
                        <Titulo/>
                        <hr/>
                        <h1>{titulo}</h1>
                        <h2>{curso?.profesor}</h2>
                        <img className="imagen-curso" src={curso?.image}/>
                        <hr/>
                        <Calendar onChange={onChange} value={date}/>
                        <Link className="btn" to={`/alumno/${titulo}`}>Volver</Link>
                    </div>
                </Route>
                <Route path={`/alumno/${titulo}/material`}>
                    <div className="alumno" style={{backgroundImage:`${curso?.image}`}}>
                        <Titulo/>
                        <hr/>
                        <h1>{titulo}</h1>
                        <h2>{curso?.profesor}</h2>
                        <img className="imagen-curso" src={curso?.image}/>
                        <hr/>
                        <h1>material de apoyo.exe</h1>
                        <Link className="btn" to={`/alumno/${titulo}`}>Volver</Link>
                    </div>
                </Route>
                <Route path={`/alumno/${titulo}`}>
                    <div className="alumno" style={{backgroundImage:`${curso?.image}`}}>
                        <Titulo/>
                        <hr/>
                        <h1>{titulo}</h1>
                        <h2>{curso?.profesor}</h2>
                        <img className="imagen-curso" src={curso?.image}/>
                        <hr/>
                        <Link className="btn" to={`/alumno/${titulo}/planificacion`}>Desplegar planificacion</Link>
                        <Link className="btn" to={`/alumno/${titulo}/material`}>Material de apoyo</Link>
                    </div>
                </Route>
                <Route path="/alumno/calendario">
                    <div className="alumno">
                        <Titulo/>
                        <hr/>
                        <Calendario/>
                    </div>
                </Route>
                <Route path="/alumno">
                    <div className="alumno">
                        <Titulo/>
                        <hr/>
                        <Cursos/>
                    </div>
                </Route>
            </Switch>
        </Router>

    )
}

export default Alumno;
