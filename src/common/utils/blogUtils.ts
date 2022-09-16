import moment from "moment";

const getTimeDiffString = (timeString: string): string => {
  const time = moment(timeString, "YYYY-MM-DD HH:mm:ss");
  const now = moment();
  const Diff = moment.duration(now.diff(time));

  switch (true) {
    case Diff.asSeconds() < 60:
      return `${Math.floor(Diff.asSeconds())}초 전`;
    case Diff.asMinutes() < 60:
      return `${Math.floor(Diff.asMinutes())}분 전`;
    case Diff.asHours() < 24:
      return `${Math.floor(Diff.asHours())}시간 전`;
    case Diff.asDays() < 30:
      return `${Math.floor(Diff.asDays())}일 전`;
    // XXX: 그달의 말일에 따라서 다르게 줘야하나..?
    case Diff.asMonths() < 12:
      return `${Math.floor(Diff.asMonths())}개월 전`;
    default:
      return `${Math.floor(Diff.asYears())}년 전`;
  }
};

export default getTimeDiffString;
