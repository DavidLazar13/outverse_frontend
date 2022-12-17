import React from 'react';
import { useNavigate } from "react-router-dom";
import {Event} from "../utils/typesApi";

interface PropsEvent {
    event: Event;
}



export default function EventCard({event}:PropsEvent) {
    const navigate = useNavigate()
    const onCardClick = () => {
        navigate(`/event/${event.id}`);
    };
    return (<p onClick={onCardClick}>{event.name}</p>)
}
