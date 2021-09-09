import React from 'react'
import style from "./style/Main.module.scss"

import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import Button from "@material-ui/core/Button"
export default function Main() {
    return (
        <>
            <div className={style.main+" col-12 d-flex pt-4"}>
                <div className=" col-12 col-sm-7 col-lg-5 col-xl-6 col-xxl-7 my-auto mx-0 mx-sm-4 ps-0 ps-sm-2 px-xl-5 pb-4">
                    <h1 className="mb-4 col-12 text-center text-sm-start">Get Best Product</h1>
                    <p className=" col-md-8 col-xl-12 m-0 py-1 py-md-3 p-xl-1">Get All the types of products on <Button onClick={() => window.open("https://amzn.to/3zXnV96", "_blank")} className={"px-4 py-xl-1 my-md-2 my-xl-auto bg-warning"}>Amazon.com</Button></p>
                    <p className="col-12 col-sm-10 col-lg-10 col-xl-8 m-0 p-1">Whoever said that money can't buy happiness, simply  didn't know where to go shopping!!! </p>
                    <Button onClick={() => window.open("https://amzn.to/3ncaqyY", "_blank")} className="pt-2 ps-3 my-3 ">Shop Now <ArrowRightIcon/> </Button>
                </div> 
                <img src={process.env.PUBLIC_URL+"/images/girl1.png"} className={" ms-md-5 ms-lg-auto   "} alt="Not available" />
                <img src={process.env.PUBLIC_URL+"/images/girl.png"} className={style.two+" ms-auto  "} alt="Not available" />
            </div> 
        </>
    )
}
