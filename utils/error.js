const catchAsync = func => {
	return (req, res, next) => {
		func(req, res, next).catch((error) => next(error))
	}
}

const globalErrorHandler = (err, req, res, next) => {
	console.error(err.stack)

	err.statusCode = err.statusCode || 500;

	res.status(err.statusCode).json({ message: err.message })
}
//middle warea error 처리하기 위한 middle ware.

const raiseCustomError = (message, statusCode) => {
	const err = new Error(message);
	err.statusCode = statusCode;
	throw err;
  };


module.exports = { catchAsync, globalErrorHandler, raiseCustomError }