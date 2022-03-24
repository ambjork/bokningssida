import Flatpickr from 'react-flatpickr'
import { Swedish } from 'flatpickr/dist/l10n/sv'


const FlatpickrComponent = (id) => {

return (<Flatpickr 
            id={id}
            options={{ 
                altInputClass: 'invisible',
                mode: 'range', 
                dateFormat: 'd M', 
                maxDate: new Date().fp_incr(183),
                minDate: new Date().fp_incr(4),
                defaultDate: new Date().fp_incr(4),
                weekNumbers: true,
                locale: Swedish
            }} />
)
}

export default FlatpickrComponent