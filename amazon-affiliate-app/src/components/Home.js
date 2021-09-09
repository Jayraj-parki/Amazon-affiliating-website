import React from 'react'
import Navbar from "./Navbar"
import Product from "./Product"
import AmazonProduct from "./AmazonProduct"
import Main from "./Main"
import AdsCard from "./AdsCard"
import { NavLink } from 'react-router-dom'
import PopularCard from "./PopularCard"
import RecentUpload from "./RecentUpload"
import RelatedProduct from "./RelatedProduct"
import style from "./style/Home.module.scss"
import { Button, IconButton } from '@material-ui/core'
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import Footer from "./Footer"
import ProductDetails from "./ProductDetails"
import {Helmet} from "react-helmet"
export default function Home() {
    
    const addProduct = async (e) => {
        try {
            const result = await fetch(("/addProduct"), {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                }, 
                body: JSON.stringify({
                   link:"//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=jayrajparki-21&language=en_IN&marketplace=amazon&region=IN&placement=B097YG74YT&asins=B097YG74YT&linkId=c6a7eb0f2f064375356436ba9105d781&show_border=true&link_opens_in_new_window=true"
                })
            })
            const data = await result.json()
            if (result.status !== 201 || !data) {
                window.alert(data.err);
            }
            else {
                alert(data.msg)
            }

        } catch (err) {
            alert("Error in Sending message! please try again Later.")
        }
    } 
    return (
        <>
            <Helmet>
                <title>Home Page</title>
                <meta
                    name="description"
                    content="Get all smart product including Fashion ,heath and fitness, electronics and home gadget"
                />
                <meta
                    name="keywords"
                    content="Electronics product , home gadgets, Fashion product , health and fitness"
                />
            </Helmet>
            <div className={style.navbar + " row col-12 mx-auto p-0 fixed-top"}>
                <Navbar />
            </div>
            <div className={style.main + " row col-12 ms-1 mx-sm-auto p-0  mt-5"}>
                <Main />
            </div>
            <div className={style.content + " row col-12  mx-auto p-0"}>
                <div className={style.proudct + " col-12 col-xl-9 p-0 m-0 mx-auto  p-2"}>
                    <Product />
                    <AdsCard type="horizontal" />
                    <RecentUpload />

                </div>
                <div className={style.aside + " col-12 col-xl-3 p-0  m-0 mx-auto   py-2 "}>
                    <div className={style.deals + " row  mb-2 col-12 mx-auto"}>
                        <Button onClick={() => window.open("https://amzn.to/3kKOLuK", "_blank")} title="Visit amazon.in for today's deals">Today's Deals on Amazon <ArrowRightIcon /></Button>
                    </div>
                    <div id="ads" className={style.ads + " row  rounded col-12 mx-auto my-2"}>
                        <AdsCard type="square" />
                    </div>
                    <div className={style.product + " row  col-12 border mt-3 rounded rounded-2 pb-2 mx-auto"}>
                        <div className="col-12 p-0 ">
                            <h2 className="text-center p-2 col-12 bg-secondary"> Random Product</h2>
                        </div>
                        <div className={style.random + " row col-12 mx-auto p-0 "}>
                            <AmazonProduct />
                        </div>

                    </div>
                    <div id="ads" className={style.ads + " row  rounded col-12 mx-auto my-2"}>
                        <AdsCard type="square" />
                        
                    </div>
                    <div className={style.popular + " row   col-12 border mx-auto pb-3 mt-3 rounded d-flex"}>
                        <div className=" col-12 mx-auto bg-secondary  p-0 d-flex mb-2 ">
                            <h2 className="text-center p-1 col-8 "> Popular Product</h2>
                            <Button onClick={() => window.open("https://amzn.to/3h6Tg1x", "_blank")} className={style.ArrowRightIcon + " text-center ms-auto me-1  p-1 my-0 col-auto  my-auto "}><ArrowRightIcon className={style.icon} /></Button>
                        </div>
                        <div className={style.popular_product + " row col-12  mx-auto "}>
                            <PopularCard />
                        </div>
                    </div>
                    <div id="ads" className={style.ads + " row  rounded col-12 mx-auto my-2"}>
                        <AdsCard type="square" />
                        <AdsCard type="long" />
                    </div>
                </div>

            </div>
            <div className={style.footer + " row col-12 mx-auto p-0 pt-2  mt-5"}>
                <Footer />
            </div>


        </>
    )
}
