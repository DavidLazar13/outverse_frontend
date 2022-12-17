import React, {useEffect, useState} from "react";
import {ApiError, Event, isApiError} from "../utils/typesApi";
import missionsApiClient from "../utils/missionsApiClient";
import EventsList from "../components/EventsList";

export default function MainPage() {

    const [eventsList, setEventsList] = useState<Event[]>([]);
    const [error, setFetchError] = useState<ApiError | null>();

    async function getEvents() {
        const response = await missionsApiClient.getEventsList();
        if (isApiError(response)) {
            setFetchError(response);
        } else {
            setEventsList(response);
        }
    }

    useEffect(() => {
        getEvents();
    });
    return(
        <div>
            <EventsList eventsList={eventsList} error={error}/>
        </div>
    )
}
