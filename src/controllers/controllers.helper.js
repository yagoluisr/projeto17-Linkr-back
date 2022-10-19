const STATUS_CODE = Object.freeze({
    OK: 200,
    CREATED: 201,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    SERVER_ERROR: 500,
  });
  
  const STATUS_TEXT = Object.freeze({
    OK: 'ok',
    CREATED: 'created',
    BAD_REQUEST: 'bad request',
    UNAUTHORIZED: 'unauthorized',
  });
  
  function okResponse(res, text = STATUS_TEXT.OK) {
    return res.status(STATUS_CODE.OK).send(text);
  }
  
  function createdResponse(res, text = STATUS_TEXT.CREATED) {
    return res.status(STATUS_CODE.CREATED).send(text);
  }
  
  function badRequestResponse(res, text = STATUS_TEXT.BAD_REQUEST) {
    return res.status(STATUS_CODE.BAD_REQUEST).send(text);
  }

  function unauthorizedResponse(res, text = STATUS_TEXT.UNAUTHORIZED) {
    return res.status(STATUS_CODE.UNAUTHORIZED).send(text);
  }
  
  function serverErrorResponse(res, error) {
    console.error(error);
    return res.status(STATUS_CODE.BAD_REQUEST);
  }
  
  export { badRequestResponse, unauthorizedResponse, serverErrorResponse, createdResponse, okResponse };