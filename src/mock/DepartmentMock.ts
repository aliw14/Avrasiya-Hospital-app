import { DepartmentCartItem } from '../types/Department.types';

export const Department: DepartmentCartItem[] = [
    {
        id: 1,
        title: 'Tibbi Bölmələr',
        description: 'Hospitalımızda göstərilən tibbi xidmətlər haqqında',
        image: require('../assets/images/tibbiBolmeler.png'),
        buttonText: 'ətraflı',
    },
    {
        id: 2,
        title: 'Həkimlər',
        description: 'Hospitalımızda çalışan həkimlər və mütəxəssislər haqqında ',
        image: require('../assets/images/hekimler.png'),
        buttonText: 'ətraflı',
    },
    {
        id: 3,
        title: 'e-Randevu',
        description: 'Növbə gözləmədən və vaxtınızı itirmədən həkim qəbuluna yazılın ',
        image: require('../assets/images/calendar.png'),
        buttonText: 'ətraflı',
    },
    {
        id: 4,
        title: 'e-Nəticə',
        description: 'Laborator testlərin nəticələrini hospitala getmədən əldə edin',
        image: require('../assets/images/e-netice.png'),
        buttonText: 'ətraflı',
    }
];