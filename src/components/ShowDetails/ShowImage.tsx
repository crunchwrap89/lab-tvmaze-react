interface Props {
  image: { original: string; medium: string } | null;
}

function ShowImage({ image }: Props) {
  return (
    <>
      {image && image.original ? (
        <img src={image.original} alt="show cover" className="w-full sm:w-auto sm:h-[600px] rounded" />
      ) : (
        <div className="w-full sm:w-auto sm:h-[600px] bg-gradient-to-r from-cyan-500 to-blue-500">
          No Image Found for this Show
        </div>
      )}
    </>
  );
}

export default ShowImage;
