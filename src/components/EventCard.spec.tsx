import React from "react";
import EventCard from "./EventCard";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";

// Mock for useNavigate
const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
    ...(jest.requireActual("react-router-dom") as any),
    useNavigate: () => mockedUsedNavigate,
}));

describe('Render EventCard component',()=>{
 const event = {
     id: 317,
     name: 'Russian EVA-50',
     description: 'Roscosmos cosmonauts Oleg Novitskiy and Pyotr Dubrov will exit the International Space Station through the Poisk airlock to continue establishing external cable connections between the new MLM Nauka module and the Zvezda module.'
 }

    test("The Movie is rendered correctly", () => {
        render(<EventCard event={event} />);

        // DOM Query
        expect(
            screen.getByTestId(`event-card-title-${event.id}`)
        ).toHaveTextContent(event.name);
    });
})
