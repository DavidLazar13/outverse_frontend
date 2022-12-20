import React from 'react';
import styled from "styled-components";
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
    return (
        <EventCardContainer onClick={onCardClick}>
            <EventTitle>{event.name}</EventTitle>
            <EventDescription>{event.description}</EventDescription>
        </EventCardContainer>
    )
}

const EventCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 20px);
  border: solid 1px #b2bec3;
  border-radius: 30px ;
  margin-right: 10px;
  margin-left: 10px;
  margin-bottom: 20px;
  padding: 0 20px 20px 20px;
  box-sizing: border-box;
  background-color: white;
  &:hover {
    // background-color: #b2bec3;
    cursor: pointer;
    transform: scale(1.03);
    border-color: black;
  }
`;

const EventTitle = styled.h3`
  color: #2d3436;
  margin-bottom: 5px;
  text-decoration: none;
`;

const EventDescription = styled.div`
  color: #636e72;
  text-decoration: none;
  overflow: hidden;
  font-size: 0.8em;
  // white-space: nowrap;
  text-overflow: ellipsis;
`
