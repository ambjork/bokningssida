import Flatpickr from 'react-flatpickr'
import 'flatpickr/dist/themes/airbnb.css'
import './DatepickerContainer.scss'

const Datepicker = () => {

    return (
        <>
        {/* <Flatpickr 
            id='bokningssida-flatpickr-datum' 
            options={{ 
                altInput: 'true', 
                mode: 'range', 
                minDate: 'today',
                dateFormat: 'M:d', 
                maxDate: new Date().fp_incr(30),
                defaultDate: 'today',
                weekNumbers: true,
                inline: true 
            }} /> */}
            <span className='timepicker-container'>
                <span id='span-hamtas' >Hämtas: 
        <Flatpickr 
            id='bokningssida-flatpickr-starttid'
            options={{
                enableTime: true,
                noCalendar: true,
                dateFormat: 'H:i',
                time_24hr: true,
                minTime: '09:00',
                maxTime: '20:00',
                defaultDate: '12:00',
                inline: true,
        }} />
        </span>
        <span id='span-lamnas'>Lämnas: 
        <Flatpickr 
            id='bokningssida-flatpickr-sluttid'
            options={{
                enableTime: true,
                noCalendar: true,
                dateFormat: 'H:i',
                time_24hr: true,
                minTime: '09:00',
                maxTime: '20:00',
                defaultDate: '11:00',
                inline: true,
        }} />
        </span>
        </span>
        </>
    )
}

export default Datepicker