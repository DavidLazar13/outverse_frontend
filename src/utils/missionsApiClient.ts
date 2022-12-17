import {ApiError, ApiResponse, Event, FullEventResponse} from "./typesApi";


class ApiClient {
  async getEventsList(
  ): Promise<ApiResponse<Event> | ApiError> {
    try {
      const response = await fetch(
          'http://code-challenge.outverse.com/events',
          {
            headers: {
              "Content-type": "application/json",
            },
          }
      );
      return await response.json();
    } catch (err) {
      console.error(err);
      return {
        message: "An error has ocurred while fetching data",
      } as ApiError;
    }
  }

  async getEventDetail(eventId: string): Promise<FullEventResponse | ApiError> {
    try {
      const response = await fetch(
          `http://code-challenge.outverse.com/events/${eventId}`,
          {
            headers: {
              "Content-type": "application/json",
            },
          }
      );
      return await response.json();
    } catch (err) {
      console.error(err);
      return {
        message: "An error has ocurred while fetching data",
      } as ApiError;
    }
  }
}


export default new ApiClient();
