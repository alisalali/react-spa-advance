import EventsList from "../components/EventsList";
const EventsPage = () => {
  const DUMMY_EVENTS = [
    {
      id: "e1",
      title: "Welcome to the world",
      image: "...",
      date: "12/12/2021",
    },
    {
      id: "e2",
      title: "Welcome to the space",
      image: "...",
      date: "12/12/2021",
    },
    {
      id: "e3",
      title: "Earth world",
      image: "...",
      date: "12/12/2021",
    },
  ];
  return (
    <>
      <EventsList events={DUMMY_EVENTS}></EventsList>
    </>
  );
};

export default EventsPage;
