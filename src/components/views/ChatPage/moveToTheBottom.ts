export const moveToTheBottom = (
  ref: React.MutableRefObject<HTMLDivElement | null>
) => {
  if (ref.current) {
    ref.current.scrollTo(0, ref.current.scrollHeight);
  }
};
