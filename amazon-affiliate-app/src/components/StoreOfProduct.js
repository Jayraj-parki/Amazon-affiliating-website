import React, { useEffect, useState } from 'react'
import style from "./style/HealthAndFitness.module.scss"
import Button from "@material-ui/core/Button"
import Card from "./Card"
import {Context} from "./Product"
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import { useContext } from 'react';
export default function StoreOfProduct() {
    const {cat,subcat} = useContext(Context)
    const [search, setSearch] = useState("")
    const [show, setShow] = useState(false)
    const handleSize=(e)=>{
        const x=document.getElementById("products")
      
        if(x.offsetHeight>=1999){
            
            x.style.overflow = "scroll"
            x.style.height = "125rem"
        }
        else{
            x.style.height = "auto"

        }
    }
    useEffect(()=>{
        handleSize()
        
    },[])
    return (
        <>
            <div className={style.product_container + " row col-12  p-0 p-md-2 mx-auto mt-3 d-flex"}>
                <div className={style.heading + " row mx-auto  col-12  p-2 px-3 mt-2"}>
                    <h1 className=" my-auto m-auto m-sm-0 me-sm-auto  text-center col-auto ">{subcat}</h1>
                    <Button onClick={() => window.open("https://amzn.to/2X0X79U", "_blank")}  className="col-auto mx-auto mx-sm-0 ms-md-auto my-2  my-md-auto px-3 pb-1">See More Product On Amazon<ArrowRightIcon className="m-0" /></Button>
                </div>
                <div className={style.search + " row mx-auto col-12  p-md-2 px-md-3 my-3 "}>
                    <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} className="p-2 px-4 col-8 col-md-8 ms-auto me-2 " placeholder="Search Product Your Product here" />
                    <Button className=" col-3 col-md-2 me-auto ms-1  px-3 pb-1">Search</Button>
                </div>
                <div id="products" className={style.product + " row mx-auto  col-12  p-2 px-0 px-lg-3 "}>
                    <Card search={search} />
                    
                </div>
                <div className={style.show + " row col-12 mx-auto my-2"}>
                    {!show ?
                        <Button  onClick={() => {document.getElementById("products").style.height = "auto";setShow(true)}} className="my-auto ms-auto col-6 col-md-2 text-center">Show More<ArrowDropDownIcon /></Button>
                        :
                        <Button onClick={() => {handleSize();setShow(false)}} className="my-auto ms-auto col-6 col-md-2 text-center">Show Less<ArrowDropUpIcon /></Button>
                    }
                </div>
            </div>
        </>
    )
}
