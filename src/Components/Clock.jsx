import React from 'react'

import IconSun from '../assets/icon-sun.svg'
import IconMoon from '../assets/icon-moon.svg'
import Button from './Button'

const Clock = ({ infoZone, infoHour, isNight, isMore, onToggleMore }) => {

    const SayHello = () => {
        if (infoHour.hour >= 5 && infoHour.hour <12) {
            return `Good morning`
        } else if (infoHour.hour >= 12 && infoHour.hour < 18) {
            return `Good afternoon`
        }else if (infoHour.hour >= 18 || infoHour.hour < 5) {
            return `Good evening`
        }
    } 


    return (
        <section id="clock" className={isMore ? "more" : "less"}>
            <p className="top-text">
                <img className="icon" alt="icon" src={
                        isNight ? IconMoon : IconSun
                    }
                />
                <span className="good">
                    { SayHello() }
                </span>
            </p>
            <h1 className="hour">{infoHour.hours}<span className="more-hour">BST</span></h1>
            <p className="localisation">
                in {
                    infoZone.city !== "" ? infoZone.city : "Paris"
                }, {
                    infoZone.country_code !== "" ? infoZone.country_code : "FR"
                }
            </p>
            <Button isMore={isMore} onToggleMore={onToggleMore} />
        </section>
    )
}

export default Clock