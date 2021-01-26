import React from 'react'
import Header from './Header'


const MyApp = ({ infoTime, infoZone, infoHour, quote, onChangeQuote, isNight }) => {
    return (
        <>
            <Header quote={quote} onChangeQuote={onChangeQuote} />
            <section>
                123
            </section>
        </>
    )
}

export default MyApp