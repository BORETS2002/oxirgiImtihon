import React from "react";
import "./Colleps.css";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LocalFireDepartmentOutlinedIcon from "@mui/icons-material/LocalFireDepartmentOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import AccessAlarmOutlinedIcon from "@mui/icons-material/AccessAlarmOutlined";
import StarOutlineOutlinedIcon from "@mui/icons-material/StarOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import MusicNoteOutlinedIcon from "@mui/icons-material/MusicNoteOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";

const Colleps = () => {
  const counter = useSelector((store) => store.counter);
  console.log(counter.data);

  return (
    <>
      <div className='colleps'>
        <ul className='colleps__home-box   p-0 m-0'>
          <li className='  colleps__item'>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive
                  ? "Link d-block   text-decoration-none    pt-2 pb-2 mt-2 active"
                  : "Link d-block   text-decoration-none    pt-2 pb-2 mt-2"
              }
            >
              <HomeOutlinedIcon />

              <span className={counter.data ? "colleps__text  ms-2" : "d-none"}>
                Home
              </span>
            </NavLink>
          </li>{" "}
          <li className='  colleps__item'>
            <NavLink
              to={"Trending"}
              className={({ isActive }) =>
                isActive
                  ? "Link d-block   text-decoration-none    pt-2 pb-2 mt-2 active"
                  : "Link d-block   text-decoration-none    pt-2 pb-2 mt-2"
              }
            >
              <LocalFireDepartmentOutlinedIcon />
              <span className={counter.data ? "colleps__text  ms-2" : "d-none"}>
                {" "}
                Trending
              </span>
            </NavLink>
          </li>
          <li className=' colleps__item colleps__item-margin'>
            <NavLink
              to={"Subscriptions"}
              className={({ isActive }) =>
                isActive
                  ? "Link d-block   text-decoration-none    pt-2 pb-2 mt-2 active"
                  : "Link d-block   text-decoration-none    pt-2 pb-2 mt-2"
              }
            >
              <SubscriptionsOutlinedIcon />
              <span className={counter.data ? "colleps__text  ms-2" : "d-none"}>
                Subscriptions
              </span>
            </NavLink>
          </li>
          <li className='  colleps__item'>
            <NavLink
              to={"Library"}
              className={({ isActive }) =>
                isActive
                  ? "Link d-block   text-decoration-none    pt-2 pb-2 mt-2 active"
                  : "Link d-block   text-decoration-none    pt-2 pb-2 mt-2"
              }
            >
              <FolderOutlinedIcon />

              <span className={counter.data ? "colleps__text  ms-2" : "d-none"}>
                Library
              </span>
            </NavLink>
          </li>{" "}
          <li className='  colleps__item'>
            <NavLink
              to={"History"}
              className={({ isActive }) =>
                isActive
                  ? "Link d-block   text-decoration-none    pt-2 pb-2 mt-2 active"
                  : "Link d-block   text-decoration-none    pt-2 pb-2 mt-2"
              }
            >
              <ReceiptLongOutlinedIcon />
              <span className={counter.data ? "colleps__text  ms-2" : "d-none"}>
                {" "}
                History
              </span>
            </NavLink>
          </li>
          <li className=' colleps__item  '>
            <NavLink
              to={"Watchlater"}
              className={({ isActive }) =>
                isActive
                  ? "Link d-block   text-decoration-none    pt-2 pb-2 mt-2 active"
                  : "Link d-block   text-decoration-none    pt-2 pb-2 mt-2"
              }
            >
              <AccessAlarmOutlinedIcon />
              <span className={counter.data ? "colleps__text  ms-2" : "d-none"}>
                {" "}
                Watch later
              </span>
            </NavLink>
          </li>
          <li className='  colleps__item'>
            <NavLink
              to={"Favourites"}
              className={({ isActive }) =>
                isActive
                  ? "Link d-block   text-decoration-none    pt-2 pb-2 mt-2 active"
                  : "Link d-block   text-decoration-none    pt-2 pb-2 mt-2"
              }
            >
              <StarOutlineOutlinedIcon />

              <span className={counter.data ? "colleps__text  ms-2" : "d-none"}>
                {" "}
                Favourites
              </span>
            </NavLink>
          </li>{" "}
          <li className='  colleps__item'>
            <NavLink
              to={"Likedvideos"}
              className={({ isActive }) =>
                isActive
                  ? "Link d-block   text-decoration-none    pt-2 pb-2 mt-2 active"
                  : "Link d-block   text-decoration-none    pt-2 pb-2 mt-2"
              }
            >
              <FavoriteBorderOutlinedIcon />
              <span className={counter.data ? "colleps__text  ms-2" : "d-none"}>
                {" "}
                Liked videos
              </span>
            </NavLink>
          </li>
          <li className=' colleps__item  '>
            <NavLink
              to={"Music"}
              className={({ isActive }) =>
                isActive
                  ? "Link d-block   text-decoration-none    pt-2 pb-2 mt-2 active"
                  : "Link d-block   text-decoration-none    pt-2 pb-2 mt-2"
              }
            >
              <MusicNoteOutlinedIcon />
              <span className={counter.data ? "colleps__text  ms-2" : "d-none"}>
                {" "}
                Music
              </span>
            </NavLink>
          </li>
          <li className=' colleps__item  '>
            <NavLink
              to={"Showmore"}
              className={({ isActive }) =>
                isActive
                  ? "Link d-block   text-decoration-none    pt-2 pb-2 mt-2 active"
                  : "Link d-block   text-decoration-none    pt-2 pb-2 mt-2"
              }
            >
              <ExpandMoreOutlinedIcon />
              <span className={counter.data ? "colleps__text  ms-2" : "d-none"}>
                {" "}
                Show more
              </span>
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Colleps;
