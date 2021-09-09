import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import style from "./style/Navbar.module.scss"
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import CancelIcon from '@material-ui/icons/Cancel';
import YouTubeIcon from '@material-ui/icons/YouTube';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import {HashLink as Link } from "react-router-hash-link"
export default function Navbar() {
    const [search, setSearch] = useState("")
    const dropDown = () => {
        document.getElementById("dropdown").style.display = "flex"
    }
    const dropUp = () => {
        document.getElementById("dropdown").style.display = "none"
    }
    const [product, setProduct] = useState([{}])
    const getAllProduct = async () => {
        try {
            const result = await fetch(("/allProduct"), {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    subcategory: "All",
                    category: "All"
                })
            })
            const data = await result.json()
            if (result.status === 201) {
                setProduct([...data.reverse()])
            }
        }
        catch (err) {
            console.log("error in getData :" + err)
        }
    }
    useEffect(() => {
        getAllProduct()
        // console.log("hii")
    }, [])
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark shadow  px-0">
                <div className="container-fluid">
                    <NavLink onClick={()=>window.scrollTo(0,0)} className={style.logo + " navbar-brand"} to="/">Smart Products</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse  ms-3" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item mx-2  py-0">
                                <NavLink onClick={()=>window.scrollTo(0,0)} className={style.navLink + " nav-link active  py-1 my-auto text-center"} aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item mx-2 ">
                                <Link className={style.navLink + " nav-link py-1 text-center "} smooth to="/#contact">Contact Us</Link>
                            </li>
                            <li className={style.dropdown + "  d-flex dropdown mx-2"}>
                                <button onClick={dropDown} className="btn btn-secondary dropdown-toggle mx-auto" type="button" >
                                    All Products
                                </button>
                                <ul id="dropdown" className={style.allProduct + "  row my-2 p-2 rounded  shadow "} >
                                    <div className={"row col-12"}>
                                        <IconButton onClick={dropUp} className={style.icon_container + "  ms-auto"}> <CancelIcon className={style.cancel + " col-12"} /></IconButton>

                                    </div>
                                    <li className="row  mx-auto col-sm-6 col-md-4 col-xl-3 col-xxl-2 p-2"><NavLink className="col-12 p-1 text-center  "  onClick={() => window.open("https://amzn.to/3BOce55", "_blank")} to="/">kitchen accessories items</NavLink></li>
                                    <li className="row  mx-auto col-sm-6 col-md-4 col-xl-3 col-xxl-2 p-2"><NavLink className="col-12 p-1 text-center  "  onClick={() => window.open("https://amzn.to/2YA3y45", "_blank")} to="/">fridgerators</NavLink></li>
                                    <li className="row  mx-auto col-sm-6 col-md-4 col-xl-3 col-xxl-2 p-2"><NavLink className="col-12 p-1 text-center  "  onClick={() => window.open("https://amzn.to/392lN4h", "_blank")} to="/">washing machine</NavLink></li>
                                    <li className="row  mx-auto col-sm-6 col-md-4 col-xl-3 col-xxl-2 p-2"><NavLink className="col-12 p-1 text-center  "  onClick={() => window.open("https://amzn.to/3BTAbbp", "_blank")} to="/">furnitures for home</NavLink></li>
                                    <li className="row  mx-auto col-sm-6 col-md-4 col-xl-3 col-xxl-2 p-2"><NavLink className="col-12 p-1 text-center  "  onClick={() => window.open("https://amzn.to/3hd0cdQ", "_blank")} to="/">kitchen products</NavLink></li>

                                    <li className="row col-sm-6 col-md-4 col-xl-3 col-xxl-2 p-2"><NavLink className="col-12 p-1 text-center   " onClick={() => window.open("https://amzn.to/3npjT6b", "_blank")}  to="/">Television</NavLink></li>
                                    <li className="row  mx-auto col-sm-6 col-md-4 col-xl-3 col-xxl-2 p-2"><NavLink className="col-12 p-1 text-center  "  onClick={() => window.open("https://amzn.to/3nbJ5g0", "_blank")} to="/">speakers</NavLink></li>
                                    <li className="row  mx-auto col-sm-6 col-md-4 col-xl-3 col-xxl-2 p-2"><NavLink className="col-12 p-1 text-center  "  onClick={() => window.open("https://amzn.to/3yM1Adn", "_blank")} to="/">Goggle</NavLink></li>
                                    <li className="row  mx-auto col-sm-6 col-md-4 col-xl-3 col-xxl-2 p-2"><NavLink className="col-12 p-1 text-center  "  onClick={() => window.open("https://amzn.to/3h5TKoT", "_blank")} to="/">Headphones</NavLink></li>
                                    <li className="row  mx-auto col-sm-6 col-md-4 col-xl-3 col-xxl-2 p-2"><NavLink className="col-12 p-1 text-center  "  onClick={() => window.open("https://amzn.to/3yTu8kW", "_blank")} to="/">Smart watches</NavLink></li>

                                    <li className="row  mx-auto col-sm-6 col-md-4 col-xl-3 col-xxl-2 p-2"><NavLink className="col-12 p-1 text-center  "  onClick={() => window.open("https://amzn.to/3A65Gyx", "_blank")} to="/">Computer accessories</NavLink></li>
                                    <li className="row  mx-auto col-sm-6 col-md-4 col-xl-3 col-xxl-2 p-2"><NavLink className="col-12 p-1 text-center  "  onClick={() => window.open("https://amzn.to/3hbiGeC", "_blank")} to="/">Camera accessories</NavLink></li>
                                    <li className="row  mx-auto col-sm-6 col-md-4 col-xl-3 col-xxl-2 p-2"><NavLink className="col-12 p-1 text-center  "  onClick={() => window.open("https://amzn.to/3to16cf", "_blank")} to="/">Mics for Youtube</NavLink></li>
                                    <li className="row  mx-auto col-sm-6 col-md-4 col-xl-3 col-xxl-2 p-2"><NavLink className="col-12 p-1 text-center  "  onClick={() => window.open("https://amzn.to/2YA7yl7", "_blank")} to="/">Laptop</NavLink></li>
                                    <li className="row  mx-auto col-sm-6 col-md-4 col-xl-3 col-xxl-2 p-2"><NavLink className="col-12 p-1 text-center  "  onClick={() => window.open("https://amzn.to/3niFahs", "_blank")} to="/">All Mobiles</NavLink></li>
                                    <li className="row  mx-auto col-sm-6 col-md-4 col-xl-3 col-xxl-2 p-2"><NavLink className="col-12 p-1 text-center  "  onClick={() => window.open("https://amzn.to/3hcKdMR", "_blank")} to="/">Tablets</NavLink></li>
                                    <li className="row  mx-auto col-sm-6 col-md-4 col-xl-3 col-xxl-2 p-2"><NavLink className="col-12 p-1 text-center  "  onClick={() => window.open("https://amzn.to/3jQDrOx", "_blank")} to="/">dslr camera</NavLink></li>

                                    <li className="row  mx-auto col-sm-6 col-md-4 col-xl-3 col-xxl-2 p-2"><NavLink className="col-12 p-1 text-center  "  onClick={() => window.open("https://amzn.to/3A65ZcF", "_blank")} to="/">Office products</NavLink></li>
                                    <li className="row  mx-auto col-sm-6 col-md-4 col-xl-3 col-xxl-2 p-2"><NavLink className="col-12 p-1 text-center  "  onClick={() => window.open("https://amzn.to/3yTv4FY", "_blank")} to="/">gym product</NavLink></li>
                                    <li className="row  mx-auto col-sm-6 col-md-4 col-xl-3 col-xxl-2 p-2"><NavLink className="col-12 p-1 text-center  "  onClick={() => window.open("https://amzn.to/3yT6eGv", "_blank")} to="/">protein powder</NavLink></li>
                                    <li className="row  mx-auto col-sm-6 col-md-4 col-xl-3 col-xxl-2 p-2"><NavLink className="col-12 p-1 text-center  "  onClick={() => window.open("https://amzn.to/2YEyIYd", "_blank")} to="/">Health & Personal Care</NavLink></li>
                                    <li className="row  mx-auto col-sm-6 col-md-4 col-xl-3 col-xxl-2 p-2"><NavLink className="col-12 p-1 text-center  "  onClick={() => window.open("https://amzn.to/38OkZje", "_blank")} to="/">beauty and makeup</NavLink></li>
                                    <li className="row  mx-auto col-sm-6 col-md-4 col-xl-3 col-xxl-2 p-2"><NavLink className="col-12 p-1 text-center  "  onClick={() => window.open("https://amzn.to/3jQCQfF", "_blank")} to="/">make up kit</NavLink></li>
                                    <li className="row  mx-auto col-sm-6 col-md-4 col-xl-3 col-xxl-2 p-2"><NavLink className="col-12 p-1 text-center  "  onClick={() => window.open("https://amzn.to/3jOr0CQ", "_blank")} to="/">Shoes</NavLink></li>


                                    <li className="row  mx-auto col-sm-6 col-md-4 col-xl-3 col-xxl-2 p-2"><NavLink className="col-12 p-1 text-center  "  onClick={() => window.open("https://amzn.to/3tm3GiU", "_blank")} to="/">fahsion products</NavLink></li>
                                    <li className="row  mx-auto col-sm-6 col-md-4 col-xl-3 col-xxl-2 p-2"><NavLink className="col-12 p-1 text-center  "  onClick={() => window.open("https://amzn.to/3yPCQks", "_blank")} to="/">Collage Bags</NavLink></li>
                                    <li className="row  mx-auto col-sm-6 col-md-4 col-xl-3 col-xxl-2 p-2"><NavLink className="col-12 p-1 text-center  "  onClick={() => window.open("https://amzn.to/3nbRAIi", "_blank")} to="/">mens clothing</NavLink></li>

                                    <li className="row  mx-auto col-sm-6 col-md-4 col-xl-3 col-xxl-2 p-2"><NavLink className="col-12 p-1 text-center  "  onClick={() => window.open("https://amzn.to/3tmB2y1", "_blank")} to="/">womens clothing</NavLink></li>
                                    <li className="row  mx-auto col-sm-6 col-md-4 col-xl-3 col-xxl-2 p-2"><NavLink className="col-12 p-1 text-center  "  onClick={() => window.open("https://amzn.to/3jSMn5K", "_blank")} to="/">sports and fitness</NavLink></li>
                                    <li className="row  mx-auto col-sm-6 col-md-4 col-xl-3 col-xxl-2 p-2"><NavLink className="col-12 p-1 text-center  "  onClick={() => window.open("https://amzn.to/3yTwpfY", "_blank")} to="/">sports equipment</NavLink></li>
                                    <li className="row  mx-auto col-sm-6 col-md-4 col-xl-3 col-xxl-2 p-2"><NavLink className="col-12 p-1 text-center  "  onClick={() => window.open("https://amzn.to/3haacV7", "_blank")} to="/">Children toys</NavLink></li>
                                    <li className="row  mx-auto col-sm-6 col-md-4 col-xl-3 col-xxl-2 p-2"><NavLink className="col-12 p-1 text-center  "  onClick={() => window.open("https://amzn.to/3h9W2Dx", "_blank")} to="/">Books</NavLink></li>
                                </ul>
                            </li>

                        </ul>
                        <ul className="navbar-nav me-auto mb-2  mb-lg-0">
                            <li className={style.social_media + " nav-item dropdown   p-0 mx-2"}>
                                <NavLink className="nav-link p-0 m-0" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <IconButton onClick={dropUp} className={style.icon_container + " col-auto m-0 p-0 "}> <YouTubeIcon className={style.youtube + " col-12 m-2"} /></IconButton>
                                </NavLink>
                                <ul className="dropdown-menu " aria-labelledby="navbarDropdown">
                                    <li className="px-1"><NavLink className={style.dropdown_item + " dropdown-item my-1 "} to="#">Smart Gadgets</NavLink></li>
                                    <li className="px-1"><NavLink className={style.dropdown_item + " dropdown-item my-1 "} to="#">Home Products</NavLink></li>
                                    <li className="px-1"><NavLink className={style.dropdown_item + " dropdown-item my-1 "} to="#">Fashion Product</NavLink></li>
                                    <li className="px-1"><NavLink className={style.dropdown_item + " dropdown-item my-1 "} to="#">Helath and fitness</NavLink></li>
                                </ul>
                            </li>
                            <li className={style.social_media + " nav-item dropdown  p-0 mx-2"}>
                                <NavLink className="nav-link p-0 m-0" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <IconButton onClick={dropUp} className={style.icon_container + " col-auto m-0 p-0"}> <FacebookIcon className={style.youtube + " col-12 m-2"} /></IconButton>
                                </NavLink>
                                <ul className="dropdown-menu " aria-labelledby="navbarDropdown">
                                    <li className="px-1"><NavLink className={style.dropdown_item + " dropdown-item my-1 "} to="#">Smart Gadgets</NavLink></li>
                                    <li className="px-1"><NavLink className={style.dropdown_item + " dropdown-item my-1 "} to="#">Home Products</NavLink></li>
                                    <li className="px-1"><NavLink className={style.dropdown_item + " dropdown-item my-1 "} to="#">Fashion Product</NavLink></li>
                                    <li className="px-1"><NavLink className={style.dropdown_item + " dropdown-item my-1 "} to="#">Helath and fitness</NavLink></li>
                                </ul>
                            </li>
                            <li className={style.social_media + " nav-item dropdown  p-0 mx-2"}>
                                <NavLink className="nav-link p-0 m-0" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <IconButton onClick={dropUp} className={style.icon_container + " col-auto m-0 p-0"}> <InstagramIcon className={style.youtube + " col-12 m-2"} /></IconButton>
                                </NavLink>
                                <ul className="dropdown-menu " aria-labelledby="navbarDropdown">
                                    <li className="px-1"><NavLink className={style.dropdown_item + " dropdown-item my-1 "} to="#">Smart Gadgets</NavLink></li>
                                    <li className="px-1"><NavLink className={style.dropdown_item + " dropdown-item my-1 "} to="#">Home Products</NavLink></li>
                                    <li className="px-1"><NavLink className={style.dropdown_item + " dropdown-item my-1 "} to="#">Fashion Product</NavLink></li>
                                    <li className="px-1"><NavLink className={style.dropdown_item + " dropdown-item my-1 "} to="#">Helath and fitness</NavLink></li>
                                </ul>
                            </li>
                        </ul>
                        <div className={style.form + " d-flex col-lg-4   px-2"}>
                            <input className="col-9 me-2 bg-transparent rounded px-2" type="search" value={search.split(";")[0]} onChange={(e) => setSearch(e.target.value)} list="datalistOptions" placeholder="Search product name" aria-label="Search" />
                            <datalist id="datalistOptions" key="1" className="bg-info">
                                {
                                    product?.map((val,index)=>
                                        <option className="btn "   key={val._id+""+index} value={val.title + "; productId:"+val._id}  />
                                    )
                                }
                            </datalist>
                            
                            <NavLink to={"/view/" + search.split(":")[1]} className={style.showProduct + " btn col-3 rounded text-center"}>Search</NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
