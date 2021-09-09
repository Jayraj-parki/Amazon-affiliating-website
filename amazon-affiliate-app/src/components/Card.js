import React, { useState, useEffect, useContext } from 'react'
import style from "./style/Card.module.scss"
import Button from "@material-ui/core/Button"
import { Context } from "./Product"
import { NavLink } from 'react-router-dom'
export default function Card(props) {

    const [product, setProduct] = useState([{}])
    const { cat, subcat } = useContext(Context)
    const getAllProduct = async () => {
        try {
           
            const result = await fetch(("/allProduct"), {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    subcategory: subcat,
                    category: cat
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
        
    }, [subcat])
    return (
        <>
            {
                product?.map((val, index) =>
                    <>
                        {
                            val?.title?.toLowerCase().includes(props.search.toLowerCase()) ?
                                <div key={val._id + "" + index} className={style.card + " row  card shadow col-12 col-sm-9 col-md-6 mx-auto col-md-6 p-0 px-2"} >
                                    <div className={style.mydiv + " row g-0 p-0"}>
                                        <div className={style.image + " col-6 mx-auto col-md-4 py-2"}>
                                            <a className=" m-auto" href={val.ahref} target="_blank">
                                                <img className=" my-auto" border="0" src={val.srclink} />
                                            </a>
                                            <img src={val.srcid} width="1" height="1" border="0" alt="" />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <p className="card-text">{val.title}</p>
                                                <p className="card-text"><small className="text-muted">Click On Image to Buy Product on Amazon</small></p>
                                                <NavLink to={"/view/" + val._id} className={style.detail + " mx-auto  col-12 p-2 px-3 rounded"}>Show Details</NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                : null
                        }
                    </>
                )
            }
        </>
    )
}
