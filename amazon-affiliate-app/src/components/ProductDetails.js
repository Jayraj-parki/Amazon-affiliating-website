import style from "./style/ProductDetals.module.scss"
import React, { useEffect, useState } from 'react'
import PopularCard from "./PopularCard"
import Button from "@material-ui/core/Button"
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import AdsCard from "./AdsCard"
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import { useParams } from "react-router-dom"

export default function ProductDetails(props) {
    const { id } = useParams()
    const [product, setProduct] = useState([{}])
    const getProductDetail = async () => {
        try {
            const result = await fetch(("/getProductDetail"), {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    _id: id
                })
            })
            const data = await result.json()
            if (result.status !== 201 || !data) {
                window.alert(data.err);
            }
            else {
                setProduct([...data])
            }

        } catch (err) {
            alert("Error in getting  Prudcts details.")
        }
    }
    useEffect(() => {
        getProductDetail()
    }, [id])
    return (
        <>
            {
                product[0]._id?
                <> 
                    {
                        product?.map((val) =>
                            <div key={val._id} className={style.product_container + " row col-12  p-lg-2 mx-auto my-3"}>
                                <div className={style.heading + " row mx-auto col-12  p-2 px-3 mt-2"}>
                                    <h1 className=" my-auto  text-center col-auto m-0 p-1 px-3 rounded">Category<ChevronRightIcon />{val.subcategory ? val.subcategory : "undefined"}</h1>
                                    <Button  onClick={() => window.open(val.categorylink, "_blank")} className="col-auto ms-auto  px-3 pb-1">See More Product On Amazon<ArrowRightIcon className="m-0" /></Button>
                                </div>
                                <div className={style.body + " row mx-auto col-12   p-3 pb-1 my-4 "}>
                                    <div className={style.image + "  col-8 col-md-12 mx-auto col-lg-4 my-auto "}>
                                        <a className="" href={val.ahref} target="_blank"><img border="0" src={val.srclink} /></a><img src={val.srcid} width="1" height="1" border="0" alt="" />
                                    </div>
                                    <div className={style.price1 + " col-3 col-sm-3 m-0   mx-auto p-0 "}>
                                        <iframe marginWidth="0" marginHeight="0" scrolling="no" frameBorder="0" src={val.pricelink}></iframe>
                                    </div>
                                    <div className=" row  mx-auto col-sm-12  col-lg-8 px-lg-2 px-0  py-0">
                                        <div className={style.short_Desc + " col-sm-9 my-3 "}>
                                            <h2 className="col-12"> {val.title}</h2>
                                            <Button onClick={() => window.open(val?.buylink + ""
                                                , "_blank")} className=" col-8 col-sm-6 my-3 me-auto">Buy Now<ArrowRightIcon className={style.icon + " m-0 "} /></Button>
                                            <Button onClick={() => window.open(val?.buylink + ""
                                                , "_blank")} className={style.more + " col-12 col-xl-12 col-xxl-9 me-auto rounded"}>See more Details on Amazon <OpenInNewIcon className="mx-2" /></Button>
                                        </div>
                                        <div className={style.price2 + " col-5 col-sm-3 m-0  ms-sm-auto mx-auto p-0 ps-md-3"}>
                                            <iframe marginWidth="0" marginHeight="0" scrolling="no" frameBorder="0" src={val.pricelink}></iframe>
                                        </div>

                                    </div>
                                    <hr />
                                    <div className="row mx-auto col-lg-9 col-xl-8 ">
                                        <ul className="px-3 col-12">About this item<ArrowRightIcon className="my-2" />
                                            {
                                                val?.about?.map((data) =>
                                                    <li key={data._id}>
                                                        {data.p}
                                                    </li>
                                                )

                                            }
                                        </ul>
                                        <Button onClick={() => window.open(val?.buylink + ""
                                            , "_blank")} className={style.buyDown + " col-sm-8 p-2 px-4 m-3 mx-auto "}>Buy Now <ShoppingCartIcon className={style.icon + " mx-2"} /></Button>
                                    </div>
                                    <div className="col-lg-3 col-xl-4  p-0 ">
                                        <div className={style.square + " col-12 col-sm-6 col-md-5 col-lg-12 mx-auto  m-lg-0"}>
                                            <script type="text/javascript" language="javascript">
                                                var aax_size='300x600';
                                                var aax_pubname = 'jayrajparki-21';
                                                var aax_src='302';
                                            </script>
                                            <script type="text/javascript" language="javascript" src="http://c.amazon-adsystem.com/aax2/assoc.js"></script>
                                            <iframe src="//c.amazon-adsystem.com/aax2/assoc_lra.html?tag=jayrajparki-21&amp;c=100&amp;src=302&amp;sz=300x600" width="300" height="600" scrolling="no" border="0" marginWidth="0" frameBorder="0"></iframe>

                                        </div>
                                    </div>
                                </div>


                            </div>

                        )
                    }
                </>
                :
                <h1 className="col-12 text-center"> Opps! No Data Available</h1>
                
            }
        </>
    )
}
