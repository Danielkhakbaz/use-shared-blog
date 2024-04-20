"use client";

type ErrorProps = {
  error: Error;
  reset: () => void;
};

const Error = ({ error, reset }: ErrorProps) => {
  return (
    <div>
      <p>{error.message}</p>
      <button onClick={reset}>
        <span>Try Again</span>
      </button>
    </div>
  );
};

export default Error;
