import React, {useEffect, useState} from "react";
import {ApiError, Event, isApiError} from "../utils/typesApi";
import { PageContainer } from "../components/styled";
import { useDebounce } from 'usehooks-ts'
import missionsApiClient from "../utils/missionsApiClient";
import EventsList from "../components/EventsList";
import SearchBar from "../components/SearchBar";
import Header from "../components/Header";

export default function MainPage() {

    const [eventsList, setEventsList] = useState<Event[]>([]);
    const [error, setFetchError] = useState<ApiError | null>();
    const [searchValue, setSearchValue] = useState<string>('');

    const debouncedSearchValue = useDebounce<string>(searchValue, 500)

    async function getEvents() {
        const response = await missionsApiClient.getEventsList(searchValue);
        if (isApiError(response)) {
            setFetchError(response);
        } else {
            setEventsList(response);
        }
    }

    useEffect(() => {
        getEvents();
    }, [debouncedSearchValue]);
    return(
        <PageContainer>
            <Header></Header>
            <SearchBar searchValue={searchValue} change={setSearchValue}></SearchBar>
            <EventsList eventsList={eventsList} error={error}/>
        </PageContainer>
    )
}
