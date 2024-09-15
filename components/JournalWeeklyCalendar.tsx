interface JournalWeeklyCalendarProps {
  today: Date;
  selectDate: Date;
  handleClickSetSelectDate: (date: Date) => void;
}

export default function JournalWeeklyCalendar({
  today,
  selectDate,
  handleClickSetSelectDate,
}: JournalWeeklyCalendarProps) {
  const DAYS = [
    { day: "일", key: "sunday" },
    { day: "월", key: "monday" },
    { day: "화", key: "theusday" },
    { day: "수", key: "wednesday" },
    { day: "목", key: "thursday" },
    { day: "금", key: "friday" },
    { day: "토", key: "saturday" },
  ];

  const getCurrentWeek = () => {
    const currentDate = new Date();
    const currentDay = currentDate.getDay();

    const startDayOfWeek = currentDate.getDate() - currentDay;
    const startDate = new Date(currentDate.setDate(startDayOfWeek));

    const week = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);
      week.push(date);
    }

    return week;
  };

  return (
    <div className="w-full animate-slide-up p-5 duration-100">
      <div className="grid grid-cols-7 gap-4 rounded-lg text-center">
        {DAYS.map((day, index) => {
          const isWeekend = index === 0 || index === 6;

          return (
            <p
              key={`${day.key}OfWeek`}
              className={`leading-7 ${isWeekend ? "text-sub-text" : "text-main-text"}`}
            >
              {day.day}
            </p>
          );
        })}
      </div>
      <div className="grid grid-cols-7 gap-4 rounded-lg text-center">
        {getCurrentWeek().map((date) => {
          return (
            <div
              key={`day_${date.getDate()}`}
              className="flex w-full items-center justify-center"
              onClick={() => {
                handleClickSetSelectDate(date);
              }}
            >
              <div
                tabIndex={0}
                className={`bold mt-[20px] flex h-9 w-9 cursor-pointer items-center justify-center rounded-md leading-7 transition-all duration-200 hover:bg-main-text hover:text-[#000] hover:transition ${date.getDate() === today.getDate() && "text-red-500 focus:text-[#000]"} ${selectDate.getDate() === date.getDate() && "bg-white text-[#000] focus:text-[#000]"}`}
              >
                {date.getDate()}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
