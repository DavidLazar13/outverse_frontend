export type ApiResponse<T> = T[];

export type Event = {
   id: number;
   name: string;
   description: string;
};

export type ApiError = {
    message: string;
    isError: true;
};

export type FullEventResponse = {
    id: number;
    url: string
    slug: string
    name: string
    description: string
    location: string
    news_url: string
    feature_image :string
    date: number
    video_url: string
}


type ApiResponseGeneric<T> = ApiError | ApiResponse<T> | FullEventResponse;

export function isApiError<T>(data: ApiResponseGeneric<T>): data is ApiError {
    return (data as ApiError).isError;
}
