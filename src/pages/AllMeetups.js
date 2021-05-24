import { useState, useEffect } from "react";

import MeetupList from "../components/meetups/MeetupList";

function AllMeetups() {
  const [loading, setLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([])

  // Fetching data without causing an infinite loop
  useEffect(() => {
    setLoading(true)
    fetch(
      "https://react-getting-started-11c5d-default-rtdb.firebaseio.com/meetups.json"
    ).then(res => {
        return res.json()
      }).then(data => {
        let meetups = []
        for(const key in data) {
          const meetup = {
            id: key,
            ...data[key]
          }
          meetups.push(meetup)
        }
        setLoading(false)

        setLoadedMeetups(meetups)
      })
  }, [])

  if (loading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
}

export default AllMeetups;
