//not found

const notFound = (req, res, next) => {
    const error = new Error(`Not found : ${req.originalUrl}`)
    res.status(error);
    next(error)
}

//Error Handler

const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode == 200 ? 500 : res.statusCode
    res.status(statusCode)
    res.json({
        msg: err?.message,
        stack:err?.stack,
    });
}

module.exports = { errorHandler, notFound }