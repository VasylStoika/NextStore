import Iphone17pro from '../images/Iphone17pro.webp'
import SamsungS25Ultra from '../images/SamsungS25Ultra.webp'
import SamsungS25 from '../images/SamsungS25.webp'
import A56 from '../images/SamsungA56.webp'
import A36 from '../images/SamsungA36.webp'
import A26 from '../images/SamsungA26.webp'
import Redmi13S from '../images/Redmi13S.webp'
import Redmi14 from '../images/Redmi14.webp'
import RedmiPro14 from '../images/RedmiPro14.webp'
import AppleWatchUltra from '../images/AppleWatchUltra.webp'
import AppleWatch from '../images/AppleWatch.webp'
import AppleWatchSe3 from '../images/AppleWatchSe3.webp'
import AppleWatchSeries10 from '../images/AppleWatchSeries10.webp'
import SamsungWatch8 from '../images/SamsungWatch8.webp'
import XiomiWatch5 from '../images/XiomiWatch5.webp'
import AirPods2pro from '../images/AirPods2pro.webp'
import AirPods3pro from '../images/AirPods3pro.webp'
import AirPods4 from '../images/AirPods4.webp'
import AirPodsMax2 from '../images/AirPodsMax2.webp'
import Asus from '../images/Asus.webp'
import AsusRog from '../images/AsusRog.webp'
import Dell from '../images/Dell.webp'
import DellPro from '../images/DellPro.webp'
import LenovoLegion9 from '../images/LenovoLegion9.webp'
import MsiTitan18 from '../images/MsiTitan18.webp'
import MacbookAir15 from '../images/MacbookAir15.jpg'
import MacbookPro14 from '../images/MacbookPro14.jpg'
import MacbookPro16 from '../images/MacbookPro16.jpg'

export const products = [

    {
        id: 1,
        name: "iPhone 17 Pro",
        price: 64999,
        category: "Телефони",
        image: Iphone17pro,
        description: "Майбутнє вже тут. iPhone 17 Pro з революційним дизайном та можливостями.",
        specs: {
            screen: "6.7-inch Super Retina XDR",
            chip: "A19 Pro",
            camera: "48MP Main | Ultra Wide | Telephoto",
            battery: "До 30 годин відео"
        }
    },

    {
        id: 3,
        name: "Samsung Galaxy S25 Ultra",
        price: 62999,
        category: "Телефони",
        image: SamsungS25Ultra,
        description: "Флагман нового покоління. Титановий корпус та AI функції.",
        specs: {
            screen: "6.8-inch QHD+ AMOLED",
            chip: "Snapdragon 8 Gen 4",
            camera: "200MP Wide | 50MP Zoom",
            battery: "5000 mAh"
        }
    },
    {
        id: 301,
        name: "Samsung Galaxy S25",
        price: 42999,
        category: "Телефони",
        image: SamsungS25,
        description: "Компактний флагман з неймовірною продуктивністю.",
        specs: {
            screen: "6.2-inch Dynamic AMOLED 2X",
            chip: "Exynos 2500",
            camera: "50MP Main",
            battery: "4000 mAh"
        }
    },
    {
        id: 302,
        name: "Samsung Galaxy A56",
        price: 18999,
        category: "Телефони",
        image: A56,
        description: "Народний улюбленець. Преміальний дизайн та чудовий дисплей.",
        specs: {
            screen: "6.6-inch Super AMOLED",
            chip: "Exynos 1580",
            camera: "50MP Main",
            battery: "5000 mAh"
        }
    },
    {
        id: 303,
        name: "Samsung Galaxy A36",
        price: 14999,
        category: "Телефони",
        image: A36,
        description: "Стильний та функціональний смартфон на кожен день.",
        specs: {
            screen: "6.6-inch Super AMOLED 120Hz",
            chip: "Snapdragon 7s Gen 2",
            camera: "50MP OIS",
            battery: "5000 mAh"
        }
    },
    {
        id: 304,
        name: "Samsung Galaxy A26",
        price: 10999,
        category: "Телефони",
        image: A26,
        description: "Доступний смартфон з великим екраном та хорошою батареєю.",
        specs: {
            screen: "6.5-inch Super AMOLED",
            chip: "Exynos 1280",
            camera: "50MP Main",
            battery: "5000 mAh"
        }
    },


    {
        id: 401,
        name: "Redmi Note 14 Pro",
        price: 15999,
        category: "Телефони",
        image: RedmiPro14,
        description: "Професійна камера та швидка зарядка в стильному корпусі.",
        specs: {
            screen: "6.67-inch AMOLED 1.5K",
            chip: "Snapdragon 7s Gen 3",
            camera: "200MP OIS",
            battery: "5100 mAh"
        }
    },
    {
        id: 402,
        name: "Redmi Note 14",
        price: 9999,
        category: "Телефони",
        image: Redmi14,
        description: "Новий стандарт бюджетного смартфона. Яскравий дисплей та стереозвук.",
        specs: {
            screen: "6.67-inch AMOLED 120Hz",
            chip: "Dimensity 7025 Ultra",
            camera: "50MP Main",
            battery: "5110 mAh"
        }
    },
    {
        id: 403,
        name: "Redmi 13S",
        price: 5999,
        category: "Телефони",
        image: Redmi13S,
        description: "Ультрабюджетний смартфон з необхідним набором функцій.",
        specs: {
            screen: "6.74-inch LCD 90Hz",
            chip: "Helio G85",
            camera: "50MP Main",
            battery: "5000 mAh"
        }
    },


    {
        id: 501,
        name: "MacBook Pro 16 M3",
        price: 114999,
        category: "Ноутбуки",
        image: MacbookPro16,
        description: "Найпотужніший MacBook Pro для професіоналів.",
        specs: {
            screen: "16.2 Liquid Retina XDR",
            chip: "M3 Max",
            memory: "36GB / 1TB",
            battery: "До 22 годин"
        }
    },
    {
        id: 502,
        name: "MacBook Pro 14 M3",
        price: 89999,
        category: "Ноутбуки",
        image: MacbookPro14,
        description: "Потужність у компактному корпусі.",
        specs: {
            screen: "14.2 Liquid Retina XDR",
            chip: "M3 Pro",
            memory: "18GB / 512GB",
            battery: "До 18 годин"
        }
    },
    {
        id: 503,
        name: "MacBook Air 15",
        price: 64999,
        category: "Ноутбуки",
        image: MacbookAir15,
        description: "Великий екран. Неймовірно тонкий дизайн.",
        specs: {
            screen: "15.3 Liquid Retina",
            chip: "M3",
            memory: "8GB / 256GB",
            battery: "До 18 годин"
        }
    },
    {
        id: 504,
        name: "ASUS ROG Strix",
        price: 78999,
        category: "Ноутбуки",
        image: AsusRog,
        description: "Домінуйте в іграх з максимальною продуктивністю.",
        specs: {
            screen: "16 QHD+ 240Hz",
            chip: "Intel Core i9-14900HX",
            graphics: "RTX 4070 8GB",
            memory: "32GB DDR5"
        }
    },
    {
        id: 505,
        name: "ASUS ZenBook",
        price: 54999,
        category: "Ноутбуки",
        image: Asus,
        description: "Елегантність та потужність для творчості.",
        specs: {
            screen: "14 OLED 2.8K",
            chip: "Intel Core Ultra 7",
            memory: "16GB / 1TB",
            battery: "До 15 годин"
        }
    },
    {
        id: 506,
        name: "Lenovo Legion 9i",
        price: 149999,
        category: "Ноутбуки",
        image: LenovoLegion9,
        description: "Вершина ігрових технологій з рідинним охолодженням.",
        specs: {
            screen: "16 Mini-LED 3.2K",
            chip: "Intel Core i9-14900HX",
            graphics: "RTX 4090 16GB",
            memory: "64GB DDR5"
        }
    },
    {
        id: 507,
        name: "MSI Titan 18 HX",
        price: 199999,
        category: "Ноутбуки",
        image: MsiTitan18,
        description: "Безкомпромісна продуктивність десктопного рівня.",
        specs: {
            screen: "18 UHD+ 120Hz Mini-LED",
            chip: "Intel Core i9-14900HX",
            graphics: "RTX 4090 16GB",
            memory: "128GB DDR5"
        }
    },
    {
        id: 508,
        name: "Dell XPS 15",
        price: 94999,
        category: "Ноутбуки",
        image: Dell,
        description: "Іконічний дизайн та приголомшлива продуктивність.",
        specs: {
            screen: "15.6 OLED 3.5K",
            chip: "Intel Core i7-13700H",
            graphics: "RTX 4050",
            memory: "32GB DDR5"
        }
    },
    {
        id: 509,
        name: "Dell Precision",
        price: 84999,
        category: "Ноутбуки",
        image: DellPro,
        description: "Мобільна робоча станція для професіоналів.",
        specs: {
            screen: "16 FHD+",
            chip: "Intel Core i7-13800H",
            graphics: "RTX A2000",
            memory: "32GB DDR5"
        }
    },


    {
        id: 10,
        name: "Apple Watch Ultra 2",
        price: 36999,
        category: "Годинники",
        image: AppleWatchUltra,
        description: "Годинник для екстремалів. Титановий корпус.",
        specs: {
            case: "49мм Титан",
            water_resistance: "100м",
            sensors: "Глибиномір, Кисень у крові",
            battery: "До 36 годин"
        }
    },
    {
        id: 11,
        name: "Apple Watch Series 10",
        price: 21999,
        category: "Годинники",
        image: AppleWatchSeries10,
        description: "Найтонший Apple Watch з найбільшим дисплеєм.",
        specs: {
            case: "46мм або 42мм Алюміній/Титан",
            water_resistance: "50м",
            sensors: "Глибиномір, Температура води",
            battery: "До 18 годин"
        }
    },
    {
        id: 13,
        name: "Samsung Galaxy Watch 8",
        price: 14999,
        category: "Годинники",
        image: SamsungWatch8,
        description: "Ваш особистий тренер та помічник здоров'я.",
        specs: {
            case: "44мм або 40мм Алюміній",
            water_resistance: "IP68 + 5ATM",
            sensors: "BioActive Sensor",
            battery: "До 40 годин"
        }
    },
    {
        id: 14,
        name: "Xiaomi Watch S5",
        price: 6999,
        category: "Годинники",
        image: XiomiWatch5,
        description: "Стильний дизайн та до 15 днів роботи.",
        specs: {
            case: "46мм Сталь",
            water_resistance: "5ATM",
            sensors: "SpO2, Пульс",
            battery: "До 15 днів"
        }
    },
    {
        id: 12,
        name: "Apple Watch SE 3",
        price: 12999,
        category: "Годинники",
        image: AppleWatchSe3,
        description: "Усе, що вам потрібно. За меншу ціну.",
        specs: {
            case: "44мм або 40мм Алюміній",
            water_resistance: "50м",
            sensors: "Пульс, Сон",
            battery: "До 18 годин"
        }
    },


    {
        id: 200,
        name: "AirPods Pro 2",
        price: 11499,
        category: "Навушники",
        image: AirPods2pro,
        description: "Магія звуку. Активне шумозаглушення у 2 рази краще.",
        specs: {
            chip: "H2",
            audio: "Адаптивне аудіо",
            case: "USB-C MagSafe",
            battery: "До 6 годин"
        }
    },
    {
        id: 201,
        name: "AirPods Pro 3",
        price: 13999,
        category: "Навушники",
        image: AirPods3pro,
        description: "Нове покоління Pro. Ще кращий звук.",
        specs: {
            chip: "H3",
            audio: "Lossless Audio",
            case: "USB-C MagSafe + Find My",
            battery: "До 7 годин"
        }
    },
    {
        id: 202,
        name: "AirPods 4",
        price: 7999,
        category: "Навушники",
        image: AirPods4,
        description: "Відкрита конструкція з новим рівнем звучання.",
        specs: {
            chip: "H2",
            audio: "Personalized Spatial Audio",
            case: "USB-C",
            battery: "До 5 годин"
        }
    },
    {
        id: 203,
        name: "AirPods Max 2",
        price: 24999,
        category: "Навушники",
        image: AirPodsMax2,
        description: "Ідеальний баланс захоплюючого аудіо Hi-Fi та комфорту.",
        specs: {
            chip: "H2 (x2)",
            audio: "Просторове аудіо, Lossless",
            colors: "5 нових кольорів",
            battery: "До 20 годин"
        }
    }
];
