// Icons
import {
  CalendarIcon,
  ContactIcon,
  DesignIcon,
  HistoryIcon,
  HomeIcon,
  IdeaIcon,
  PaymentIcon,
  RequestIcon,
  TicketIcon,
} from "../icons/index";

const links = {
  user: [
    {
      id: 1,
      to: "/dashboard/user",
      title: "Home",
      name: "home",
      icon: <HomeIcon className='w-6 h-6' />,
    },
    {
      id: 2,
      to: "/dashboard/calendar",
      title: "Calendar",
      name: "calendar",
      icon: <CalendarIcon className=' w-6 h-6' />,
    },
    {
      id: 3,
      to: "/dashboard/idea",
      title: "Ideate",
      name: "ideate",
      icon: <IdeaIcon className=' w-6 h-6' />,
    },
    {
      id: 4,
      to: "/dashboard/account",
      title: "Account",
      name: "account",
      icon: <ContactIcon className=' w-6 h-6' />,
    },
  ],
  designer: [
    {
      id: 5,
      to: "/dashboard/designer",
      title: "Available Request",
      name: "jobs",
      icon: <HomeIcon className='w-6 h-6' />,
    },
    {
      id: 6,
      to: "/dashboard/request",
      title: "Accepted Request",
      name: "request",
      icon: <RequestIcon className='w-6 h-6' />,
    },
    {
      id: 7,
      to: "/dashboard/history",
      title: "Request History",
      name: "history",
      icon: <HistoryIcon className=' w-6 h-6' />,
    },
  ],
  admin: [
    {
      id: 8,
      to: "/dashboard/admin",
      title: "Available Request",
      name: "request",
      icon: <HomeIcon className=' w-6 h-6' />,
    },
    {
      id: 9,
      to: "/dashboard/tickets",
      title: "All Tickets",
      name: "tickets",
      icon: <TicketIcon className=' w-6 h-6' />,
    },
    {
      id: 10,
      to: "/dashboard/payments",
      title: "All Payment",
      name: "payments",
      icon: <PaymentIcon className=' w-6 h-6' />,
    },
    {
      id: 11,
      to: "/dashboard/designs",
      title: "All designs",
      name: "designs",
      icon: <DesignIcon className=' w-6 h-6' />,
    },
  ],
};

export default links;
