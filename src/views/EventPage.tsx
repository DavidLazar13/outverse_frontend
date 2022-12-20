import React, {useState, useEffect, useMemo} from 'react';
import {ApiError, FullEventResponse, isApiError } from "../utils/typesApi";
import {  useParams } from "react-router-dom";
import styled from "styled-components";
import missionsApiClient from "../utils/missionsApiClient";
import PageContainer from "../components/styled";
import youtubeParser from '../utils/youtubeParser';
import Video from "../components/Video";

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


    const videoId = useMemo(() => youtubeParser(eventData?.video_url), [eventData?.video_url]);

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
            {videoId && <Video embedId={videoId}></Video> }
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
