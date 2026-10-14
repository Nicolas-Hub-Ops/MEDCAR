import mongoose from "mongoose";

import JsonError from "../errors/JsonError.js";
import CastError from "../errors/CastError.js";
import DuplicateKey from "../errors/DuplicateKey.js";
import InternalError from "../errors/InternalError.js";
import ValidationError from "../errors/ValidationError.js";
import NotFound from "../errors/NotFound.js";

function errorHandler(err, req, res, next) {
    if(err instanceof SyntaxError) {
        new JsonError(err).sendRes(res);
    } else if(err instanceof mongoose.Error.CastError) {
        new CastError().sendRes(res);
    } else if(err.code == 11000) {
        new DuplicateKey(err).sendRes(res);
    } else if(err instanceof mongoose.Error.ValidationError) {
        new ValidationError(err).sendRes(res);
    } else if(err instanceof NotFound) {
        err.sendRes(res);
    } else {
        new InternalError().sendRes(res);
        console.error({
            status: 500,
            message: 'Internal Error Server',
            err
        });
    };
};

export default errorHandler;