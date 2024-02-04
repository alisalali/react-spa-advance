import {
  json,
  redirect,
  useLoaderData,
  useRouteLoaderData,
} from "react-router-dom";
import EventItem from "../components/EventItem";

const EventDetailPage = () => {
  const data = useRouteLoaderData("event-detail");
  const event = data.event;

  return <EventItem event={event} />;
};

export default EventDetailPage;

export const loader = async ({ request, params }) => {
  const id = params.eventId;

  const response = await fetch("http://localhost:8080/events/" + id);
  if (!response.ok) {
    throw json({ message: "Error fetching event" }, { status: 500 });
  } else {
    console.log();
    return response;
  }
};

export const action = async ({ params }) => {
  const eventId = params.eventId;
  const response = await fetch("http://localhost:8080/events/" + eventId, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw json(
      { message: "Could not fetch details for selected event." },
      {
        status: 500,
      }
    );
  } else {
    return redirect("/events");
  }
};
