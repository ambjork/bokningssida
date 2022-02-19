import Flatpickr from 'react-flatpickr'
import 'flatpickr/dist/themes/airbnb.css'

const Datepicker = () => {

    return (
        <>
        <Flatpickr 
            id='bokningssida-flatpickr' 
            options={{ 
                altInput: 'true', 
                mode: 'range', 
                minDate: 'today',
                dateFormat: 'M:d', 
                maxDate: new Date().fp_incr(30),
                defaultDate: 'today',
                weekNumbers: true,
                inline: true 
            }} />
        <Flatpickr 
            id='bokningssida-flatpickr-starttid' 
            options={{
                enableTime: true,
                noCalendar: true,
                dateFormat: "H:i",
                time_24hr: true,
                minTime: "09:00",
                maxTime: "20:00",
                defaultDate: "12:00",
                inline: true 
        }} />
        <Flatpickr 
            id='bokningssida-flatpickr-sluttid' 
            options={{
                enableTime: true,
                noCalendar: true,
                dateFormat: "H:i",
                time_24hr: true,
                minTime: "09:00",
                maxTime: "20:00",
                defaultDate: "11:00",
                inline: true,
                disabled: true
        }} />
        </>
    )
}

export default Datepicker