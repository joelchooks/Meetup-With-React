import MeetupList from "../components/meetups/MeetupList";
import { useState, useEffect } from "react";
 
 
 


function AllMeetUpsPage(){
    const [isLoading, setIsloading] = useState(false)
    const [loadedMeetups, setLoadedMeetups] = useState([])

    useEffect(() => {
        setIsloading(true)
        fetch(
            'https://react-train-cd04a-default-rtdb.firebaseio.com/meetups.json'
        ).then(response => {
            return response.json();
        }).then(data => {
            const meetups = [];

            for(const key in data) {
                const meetup = {
                    id: key,
                    ...data[key]
                };

                meetups.push(meetup)
            }


            setIsloading(false)
            setLoadedMeetups(meetups)
        })
    }, [])

  
    if (isLoading){
        return <section>
            <p>Loading...</p>
        </section>
    }

    return (
    <section>
        <h1>All Meetups</h1>
       <MeetupList meetups={loadedMeetups} />
    </section>
)}

export default AllMeetUpsPage; 