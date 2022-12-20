import React from 'react'
import {Event, ApiError} from "../utils/typesApi";
import EventCard from "./EventCard"
interface PropsEvents {
    eventsList: Event[]
    error: ApiError | null | undefined
}


export default function EventsList({eventsList, error}: PropsEvents){
    return(
        <div>
            {eventsList?.map((event) => {
                return <EventCard event={event} key={event.id}/>;
            })}
            {error?.message}
        </div>
    )
}
