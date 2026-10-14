import NotFound from "../errors/NotFound.js";

function error404(req, res, next) {
    const err = new NotFound();
    next(err);
};

export default error404;