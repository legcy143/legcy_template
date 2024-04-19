import { LuImage, LuLayoutDashboard, LuSettings, LuShapes, LuUsers } from "react-icons/lu";
import {RiShieldUserFill} from "react-icons/ri"
import {GiIndiaGate} from "react-icons/gi"

export const SidebarList:{icon:any , label:string,path:string}[] = [
    {
        icon:<LuLayoutDashboard/>,
        label:"Dashboard",
        path:"/"
    },
    {
        icon:<LuUsers/>,
        label:"users",
        path:"/users"
    },
    {
        icon:<LuImage/>,
        label:"characters",
        path:"/characters"
    },
    {
        icon:<LuShapes />,
        label:"categories",
        path:"/categories"
    },
    {
        icon:<GiIndiaGate />,
        label:"regions",
        path:"/regions"
    },
    {
        icon:<RiShieldUserFill />,
        label:"roles",
        path:"/roles"
    },
    {
        icon:<LuSettings/>,
        label:"setting",
        path:"/setting"
    },
]