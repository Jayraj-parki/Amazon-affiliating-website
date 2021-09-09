import React, { useState, useEffect } from 'react'
import style from "./style/Products.module.scss"
import Button from "@material-ui/core/Button"
import StoreOfProduct from "./StoreOfProduct"
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { createContext } from 'react';
export const Context = createContext('All');
export default function Product() {
    const [category, setCategory] = useState("All")
    const [subCategory, setsubCategory] = useState("All")
    const ActiveBtn=(id,subid="")=>{
        let x=document.getElementsByClassName(style.catbtn)
        const arr=[...x]
        arr?.map((val)=>val.style.backgroundColor="transparent")
        arr?.map((val)=>val.style.color="white")
        
        
        document.getElementById(id).style.backgroundColor="white"
        document.getElementById(id).style.color="black"
        if(subid!=""){
            document.getElementById(subid).style.backgroundColor="white"
            document.getElementById(subid).style.color="black"
        }
    }
    useEffect(()=>{
        ActiveBtn("all");
    },[])
    return (
        <>
            <div className={style.product_container + " col-12 mx-auto p-0 pm-4 rounded mb-4 "}>

                <ul className={style.category + " row col-12 mt-2 p-2  mx-auto bg-secondary rounded"}>
                    <Button id={"all"} onClick={() => { setCategory("All"); setsubCategory("All");ActiveBtn("all") }} className={style.catbtn+" col-sm-8 col-lg-1 mx-auto my-1 my-lg-auto border"}>All</Button>
                    <Button id={"health"} onClick={() => { setCategory("Health and fitness"); setsubCategory("Health and fitness");ActiveBtn("health") }} className={style.catbtn+" col-sm-5 col-lg-3 my-1 my-lg-auto mx-auto border"}>Health and fitness</Button>
                  
                    <Button id={"home"} onClick={() => { setCategory("Home & Kitchen"); setsubCategory("Home & Kitchen");ActiveBtn("home") }} className={style.catbtn+" col-sm-5 col-lg-2 mx-auto my-1 my-lg-auto border"}>Home & Kitchen</Button>
                    <li className=" dropdown col-sm-5 col-lg-3 my-1 my-lg-auto mx-auto p-0  ">
                        <Button id="fashion" className={style.catbtn+" nav-link col-12 border rounded text-center px-3 " } role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Fashion Product<ArrowDropDownIcon />
                        </Button>
                        <ul className="dropdown-menu m-0 bg-secondary" >
                            <li><Button id="allfashion" onClick={() => { setCategory("Fashion Product"); setsubCategory("Fashion Product");ActiveBtn("allfashion","fashion") }} className={style.catbtn+" col-12  dropdown-item"}>All</Button></li>

                            <li><Button id="men"  onClick={() => { setCategory("Fashion Product"); setsubCategory("Men");ActiveBtn("men","fashion") }} className={style.catbtn+" col-12  dropdown-item"}>Men</Button></li>
                            <li><Button id="women" onClick={() => { setCategory("Fashion Product"); setsubCategory("Women");ActiveBtn("women","fashion") }} className={style.catbtn+" col-12  dropdown-item"}>Women</Button></li>
                            <li><Button id="child" onClick={() => { setCategory("Fashion Product"); setsubCategory("Child");ActiveBtn("child","fashion") }} className={style.catbtn+" col-12  dropdown-item"}>Child</Button></li>
                        </ul>
                    </li>
                    <li className=" dropdown col-sm-5 col-lg-3 my-1 my-lg-auto mx-auto p-0  ">
                        <Button id="tech" className={style.catbtn+" nav-link col-12 border rounded text-center px-3 "}  role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Smart Tech Gadget<ArrowDropDownIcon />
                        </Button>
                        <ul className="dropdown-menu m-0 bg-secondary" >
                            <li><Button id="alltech" onClick={() => { setCategory("Smart Tech Gadget"); setsubCategory("Smart Tech Gadget");ActiveBtn("alltech","tech") }} className={style.catbtn+" col-12  dropdown-item"}>All</Button></li>
                            <li><Button id="mobile" onClick={() => { setCategory("Smart Tech Gadget"); setsubCategory("Mobile");ActiveBtn("mobile","tech") }} className={style.catbtn+" col-12  dropdown-item"}>Mobile</Button></li>
                            <li><Button id="laptop" onClick={() => { setCategory("Smart Tech Gadget"); setsubCategory("Laptop");ActiveBtn("laptop","tech") }} className={style.catbtn+" col-12  dropdown-item"}>Laptop</Button></li>
                        </ul>
                    </li>
                </ul>
                <Context.Provider value={{ cat: category, subcat: subCategory }}>
                    <StoreOfProduct />
                </Context.Provider>
            </div>
        </>
    )
}
