import InternalError from "./InternalError.js";

class NotFound extends InternalError {
    constructor() {
        super(404, 'Page not found');
    };
};

export default NotFound;