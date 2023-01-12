interface Props {
  summary: string | null;
}

function ShowSummary({ summary }: Props) {
  return (
    <>
      {summary ? (
        <div className="mt-2 p-2 sm:mt-0 sm:ml-4 sm:w-[400px]" dangerouslySetInnerHTML={{ __html: summary }} />
      ) : (
        <div className="mt-2 p-2 sm:mt-0 sm:ml-4 sm:w-[400px]">No summary found for this show..</div>
      )}
    </>
  );
}

export default ShowSummary;
