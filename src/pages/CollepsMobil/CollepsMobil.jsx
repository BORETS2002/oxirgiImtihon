import React from "react";
import "./CollepsMobil.css";
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

const CollepsMobil = () => {
  return (
    <div>
      <div className='CollepsMobil'>
        <ul className='CollepsMobil__home-box   p-0 m-0'>
          <li className='  CollepsMobil__item'>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive
                  ? "Link d-block   text-decoration-none    pt-2 pb-2 mt-2 active"
                  : "Link d-block   text-decoration-none    pt-2 pb-2 mt-2"
              }
            >
              <span className='d-block w-100  d-flex  justify-content-center'>
                <HomeOutlinedIcon />
              </span>

              <span className='CollepsMobil__text  ms-2'>Home</span>
            </NavLink>
          </li>{" "}
          <li className='  CollepsMobil__item'>
            <NavLink
              to={"Trending"}
              className={({ isActive }) =>
                isActive
                  ? "Link d-block   text-decoration-none    pt-2 pb-2 mt-2 active"
                  : "Link d-block   text-decoration-none    pt-2 pb-2 mt-2"
              }
            >
              <span className='d-block w-100  d-flex  justify-content-center'>
                <LocalFireDepartmentOutlinedIcon />
              </span>
              <span className='CollepsMobil__text ms-2'>Trending</span>
            </NavLink>
          </li>
          <li className=' CollepsMobil__item  '>
            <NavLink
              to={"Subscriptions"}
              className={({ isActive }) =>
                isActive
                  ? "Link d-block   text-decoration-none    pt-2 pb-2 mt-2 active"
                  : "Link d-block   text-decoration-none    pt-2 pb-2 mt-2"
              }
            >
              <span className='d-block w-100  d-flex  justify-content-center'>
                <SubscriptionsOutlinedIcon />
              </span>
              <span className='CollepsMobil__text  ms-2'>Subscriptions</span>
            </NavLink>
          </li>
          <li className='  CollepsMobil__item'>
            <NavLink
              to={"Library"}
              className={({ isActive }) =>
                isActive
                  ? "Link d-block   text-decoration-none    pt-2 pb-2 mt-2 active"
                  : "Link d-block   text-decoration-none    pt-2 pb-2 mt-2"
              }
            >
              <span className='d-block w-100  d-flex  justify-content-center'>
                <FolderOutlinedIcon />
              </span>
              <span className='CollepsMobil__text  ms-2'>Library</span>
            </NavLink>
          </li>{" "}
          {/* <li className='  CollepsMobil__item'>
            <NavLink
              to={"History"}
              className={({ isActive }) =>
                isActive
                  ? "Link d-block   text-decoration-none    pt-2 pb-2 mt-2 active"
                  : "Link d-block   text-decoration-none    pt-2 pb-2 mt-2"
              }
            >
              <ReceiptLongOutlinedIcon />
              <span className='CollepsMobil__text ms-2'>History</span>
            </NavLink>
          </li>
          <li className=' CollepsMobil__item  '>
            <NavLink
              to={"Watchlater"}
              className={({ isActive }) =>
                isActive
                  ? "Link d-block   text-decoration-none    pt-2 pb-2 mt-2 active"
                  : "Link d-block   text-decoration-none    pt-2 pb-2 mt-2"
              }
            >
              <AccessAlarmOutlinedIcon />
              <span className='CollepsMobil__text  ms-2'>Watch later</span>
            </NavLink>
          </li>
          <li className='  CollepsMobil__item'>
            <NavLink
              to={"Favourites"}
              className={({ isActive }) =>
                isActive
                  ? "Link d-block   text-decoration-none    pt-2 pb-2 mt-2 active"
                  : "Link d-block   text-decoration-none    pt-2 pb-2 mt-2"
              }
            >
              <StarOutlineOutlinedIcon />

              <span className='CollepsMobil__text  ms-2'>Favourites</span>
            </NavLink>
          </li>{" "}
          <li className='  CollepsMobil__item'>
            <NavLink
              to={"Likedvideos"}
              className={({ isActive }) =>
                isActive
                  ? "Link d-block   text-decoration-none    pt-2 pb-2 mt-2 active"
                  : "Link d-block   text-decoration-none    pt-2 pb-2 mt-2"
              }
            >
              <FavoriteBorderOutlinedIcon />
              <span className='CollepsMobil__text ms-2'>Liked videos</span>
            </NavLink>
          </li>
          <li className=' CollepsMobil__item  '>
            <NavLink
              to={"Music"}
              className={({ isActive }) =>
                isActive
                  ? "Link d-block   text-decoration-none    pt-2 pb-2 mt-2 active"
                  : "Link d-block   text-decoration-none    pt-2 pb-2 mt-2"
              }
            >
              <MusicNoteOutlinedIcon />
              <span className='CollepsMobil__text  ms-2'>Music</span>
            </NavLink>
          </li>
          <li className=' CollepsMobil__item  '>
            <NavLink
              to={"Showmore"}
              className={({ isActive }) =>
                isActive
                  ? "Link d-block   text-decoration-none    pt-2 pb-2 mt-2 active"
                  : "Link d-block   text-decoration-none    pt-2 pb-2 mt-2"
              }
            >
              <ExpandMoreOutlinedIcon />
              <span className='CollepsMobil__text  ms-2'>Show more</span>
            </NavLink>
          </li>*/}
        </ul>
      </div>
    </div>
  );
};

export default CollepsMobil;
