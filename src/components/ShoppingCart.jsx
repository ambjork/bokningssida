import React from 'react'

function ShoppingCart() {

    function getItems() {
        const items = []
        items.push('Paket 1')
        items.push('Paket 2')
        return items.map(item => <li>{item}</li>)
    }

    return <ul>{getItems()}</ul>
}

export default ShoppingCart