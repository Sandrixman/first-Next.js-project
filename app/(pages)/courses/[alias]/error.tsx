"use client";

export default function error({ reset }: { reset: () => void }) {
    return (
        <>
            <div>Page not found</div>
            <button type="button" onClick={() => reset()}>
                Reset
            </button>
        </>
    );
}
