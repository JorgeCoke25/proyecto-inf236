import React ,{useState} from 'react'
import Calendar from 'react-calendar'

function Calendario() {
    const [date, setDate] = useState(new Date());

    const onChange = ()=>{
        setDate(date);
    }
    return (
        <div className="calendario">
            <Calendar onChange={onChange} value={date}/>
        </div>
    )
}

export default Calendario;
