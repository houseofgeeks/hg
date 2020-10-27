import React, { useEffect, useState } from "react";
import axios from "axios";
import Notify from "../../Notify";
import { ToastContainer } from "react-toastify";
import "./eventManage.css";
import { MdDelete } from "react-icons/md";
import { BiDetail } from "react-icons/bi";
import EventModal from "./EditEvent";

const EventManage = () => {
  const [events, fillEvents] = useState([]);
  const [loadStatus, updateLoadStatus] = useState({
    message: "Loading . . .",
    color: "#fff",
  });
  const [viewModal, showModal] = useState(-1);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API || ''}/event/all`)
      .then((res) => {
        fillEvents([...res.data.result]);
        updateLoadStatus({ message: "Loaded" });
      })
      .catch((err) => {
        Notify("Something went wrong! Try reloading", "err");
        updateLoadStatus({
          message: "Loading failed, Try RELOADING . . .",
          color: "#ee2a7b",
        });
      });
  }, []);

  const updateEvent = (elem) => {
    const payload = elem;
    axios
      .put(`${process.env.REACT_APP_API || ''}/event/${events[viewModal]._id}`, payload, {
        headers: {
          authorization: `Bearer ${window.localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        let temp_data = [...events];
        temp_data[viewModal] = elem;
        fillEvents([...temp_data]);
        Notify("Updated!", "success");
      })
      .catch((err) => {
        const idx = viewModal;
        Notify("Something went wrong! Try again", "err");
        showModal(-1);

        // Little hack to update state twice to unmount then again mount EditEvent component
        setTimeout(() => {
          showModal(idx);
        }, 100);
      });
  };

  const handleDelete = (_id, idx) => {
    if(window.confirm("Delete event?")){
      Notify("Deleting event . . .!", "info");
      axios.delete(`${process.env.REACT_APP_API || ''}/event/${_id}`, {
        headers: {
          authorization: `Bearer ${window.localStorage.getItem("token")}`
        }
      })
        .then((res) => {
          const tempEvents = [...events];
          tempEvents.splice(idx, 1);
          fillEvents([...tempEvents]);
          Notify("Event deleted!", "success");
        })
        .catch((err) => {
          console.log(err);
          Notify("Deleting Failed, try again!", "err");
        })
    }else{
        Notify("Deleting Aborted!", "info");
    }
  }

  return (
    <>
      {loadStatus.message !== "Loaded" && (
        <h1 style={{ color: loadStatus.color, textAlign: "center" }}>
          {loadStatus.message}
        </h1>
      )}
      {loadStatus.message === "Loaded" && (
        <>
          <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-evenly'}}>
            <div style={{overflowY: 'scroll', maxHeight: '60vh', height: 'max-content', border: '2px solid #ed1c40', borderRadius: '.25rem'}}>
              <table className="event-manage">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {events.map((elem, idx) => {
                    return (
                      <tr key={`${elem._id}`}>
                        <td>{idx + 1}</td>
                        <td>{elem.title}</td>
                        <td
                          onClick={() => {
                            showModal(-1);
                            setTimeout(() => {
                              showModal(idx);
                            }, 100);
                          }}
                          title="show/edit"
                          className="edit button"
                        >
                          <BiDetail />
                        </td>
                        <td
                          onClick={() => {
                            handleDelete(elem._id, idx);
                          }}
                          label="delete"
                          className="button delete"
                        >
                          <MdDelete />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            {viewModal !== -1 && (
              <div>
                <EventModal
                  updateEvent={updateEvent}
                  showModal={showModal}
                  elem={events[viewModal]}
                />
              </div>
            )}
          </div>
        </>
      )}
      <ToastContainer autoClose={5000} />
    </>
  );
};

export default EventManage;
