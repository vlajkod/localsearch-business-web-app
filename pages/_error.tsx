const Error = ({ statusCode, message }) => {
    return (
        <div className="errorContainer">
            <h1 className="bold">ERROR :(</h1>
            <p>Something went wrong.</p>
            <br />
            <p>{statusCode ? `An error ${statusCode} occurred on server` : 'An error occurred on client'}</p>
            {message && <p>{message}</p>}
            <br />
        </div>
    );
};

Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
    const message = err && err.message;
    return { statusCode, message };
};

export default Error;
