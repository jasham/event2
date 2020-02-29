import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faListAlt } from "@fortawesome/free-regular-svg-icons"
import { faBell } from "@fortawesome/free-regular-svg-icons"
import { Home } from "react-feather"
import { Users } from "react-feather"
import { User } from "react-feather"
import { Mail } from "react-feather"
import { properties } from '../../conf/properties'

export const Icons = (props) => {
    switch(props.icon){
        case "home" :
            return(
                <Home color={properties.lightGrey} />
            )
        case "users" :
            return(
                <Users color={properties.lightGrey} />
            )
        case "mail" :
            return(
                <Mail color={properties.lightGrey} />
            )
        case "user" :
            return(
                <User color={properties.lightGrey} />
            )
    }
}