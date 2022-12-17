import React, {useState, useEffect} from 'react';
import {ApiError, FullEventResponse, isApiError } from "../utils/typesApi";
import { Link, useParams } from "react-router-dom";
import missionsApiClient from "../utils/missionsApiClient";

export default function EventPage(){
    const { id } = useParams() as { id: string };
    const [error, setFetchError] = useState<ApiError | null>();
    const [eventData, setEventData] = useState<FullEventResponse | null>()

    useEffect(() => {
        missionsApiClient.getEventDetail(id).then((data) => {
            if (isApiError(data)) {
                setFetchError(error);
            } else {
                setEventData(data);
            }
        });
    }, []);

    return(
        <p>
            {eventData?.name}
        </p>
    )
}
