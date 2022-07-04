const langEl = document.querySelector('ul');
const link = document.querySelectorAll('.lang');

const header_h1 = document.querySelector('.header-h1');
const header_p = document.querySelector('.header-p');
const content_header = document.querySelector('.content-header');

const title_1 = document.querySelector('.title-1');
const descript_1 = document.querySelector('.descript-1');
const title_2 = document.querySelector('.title-2');
const descript_2 = document.querySelector('.descript-2');
const title_3 = document.querySelector('.title-3');
const descript_3 = document.querySelector('.descript-3');

const footer_h1 = document.querySelector('.footer-h1');
const footer_p = document.querySelector('.footer-p');

link.forEach(el => {
    el.addEventListener('click', () => {
        langEl.querySelector('.active').classList.remove('active');
        el.classList.add('active');

        const attr = el.getAttribute('language');

        header_h1.textContent = data[attr].header_h1;
        header_p.textContent = data[attr].header_p;
        content_header.textContent = data[attr].content_header;

        title_1.textContent = data[attr].title_1;
        title_2.textContent = data[attr].title_2;
        title_3.textContent = data[attr].title_3;
        descript_1.textContent = data[attr].descript_1;
        descript_2.textContent = data[attr].descript_2;
        descript_3.textContent = data[attr].descript_3;

        footer_h1.textContent = data[attr].footer_h1;
        footer_p.textContent = data[attr].footer_p;
    });
});

var data = {
    "english":
    {
        "header_h1": "Performance",
        "header_p": "My name is plume, this is my performance web collection.",
        "content_header": "This is my projects",
        "title_1" : "Geolocation",
        "descript_1" : "This website will show you where are you location",
        "title_2" : "Pig",
        "descript_2" : "This website I make while I learning about html and css",
        "title_3" : "Telescope Arecibo",
        "descript_3": "This website have a responsive web for phone taplet and pc",
        "footer_h1": "Contact Me",
        "footer_p": "< Click icon below to contact >"
    },

    "thai":
    {
        "header_h1": "ผลงาน",
        "header_p": "ชื่อปลื้มครับ เว็ปนี้คือเว็ปไว้เก็บผลงานของผม",
        "content_header": "นี้คือผลงานของผม",
        "title_1" : "Geolocation",
        "descript_1" : "เว็ปไซต์นี้จะแสดงตำแหน่งปัจจุบันของคุณ",
        "title_2" : "Pig",
        "descript_2" : "เว็ปไซต์นี้เป็นเว็ปที่ผมทำเล่นๆ ขณะเรื่ยนเรื่อง html และ css",
        "title_3" : "Telescope Arecibo",
        "descript_3" : "เว็ปไซต์นี้มีระบบ responsive สำหรับโทรศัพท์ แทปเล็ตและคอมพิวเตอร์",
        "footer_h1": "ติดต่อได้ที่",
        "footer_p": "< คลิกไอคอนด้านล่างเพื่อติดต่อ >"
    }
}