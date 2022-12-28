function AvatarsWrap({
  images,
  maxImg = 4,
}: {
  images: string[];
  maxImg?: number;
}) {
  return (
    <>
      {images.length > 0 ? (
        <div className="mt-3 flex justify-end -space-x-2 overflow-hidden">
          {images.slice(0, maxImg).map((el, i) => (
            <img
              key={el + i}
              className="inline-block h-7 w-7 rounded-full ring-2 ring-white"
              src={el}
              alt="avatar"
            />
          ))}
          {images.slice(4).length > 0 && (
            <div className="inline-flex items-center justify-center h-7 w-7 rounded-full ring-2 ring-white bg-green-100">
              +{images.slice(4).length}
            </div>
          )}
        </div>
      ) : null}
    </>
  );
}

export default AvatarsWrap;
