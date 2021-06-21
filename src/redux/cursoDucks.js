
//constantes
const dataInicial={
    curso: null
}

//types
const OBTENER_CURSO = 'OBTENER_CURSO'

//reducer

export default function cursoReducer(state = dataInicial,action){
    switch(action.type) {
        case OBTENER_CURSO:
            return {...state, curso: action.payload}
        default:
            return state
    }
}


//acciones
    
export const obtenerCursoAccion =(curso)=>(dispatch, getState)=>{
    try {
        dispatch({
            type: OBTENER_CURSO,
            payload: curso
        })
    } catch (error) {
        console.log(error);   
    }
}