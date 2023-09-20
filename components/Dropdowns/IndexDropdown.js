import React from "react";
import Link from "next/link";
import { createPopper } from "@popperjs/core";

const IndexDropdown = () => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  return (
    <>
      <a
        className="hover:text-slate-500 text-slate-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
        href="#pablo"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        Demo Pages
      </a>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
        }
      >
        <span
          className={
            "text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-slate-400"
          }
        >
          Admin Layout
        </span>
        <Link href="/admin/dashboard">Dashboard</Link>
        <Link href="/admin/settings">Settings</Link>
        <Link href="/admin/tables">Tables</Link>
        <Link href="/admin/maps">Maps</Link>
        <div className="h-0 mx-4 my-2 border border-solid border-slate-100" />
        <span
          className={
            "text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-slate-400"
          }
        >
          Auth Layout
        </span>
        <Link href="/auth/login">Login</Link>
        <Link href="/auth/register">Register</Link>
        <div className="h-0 mx-4 my-2 border border-solid border-slate-100" />
        <span
          className={
            "text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-slate-400"
          }
        >
          No Layout
        </span>
        <Link href="/landing">Landing</Link>
        <Link href="/profile">Profile</Link>
      </div>
    </>
  );
};

export default IndexDropdown;
