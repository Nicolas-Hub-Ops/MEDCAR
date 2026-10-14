import InternalError from "./InternalError.js";

class ValidationError extends InternalError {
    constructor(err) {
        const message = Object.fromEntries(
            Object.entries(err.errors)
                .map(([field, error]) => [field, error.message])
        );
        super(400, message)
    };
};

export default ValidationError;