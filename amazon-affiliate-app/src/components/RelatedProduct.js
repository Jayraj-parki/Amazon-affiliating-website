import React, { useEffect, useState } from 'react'
import PopularCard from "./PopularCard"
import style from "./style/RecentUpload.module.scss"
import Button from "@material-ui/core/Button"
import RelatedCard from "./RelatedCard"
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import { IconButton } from '@material-ui/core'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
export default function RelatedProduct(props) {
    const [search, setSearch] = useState("")
    const [show, setShow] = useState(false)

    return (
        <>
            <div className={style.product_container + " row col-12  p-2 mx-auto my-4"}>
                <div className={style.heading + " row mx-auto col-12  p-2 px-3 mt-2"}>
                    <h1 className=" my-auto  text-center col-auto m-0 p-1 px-3 rounded">Related Product <ArrowRightIcon/></h1>
                    <Button onClick={() => window.open(props.link, "_blank")} className="col-auto ms-auto  px-3 pb-1">See More Product On Amazon<ArrowRightIcon className="m-0" /></Button>
                </div>
                <IconButton onClick={()=>document.getElementById("related_products").scrollBy({
                    left: -500,behavior:"smooth"
                })} className="col-auto my-auto  p-2 ">
                    <ArrowBackIosIcon />
                </IconButton>
                <div id="related_products" className={style.product + "   col-11 d-flex mx-center  p-2 px-3 "}>
                    <RelatedCard />
                    
                </div>


                <IconButton onClick={()=>document.getElementById("related_products").scrollBy({
                    left: 500,behavior:"smooth"
                })} className="col-auto my-auto  p-2">
                    <ArrowForwardIosIcon />
                </IconButton>

            </div>
        </>
    )
}
