import { useLoaderData } from "react-router-dom";
import EventsList from "../components/EventsList";
const EventsPage = () => {
  const data = useLoaderData();
  const events = data.events;
  if (data.isError) {
    return <p>{data.message}</p>;
  }
  return (
    <>
      <EventsList events={events} />
    </>
  );
};

export default EventsPage;

export async function loader() {
  const response = await fetch("http://localhost:8080/eventsxx");

  if (!response.ok) {
    return { isError: true, message: "Could not fetch events" };
  } else {
    return response;
  }
}
