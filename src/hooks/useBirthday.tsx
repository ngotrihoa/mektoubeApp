import {useRef, useState} from 'react';
import {useSelector} from 'react-redux';
import {selectBirthdayStore} from '../redux/selector/signupSelector';

const currentYear = new Date().getFullYear();

const useBirthday = () => {
  const birthdayStore = useSelector(selectBirthdayStore);
  const [day, setDay] = useState(birthdayStore?.day || '');
  const [month, setMonth] = useState(birthdayStore?.month || '');
  const [year, setYear] = useState(birthdayStore?.year || '');

  const dayRef = useRef(null);
  const monthRef = useRef(null);
  const yearRef = useRef(null);

  const getAge = (birthDate: any) =>
    Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e10);

  const isValidAge = (birthDate: any) =>
    getAge(birthDate) >= 18 && getAge(birthDate) <= 120;

  const checkLeapYear = year => {
    return (!(year % 4) && year % 100) || !(year % 400);
  };

  const handleKeyPressDay = (value: string) => {
    if (!/^[0-9]+$/.test(value))
      return setDay(value.slice(0, value.length - 1));

    let res = value;

    if (value.length === 1) {
      if (/[4-9]/.test(value)) {
        res = '0' + value;
        monthRef.current!.focus();
      }
    } else if (value.length === 2) {
      if (value === '00') res = '0';
      else if (+value > 31) res = value.slice(0, value.length - 1);
      else monthRef.current!.focus();
    }

    setDay(res);
  };

  const handleKeyPressMonth = (value: string) => {
    if (!/^[0-9]+$/.test(value))
      return setMonth(value.slice(0, value.length - 1));

    let res = value;

    if (value.length === 1) {
      if (/[2-9]/.test(value)) {
        res = '0' + value;
        yearRef.current!.focus();
      }
    } else if (value.length === 2) {
      if (value === '00') res = '0';
      else if (+value > 12) res = value.slice(0, value.length - 1);
      else yearRef.current!.focus();
    }

    setMonth(res);
  };

  const handleKeyPressYear = (value: string) => {
    if (!/^[0-9]+$/.test(value)) {
      return setYear(value.slice(0, value.length - 1));
    }

    let res = value;
    if (+value > currentYear) {
      res = value.slice(0, currentYear.toString().length - 1);
    }

    if (res.length === 4) {
      const isValid = isValidAge(`${month}/${day}/${res}`);
      if (!isValid) res = res.slice(0, currentYear.toString().length - 1);
    }

    setYear(res);
  };

  const checkDateValid = () => {
    if (+year < 1000 || +year > 3000) {
      return false;
    }

    var monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (checkLeapYear(year)) monthLength[1] = 29;
    return +day > 0 && +day <= monthLength[+month - 1];
  };

  return {
    day,
    month,
    year,
    dayRef,
    monthRef,
    yearRef,
    handleKeyPressDay,
    handleKeyPressMonth,
    handleKeyPressYear,
    checkDateValid,
  };
};

export default useBirthday;
