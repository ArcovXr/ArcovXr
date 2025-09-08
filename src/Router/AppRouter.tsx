import { Routes, Route, Navigate } from "react-router-dom"
import Home_Main from "../Home"
import Home3D from "../Home_3D"

export const AppRouter = ()=>{
    return(
        <Routes>
            <Route path="/Home_Main" element={<Home_Main/>}/>
            <Route path="/Home3D" element={<Home3D/>}/>
            <Route path="/*" element={<Navigate to="/Home_Main"/>}/>
        </Routes>
    )
}