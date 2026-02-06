import { useEffect, useState } from "react";
import dayjs from "dayjs";

export default function Countdown({ date }) {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const diff = dayjs(date).diff(dayjs(), "day");
      setTimeLeft(`${diff} hari lagi`);
    }, 1000);

    return () => clearInterval(interval);
  }, [date]);

  return <p>{timeLeft}</p>;
}
