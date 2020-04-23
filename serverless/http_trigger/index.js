exports.helloWorld = async (event) => {
  // TODO implement
  const response = {
    statusCode: 200,
    body: JSON.stringify('Hello world!'),
  };
  return response;
};
