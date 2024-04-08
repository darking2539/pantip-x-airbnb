import { MenuInterface, DetailDataInterface } from "../type/LayoutHomeType";
import { HomeIcon, ThrumbsUpIcon, StarIcon, CalendarPlusIcon, GiftBoxIcon, HeartIcon, SearchBlackIcon } from "../../Icon"

export const mainMenuInit: MenuInterface[] = [
    {
        Title: "หน้าแรก",
        Icon: <HomeIcon/>,
        Path: "/home",
    },
    {
        Title: "My Feed",
        Icon: <HeartIcon/>,
        Path: "/feed"
    },
    {
        Title: "Pantip Pick",
        Icon: <ThrumbsUpIcon/>,
        Path: "/pick"
    },
    {
        Title: "Pantip Hitz",
        Icon: <StarIcon/>,
        Path: "/hitz"
    },
    {
        Title: "Explore",
        Icon: <SearchBlackIcon/>,
        Path: "/explore"
    },
];

export const subMenuInit: MenuInterface[] = [
    {
        Title: "แลกพอยต์",
        Icon: <GiftBoxIcon/>,
        Path: "/point"
    },
    {
        Title: "กิจกรรมพันทิป",
        Icon: <CalendarPlusIcon/>,
        Path: "/event"
    }
];

export const detailDataInit: DetailDataInterface[] = [
    {
        Title: "กฎ กติกาและมารยาท",
        Path: "#"
    },
    {
        Title: "คำแนะนำการโพสต์",
        Path: "#"
    },
    {
        Title: "นโยบายเกี่ยวกับข้อมูลส่วนบุคคล",
        Path: "#"
    },
    {
        Title: "สิทธิ์การใช้งานของสมาชิก",
        Path: "#"
    },
    {
        Title: "ติดต่อทีมงาน Pantip",
        Path: "#"
    },
    {
        Title: "ร่วมงานกับ Pantip",
        Path: "#"
    },
    {
        Title: "Download App Pantip",
        Path: "#"
    },
    {
        Title: "Pantip Certified Developer",
        Path: "#"
    },
]