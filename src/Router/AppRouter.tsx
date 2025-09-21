import { Routes, Route, Navigate } from "react-router-dom"
import Home_Main from "../App/Home"
import Home3D from "../App/Home_3D"
import HomeVR from "../App/Home_VR"
import HomeChat from "../App/Home_Chat"
import HomeIA from "../App/Home_IA"
import HomeSpace from "../App/Home_Space"

export const AppRouter = ()=>{
    return(
        <Routes>
            <Route path="/Home_Main" element={<Home_Main/>}/>
            <Route path="/Home3D" element={<Home3D/>}/>
            <Route path="/HomeVr" element={<HomeVR/>}/>
            <Route path="/HomeChat" element={<HomeChat/>}/>
            <Route path="/HomeIA" element={<HomeIA/>}/>
            <Route path="/HomeSpace" element={<HomeSpace/>}/>
            <Route path="/*" element={<Navigate to="/Home_Main"/>}/>
        
        </Routes>
    )
}