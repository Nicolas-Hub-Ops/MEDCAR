class InternalError extends Error {
    constructor(status = 500, message = 'Internal Error Server') {
        super();
        this.status = status;
        this.message = message;
    };

    sendRes(res) {
        res.status(this.status).json({
            status: this.status,
            message: this.message
        });
    };
};

export default InternalError;