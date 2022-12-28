export const groupArrBy = (items: {[key: string]: any}[], key: string) =>
  items.reduce(
    (result, item) => ({
      ...result,
      [item[key]]: [...(result[item[key]] || []), item],
    }),
    {}
  );

export const twoDigits = (num: number) => (num >= 10 ? num : `0${num}`);

// convert time in seconds to hr:min:sec
export const convertSecToTime = (sec: number): string => {
  let seconds = sec % 60;
  let secondsInMinutes = (sec - seconds) / 60;
  let minutes = secondsInMinutes % 60;
  let hours = (secondsInMinutes - minutes) / 60;
  return (
    twoDigits(hours) + " . " + twoDigits(minutes) + " . " + twoDigits(seconds)
  );
};
