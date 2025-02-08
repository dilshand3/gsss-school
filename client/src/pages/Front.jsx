"use client"
import { useEffect } from "react";
import Herosection from "@/components/Herosection/Herosection";
import InfraStructure from "@/components/InfraStructure/InfraStructure";
import Navbar from "@/components/Navbar/Navbar";
import useApi from "@/store/ApiAuth";
import Login from "@/components/login/Login";
import useAuth from "@/store/userAuth";

const Front = () => {
 const {loginBox} = useAuth()
  return (
    <div>
       {loginBox && <Login />}
      <Herosection />

      {/* <InfraStructure/> */}

    </div>
  )
}

export default Front;