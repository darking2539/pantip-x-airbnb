import { roomCategory, Announcement, Highlight } from "../type/HomeContentType";
import { BookIcon } from "../../Icon";
import Highlight1 from "../../assets/highlight_1.png"
import Highlight2 from "../../assets/highlight_2.jpeg"
import Highlight3 from "../../assets/highlight_3.jpeg"
import Highlight4 from "../../assets/highlight_4.png"
import Highlight5 from "../../assets/highlight_5.jpeg"
import Highlight6 from "../../assets/highlight_6.jpeg"

export const roomCategoryListInit = (() => {
    let data: roomCategory[] = [];
    for (let i = 0; i < 40; i++) {
        data.push({
            Title: "Mock",
            Icon: <BookIcon />,
            Path: "/home",
        });
    }
    return data;
})();

export const AnnouncementListInit: Announcement[] = [
    {
        Type: "Highlight",
        Title: "เว็บโปเกม่อนสำหนับดูข้อมูลจัดทำด้วย Next (Typescript)",
        Url: "https://pkm.abosszz.com",
    },
    {
        Type: "Highlight",
        Title: "🎧 Pantip Daily Podcast 🎧 3 อันดับกระทู้ฮิตบนพันทิป ประจำวันที่ 4 เมษายน 📊",
        Url: "https://www.youtube.com/watch?v=iQ5tIKiOrHM&list=PLQx8BhbFtXTFbGWM0OuS2vo-jPBaiggjO&index=2",
    },
    {
        Type: "Activity",
        Title: "Pantip Point 💰 ชวนแชร์ภาพความสดชื่นต้อนรับ SUMMER 🏖🌞",
        Url: "https://pantip.com/topic/42616095",
    }
];


export const HighLightListInit: Highlight[] = [
    {
        Title: "[Pantip Point] ชวนแชร์ภาพความสดชื่นต้อนรับ Summer!",
        Img: Highlight1,
    },
    {
        Title: "🎧 PANTIP PODCAST 🎧 3 อันดับกระทู้ฮิตบนพันทิปประจำ",
        Img: Highlight2,
    },
    {
        Title: "🚩 กิจกรรม “แนะวิธีคลายร้อน ต้อนรับซัมเมอร์สุดฮอต” 🏖",
        Img: Highlight3,
    },
    {
        Title: "Pantip Pick of the Year 2023 - รวม 10 สุดยอดกระทู้",
        Img: Highlight4,
    },
    {
        Title: "ข่าวดี! เพื่อนๆ สามารถสร้างรายได้ไปพร้อมกับใช้งาน",
        Img: Highlight5,
    },
    {
        Title: "พันทิปนานุกรม … ชวนมาดู Cover Design วันสำคัญ บน",
        Img: Highlight6,
    }
];