const requestLogger = (request, response, next) => {
    console.log(`Path: ${request.path}`);
    
    next()
}

const unknownEndpoint = (request, response, next) => {
    response.status(404).send({error: `unknown Endpoint`})
    next()
}

module.exports = {requestLogger, unknownEndpoint}