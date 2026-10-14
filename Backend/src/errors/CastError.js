import InternalError from "./InternalError.js";

class CastError extends InternalError {
    constructor() {
        super(400, 'Unformatted');
    };
};

export default CastError;