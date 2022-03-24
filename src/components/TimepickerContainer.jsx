import Flatpickr from 'react-flatpickr'
import 'flatpickr/dist/themes/airbnb.css'
import './DatepickerContainer.scss'

const Timepicker = () => {

    return (
        <>
            <span className='timepicker-container'>
                <span id='span-hamtas' >Hämtas: 
        <Flatpickr 
            id='bokningssida-flatpickr-starttid'
            options={{
                altInputClass: 'invisible',
                enableTime: true,
                noCalendar: true,
                dateFormat: 'H:i',
                time_24hr: true,
                minTime: '10:00',
                maxTime: '17:00',
                defaultDate: '12:00',
                inline: true,
        }} />
        </span>
        <span id='span-lamnas'>Lämnas: 
        <Flatpickr 
            id='bokningssida-flatpickr-sluttid'
            options={{
                altInputClass: 'invisible',
                enableTime: true,
                noCalendar: true,
                dateFormat: 'H:i',
                time_24hr: true,
                minTime: '10:00',
                maxTime: '17:00',
                defaultDate: '11:00',
                inline: true,
        }} />
        </span>
        </span>
        </>
    )
}

export default Timepicker