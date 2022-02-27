import React from "react";
import { useState, createContext } from "react";

export const NavContext = createContext();

export function NavContextProvider(props) {
  const [HomeVisibile, setHomeVisibile] = useState(false);
  const [AboutVisibile, setAboutVisibile] = useState(false);
  const [SpecialVisibile, setSpecialVisibile] = useState(false);
  const [MenuVisibile, setMenuVisibile] = useState(false);
  const [ReservationVisibile, setReservationVisibile] = useState(false);
  const [TeamVisibile, setTeamVisibile] = useState(false);
  const [GalleryVisibile, setGalleryVisibile] = useState(false);
  const [BlogVisibile, setBlogVisibile] = useState(false);
  const [ContactVisibile, setContactVisibile] = useState(false);
  return (
    <NavContext.Provider
      value={[
        HomeVisibile,
        setHomeVisibile,
        AboutVisibile,
        setAboutVisibile,
        SpecialVisibile,
        setSpecialVisibile,
        MenuVisibile,
        setMenuVisibile,
        ReservationVisibile,
        setReservationVisibile,
        TeamVisibile,
        setTeamVisibile,
        GalleryVisibile,
        setGalleryVisibile,
        BlogVisibile,
        setBlogVisibile,
        ContactVisibile,
        setContactVisibile
      ]}
    >
      {props.children}
    </NavContext.Provider>
  );
}
