function Error({ statusCode }) {
  return (
    <>
      <p>
        {statusCode
          ? `${statusCode} error occurred on server, please be patient while we fix this`
          : `${statusCode} error!`}
      </p>
    </>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
