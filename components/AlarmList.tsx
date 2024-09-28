import AlarmItem from "./AlarmItem";

interface AlarmListProps {
  data: {
    profileImageUrl: string;
    content: string;
    time: string;
    connectRequest: boolean;
  }[];
}

export default function AlarmList({ data }: AlarmListProps) {
  return (
    <div className="flex flex-col gap-3">
      {data.map(({ profileImageUrl, content, time, connectRequest }) => (
        <AlarmItem
          key={content}
          profileImageUrl={profileImageUrl}
          content={content}
          time={time}
          connectRequest={connectRequest}
        />
      ))}
    </div>
  );
}
