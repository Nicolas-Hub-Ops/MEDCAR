import InternalError from "./InternalError.js";

class JsonError extends InternalError {
    constructor(err) {
        const message = {
            message: 'Unformatted JSON',
            type: err.type,
            body: err.body,
        };
        super(400, message);
    };
};

export default JsonError;