import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Translation resources
const resources = {
  th: {
    translation: {
      navbar: {
        home: "หน้าแรก",
        services: "บริการ",
        about: "เกี่ยวกับ",
        contact: "ติดต่อ",
        get_in_touch: "ติดต่อเรา"
      },
      hero: {
        title1: "ยกระดับธุรกิจของคุณด้วย",
        title2: "โซลูชันไอทีแห่งอนาคต",
        subtitle: "บริษัท มายด์ โซลูชั่น แอนด์ เซอร์วิส จำกัด พันธมิตรที่เชื่อถือได้ของคุณ สำหรับอุปกรณ์ไอที เน็ตเวิร์ค และระบบสื่อสารแบบครบวงจร",
        btn_services: "ดูบริการของเรา",
        btn_about: "เรียนรู้เพิ่มเติม"
      },
      services: {
        title_our: "บริการ",
        title_services: "ของเรา",
        subtitle: "โซลูชันเทคโนโลยีครบวงจรที่ออกแบบมาเพื่อเสริมศักยภาพการดำเนินธุรกิจและขับเคลื่อนการเติบโตของคุณ",
        items: {
          item0_title: "จัดจำหน่ายอุปกรณ์ไอที",
          item0_desc: "ขายส่งและปลีกคอมพิวเตอร์ แล็ปท็อป และอุปกรณ์ไอทีประสิทธิภาพสูงเพื่อรองรับทุกความต้องการทางธุรกิจ",
          item1_title: "ระบบเครือข่ายเน็ตเวิร์ค",
          item1_desc: "โครงสร้างพื้นฐานเครือข่ายที่เสถียรและรองรับการขยายตัว ตั้งแต่เร้าเตอร์ สวิตช์ ไปจนถึงเซิร์ฟเวอร์เต็มรูปแบบ",
          item2_title: "ระบบสื่อสารและโทรคมนาคม",
          item2_desc: "อุปกรณ์สื่อสารที่ทันสมัยและระบบเสียงผ่าน IP (VoIP) เพื่อให้ทีมงานของคุณเชื่อมต่อกันได้อย่างไร้รอยต่อ",
          item3_title: "บริการที่ปรึกษาและดูแลระบบไอที",
          item3_desc: "คำแนะนำจากผู้เชี่ยวชาญและการสนับสนุนทางเทคนิค เพื่อให้ระบบไอทีของคุณทำงานได้อย่างราบรื่นตลอดเวลา"
        }
      },
      about: {
        title_about: "เกี่ยวกับ",
        text1: "บริษัท มายด์ โซลูชั่น แอนด์ เซอร์วิส จำกัด คือผู้นำด้านการจัดจำหน่ายอุปกรณ์ไอทีและระบบโทรคมนาคมในกรุงเทพมหานคร นับตั้งแต่ก่อตั้ง เรามุ่งมั่นส่งมอบสินค้าเทคโนโลยีคุณภาพสูงและบริการด้านไอทีแบบครบวงจรเพื่อยกระดับศักยภาพของธุรกิจ",
        text2: "ความเชี่ยวชาญของเราครอบคลุมตั้งแต่ฮาร์ดแวร์คอมพิวเตอร์ ระบบเครือข่าย ไปจนถึงการให้คำปรึกษาด้านไอทีระดับมืออาชีพ เราภูมิใจในบริการที่เชื่อถือได้ ความเชี่ยวชาญทางเทคนิค และความทุ่มเทเพื่อให้ลูกค้าประสบความสำเร็จ",
        stat1_label: "ปีแห่งประสบการณ์",
        stat2_label: "ลูกค้าที่ไว้วางใจ",
        placeholder: "พันธมิตรด้านไอทีที่เชื่อถือได้ของคุณ"
      },
      footer: {
        desc1: "บริษัท มายด์ โซลูชั่น แอนด์ เซอร์วิส จำกัด",
        desc2: "พันธมิตรด้านไอทีและโทรคมนาคมที่คุณไว้วางใจในประเทศไทย",
        quick_links: "ลิงก์ด่วน",
        home: "หน้าแรก",
        services: "บริการ",
        about_us: "เกี่ยวกับเรา",
        contact_us: "ติดต่อเรา",
        address: "ดินแดง, กรุงเทพมหานคร, ประเทศไทย",
        fb_page: "เพจ Facebook",
        rights: "สงวนลิขสิทธิ์"
      }
    }
  },
  en: {
    translation: {
      navbar: {
        home: "Home",
        services: "Services",
        about: "About",
        contact: "Contact",
        get_in_touch: "Get in Touch"
      },
      hero: {
        title1: "Empowering Your Business with",
        title2: "Next-Gen IT Solutions",
        subtitle: "Mind Solution and Service Co., Ltd. is your trusted partner for comprehensive IT equipment, networking, and telecommunication distributions.",
        btn_services: "Explore Services",
        btn_about: "Learn More"
      },
      services: {
        title_our: "Our",
        title_services: "Services",
        subtitle: "Comprehensive technology solutions designed to empower your business operations and drive growth.",
        items: {
          item0_title: "IT Equipment Distribution",
          item0_desc: "Wholesale and retail of high-performance computers, laptops, and essential IT peripherals for businesses of all sizes.",
          item1_title: "Networking Solutions",
          item1_desc: "Robust and scalable networking infrastructure, from routers and switches to complete server setups.",
          item2_title: "Telecommunications",
          item2_desc: "Advanced communication devices and VoIP solutions to keep your team connected seamlessly.",
          item3_title: "IT Consulting & Support",
          item3_desc: "Expert advice and technical support to ensure your IT operations run smoothly 24/7."
        }
      },
      about: {
        title_about: "About",
        text1: "Mind Solution and Service Co., Ltd. is a premier IT and telecommunications distribution company based in Bangkok, Thailand. Since our establishment, we have been committed to delivering high-quality technology products and comprehensive IT services to empower businesses.",
        text2: "Our expertise spans across computer hardware, networking solutions, and professional IT consulting. We pride ourselves on our reliable service, technical proficiency, and dedication to customer success.",
        stat1_label: "Years of Experience",
        stat2_label: "Happy Clients",
        placeholder: "Your Trusted IT Partner"
      },
      footer: {
        desc1: "Mind Solution and Service Co., Ltd.",
        desc2: "Your trusted IT and telecommunication partner in Thailand.",
        quick_links: "Quick Links",
        home: "Home",
        services: "Services",
        about_us: "About Us",
        contact_us: "Contact Us",
        address: "Din Daeng, Bangkok, Thailand",
        fb_page: "Facebook Page",
        rights: "All rights reserved."
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "th", // default language
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
