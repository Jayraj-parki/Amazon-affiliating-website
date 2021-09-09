import React, { useState, useEffect } from 'react'
import style from "./style/PopularCard.module.scss"
import Button from "@material-ui/core/Button"
import { NavLink } from 'react-router-dom'
export default function PopularCard() {
    let p = "HP AlO Ryzen 3 3250U 54.6 cm (21.5-inch) FHD All-in-One Desktop with Alexa Built in (8GB/1TB HDD/Windows 10/MS Office 2019/Wired Keyboard & Mouse), 22-df0444in"
    p.slice(0, 10)
    const ahref = "https://www.amazon.in/HP-21-5-inch-Desktop-Keyboard-22-df0444in/dp/B098BKMSG7?_encoding=UTF8&dchild=1&m=A14CZOWI0VEHLG&pd_rd_r=20b01da3-4494-4076-a181-4d7f7c8294e2&pd_rd_w=NnuhI&pd_rd_wg=0eyW7&pf_rd_p=f690369a-7bb4-48bb-9349-f68a447ef06d&pf_rd_r=YPTJKQRYM6ECKFPSMSS2&qid=1630583726&refinements=p_6%3AA14CZOWI0VEHLG&smid=A14CZOWI0VEHLG&sr=8-1&linkCode=li2&tag=jayrajparki-21&linkId=402ba65fd9237dd96308af31d71239af&language=en_IN&ref_=as_li_ss_il"
    const srcLink = "//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B098BKMSG7&Format=_SL160_&ID=AsinImage&MarketPlace=IN&ServiceVersion=20070822&WS=1&tag=jayrajparki-21&language=en_IN"
    const srcId = "https://ir-in.amazon-adsystem.com/e/ir?t=jayrajparki-21&language=en_IN&l=li2&o=31&a=B098BKMSG7"
    const [product, setProduct] = useState([])
    const popularProduct = async () => {
        try {
            const result = await fetch(("/popularProduct"), {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const data = await result.json()

            if (result.status === 201) {
                setProduct([...data])
            }
        }
        catch (err) {
            console.log("error in getData :" + err)
        }
    }
    useEffect(() => {
        popularProduct()
    }, [])
    return (
        <>
            {
                product?.map((val,index) =>
                    <div key={val._id+""+index} className={style.card + " card shadow col-12 col-sm-6 bg-light col-xl-12 p-0 px-2 "} >
                        <div className={style.mydiv + " row g-0 p-0"}>
                            <div className={style.image + " col-md-4 py-2"}>
                                <a href={val.ahref} target="_blank">
                                    <img border="0" src={val.srclink} />
                                </a>
                                <img src={val.srcid} width="1" height="1" border="0" alt="" />
                                {/* <Button className={style.detail + " mx-auto  col-12"}>Show</Button> */}
                                <NavLink to={"/view/"+val._id} className={style.detail+"  mx-auto  col-12 p-2 px-3 rounded text-center"}>Show</NavLink>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <p className="card-text">{val?.title.slice(0, 120)} ... </p> 
                                </div>
                            </div>
                        </div> 
                    </div>
                )
            }



        </>
    )
}
