"use client";

export default function error({
    error,
    reset,
}: {
    error: Error;
    reset: () => void;
}) {
    return (
        <>
            <div>Page not found</div>
            <div>{error.message}</div>
            <button type="button" onClick={() => reset()}>
                Reset
            </button>
        </>
    );
}
