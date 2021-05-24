import MeetupItem from "./MeetupItem";
import cls from "./MeetupList.module.css";

function MeetupList(props) {
  return (
    <ul className={cls.list}>
      { props.meetups.map(meetup => {
        return <MeetupItem 
        key={meetup.id}
        id={meetup.id}
        image={meetup.image}
        title={meetup.title}
        address={meetup.address}
        description={meetup.description} />
      }) }
    </ul>
  );
}

export default MeetupList;
