import { useRef } from "react";

import cls from "./NewMeetupForm.module.css";
import Card from "../ui/Card";

function NewMeetupForm({ onAddMeetup }) {
  const title = useRef();
  const image = useRef();
  const desc = useRef();
  const address = useRef();

  const submitHandler = (event) => {
    // prevent browser from refreshing the page
    // handle the request with pure JS
    event.preventDefault();
    const enteredTitle = title.current.value; //read value from input
    const enteredImage = image.current.value;
    const enteredDesc = desc.current.value;
    const enteredAddress = address.current.value;

    const meetupData = {
      title: enteredTitle,
      address: enteredAddress,
      description: enteredDesc,
      image: enteredImage,
    };

    onAddMeetup(meetupData)
  };

  return (
    <Card>
      <form noValidate className={cls.form} onSubmit={submitHandler}>
        <div className={cls.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" ref={title} />
        </div>
        <div className={cls.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image" ref={image} />
        </div>
        <div className={cls.control}>
          <label htmlFor="address">Address</label>
          <input type="text" required id="address" ref={address} />
        </div>
        <div className={cls.control}>
          <label htmlFor="description">Meetup Title</label>
          <textarea rows="5" required id="description" ref={desc} />
        </div>
        <div className={cls.actions}>
          <button type="submit">Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
