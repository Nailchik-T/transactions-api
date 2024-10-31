export interface IErrorItem {
    type: string;
    messages: string[];
}

export class ApiError extends Error {
    status;
    errors;

    constructor(status: number, message: string, errors: IErrorItem[] = []) {
        super(message);
        this.status = status;
        this.errors = errors;
    }

    static BadRequest(message: string, errors: IErrorItem[] = []): ApiError {
        return new ApiError(400, message, errors);
    }

    static NotFound(message: string): ApiError {
        return new ApiError(404, message);
    }
}
