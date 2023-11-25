console.log('Loading function');

export const handler = async (event, context) => {
    return {
        statusCode: 200,
        body: JSON.stringify(
            {
                message: "Hello, from ZMW World!",
            },
          null,
          2
        ),
    };
};
