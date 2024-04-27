"use client";
import React from "react";
import styled from "styled-components";
import { useGlobalState } from "@/context/GlobalProvider";
import Image from "next/image";
import menu from "../../utils/menu";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Sidebar = () => {
  const { theme } = useGlobalState();
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (link: string) => {
    router.push(link);
  };

  return (
    <SidebarStyled theme={theme}>
      <div className="profile">
        <div className="profile-overlay"></div>
        <div className="image">
          <Image
            width={70}
            height={70}
            src="/images/profile.jpg"
            alt="Profile"
          />
        </div>
        <h1>
          <span>John</span>
          <span>Doe</span>
        </h1>
      </div>
      <ul className="nav-items">
        {menu.map((item, index) => (
          <li
            key={index}
            onClick={() => handleClick(item.link)}
            className={`nav-item ${pathname === item.link ? "active" : ""}`}
          >
            {item.icon}
            <Link href={item.link}>{item.title}</Link>
          </li>
        ))}
      </ul>
      <button></button>
    </SidebarStyled>
  );
};

const SidebarStyled = styled.nav`
  position: relative;
  width: ${(props) => props.theme.sidebarWidth};
  background-color: ${(props) => props.theme.colorBg2};
  border-right: 2px solid ${(props) => props.theme.borderColor2};
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: ${(props) => props.theme.colorGrey3};

  .profile {
    position: relative;
    padding: 2rem;
    .profile-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: ${(props) => props.theme.colorBg2};
      opacity: 0.5;
    }
    .image {
      border-radius: 50%;
      overflow: hidden;
      margin-bottom: 1rem;
    }
    h1 {
      text-align: center;
      span {
        display: block;
      }
    }
  }
`;

export default Sidebar;
