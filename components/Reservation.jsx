import React from "react";

function Reservation() {
  return (
    <div className="Reservation-section" id="reservation">
      <div className="heading r-heading">Make Reservation</div>
      <div className="line r-line"></div>
      <p className="reservation-slogan">
        Booking a table has never been so easy with free online restaurant
        reservations, booking now!!
      </p>
      <form>
        <div className="input-group">
          <label htmlFor="Name" className="label">
            Guest Name:
          </label>
          <input
            type="text"
            name="Name"
            id="Name"
            placeholder="Name"
            autoComplete="off"
          />
        </div>
        <div className="input-group">
          <label htmlFor="date" className="label">
            Date:
          </label>
          <input
            type="text"
            name="date"
            id="date"
            placeholder="mm/dd/yy"
            autoComplete="off"
          />
        </div>
        <div className="slice-group">
          <div className="input-group">
            <label htmlFor="time" className="label">
              Time:
            </label>
            <input
              type="text"
              name="time"
              id="time"
              placeholder="7:00pm"
              autoComplete="off"
            />
          </div>
          <div className="input-group">
            <label htmlFor="people" className="label">
              Pers:
            </label>
            <input
              type="text"
              name="people"
              id="people"
              placeholder="2 people"
              autoComplete="off"
            />
          </div>
        </div>
        <button type="submit" className="submit-btn">
          FIND A TABLE
        </button>
      </form>
    </div>
  );
}

export default Reservation;
