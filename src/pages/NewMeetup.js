import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { useHistory } from "react-router-dom";

function NewMeetup() {
  const history = useHistory();

  const addMeetup = async (meetupData) => {
    await fetch(
      "https://react-getting-started-11c5d-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    history.replace("/");
  };

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetup} />
    </section>
  );
}

export default NewMeetup;
