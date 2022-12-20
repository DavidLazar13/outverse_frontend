import React, {useState, useEffect} from 'react';
import {ApiError, FullEventResponse, isApiError } from "../utils/typesApi";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import missionsApiClient from "../utils/missionsApiClient";
import PageContainer from "../components/styled";
import { Player } from 'video-react';

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
        <PageContainer>
            <EventHeader>
                <EventImage src={eventData?.feature_image} alt={eventData?.name}/>
            </EventHeader>
            <EventTitle>
                {eventData?.name}
            </EventTitle>
            <span>{eventData?.location}</span>
            <EventDescription>
                {eventData?.description}
            </EventDescription>
            <SecondaryTitle>Video</SecondaryTitle>
            <a href={eventData?.video_url}>Watch Here</a>
        </PageContainer>
    )
}

const EventTitle = styled.h1`
    margin-bottom: 5px;
`

const EventDescription = styled.p`
    margin-top: 20px;
`

const SecondaryTitle = styled.h2`
`

const EventHeader = styled.div`
  width: 1300px;
  height: 300px;
`

const EventImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;
