interface CalendarWeekProps {
  date: Date;
  handleSelectDate: (date: Date) => void;
  today: Date;
}

export default function CalendarWeek({
  date,
  handleSelectDate,
  today,
}: CalendarWeekProps) {
  const DAYS = {
    일: "SUN",
    월: "MON",
    화: "TUE",
    수: "WED",
    목: "THU",
    금: "FRI",
    토: "SAT",
  };

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
    <div className="animate-slide-up p-5 duration-100">
      <div className="grid grid-cols-7 gap-4 rounded-lg text-center text-[15px]">
        {Object.keys(DAYS).map((day, index) => {
          const isWeekend = index === 0 || index === 6;

          return (
            <p
              key={`${Object.values(DAYS)[index]}OfWeek`}
              className={`leading-7 ${isWeekend ? "text-sub-text" : "text-main-text"}`}
            >
              {day}
            </p>
          );
        })}
      </div>
      <div className="grid grid-cols-7 gap-4 rounded-lg text-center text-[0.8rem]">
        {getCurrentWeek().map((calendarNumber) => {
          return (
            <div
              key={`day_${calendarNumber.getDate()}`}
              className="flex w-full items-center justify-center"
              onClick={() => {
                handleSelectDate(calendarNumber);
              }}
            >
              <div
                tabIndex={0}
                className={`bold mt-[20px] flex h-9 w-9 cursor-pointer items-center justify-center rounded-md text-[15px] leading-7 transition-all duration-200 hover:bg-main-text hover:text-[#000] hover:transition ${calendarNumber.getDate() === today.getDate() && "text-red-500 focus:text-[#000]"} ${date.getDate() === calendarNumber.getDate() && "bg-white text-[#000] focus:text-[#000]"}`}
              >
                {calendarNumber.getDate()}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
