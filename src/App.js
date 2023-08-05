import { Routes, Route } from "react-router-dom";
import { SharedLayout } from "./components/SharedLayout/SharedLayout";
import { lazy, useEffect } from "react";
import { GlobalStyle } from "./styles/GlobalStyle";
import { useSelector } from "react-redux";
import { selectEvents } from "./redux/events/selectors";

const HomePage = lazy(() => import("./pages/Home/Home"));
const EventDetailsPage = lazy(() =>
  import("./pages/EventDetails/EventDetails")
);
const CreateEventPage = lazy(() => import("./pages/CreateEvent/CreateEvent"));
const EditEventPage = lazy(() => import("./pages/EditEvent/EditEvent"));

const App = () => {
  const events = useSelector(selectEvents);

  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
  }, [events]);

  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="details/:id" element={<EventDetailsPage />} />
          <Route path="create" element={<CreateEventPage />} />
          <Route path="edit/:id" element={<EditEventPage />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  );
};

export default App;
