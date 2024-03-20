import { IoBagHandleOutline, IoCartOutline } from 'react-icons/io5';
import { RiHomeSmile2Line } from 'react-icons/ri';

export const sidebarItems = [
  {
    label: 'Home',
    icon: RiHomeSmile2Line,
    href: '/'
  },
  {
    label: 'Cart',
    icon: IoCartOutline,
    href: '/cart'
  },
  {
    label: 'Wish List',
    icon: IoBagHandleOutline,
    href: '/wishlist'
  }
];
