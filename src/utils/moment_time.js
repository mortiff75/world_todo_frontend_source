import moment from "moment";
class MomentDate {
  static prettyDate({ date }) {
    const instance = moment(date);
    // const parse_date = instance.format("MMMM DD YYYY HH:mm:ss A");

    const diff = instance.fromNow(new Date());

    const isAfter = instance.isAfter(moment());

    return diff + `${isAfter ? " later" : " ago"}`;
  }

  static isAfterFromDate({ date }) {
    const instance = moment(date);
    const result = instance.isAfter(moment());
    console.log(result);

    return result;
  }
}

export default MomentDate;
