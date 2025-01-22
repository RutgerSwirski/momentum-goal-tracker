import Button from "../common/Button";
import Card from "../common/Card";
import Text from "../common/Text";

const UpcomingEvents = ({ events }) => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {events.map((event) => (
        <Card key={event.id} className="p-4" style={{ height: "fit-content" }}>
          <div className="flex justify-between items-center">
            <Text type="body" className="font-semibold text-lg">
              {event.title}
            </Text>
            {event.isTrending && (
              <span className="text-sm text-white bg-red-500 px-2 py-1 rounded-full">
                Trending
              </span>
            )}
          </div>

          <Text type="bodySmall" className="text-gray-500 mt-2">
            {event.description}
          </Text>

          <Text type="bodySmall" className="text-gray-400 mt-2">
            {event.participants} participants
          </Text>

          <Text type="bodySmall" className="text-gray-400 mt-2">
            {event.startDate} - {event.endDate}
          </Text>

          <div className="mt-4">
            <Button>Join Event</Button>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default UpcomingEvents;
