

import React, { useState, useEffect } from 'react'
import style from "./style/AmazonProduct.module.scss"
export default function AmazonProduct() {


    const [product, setProduct] = useState([{}])

    const getRandomProduct = async () => {
        try {
            const result = await fetch(("/randomProduct"), {
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
        getRandomProduct()
    }, [])

    return (
        <>

            {product[0]?._id ?
                <>

                    {
                        product?.map((val) =>
                            <iframe key={val._id} className={style.product + " col-xl-5 mx-auto mx-sm-2  mx-xl-auto my-2 rounded py-1 "} marginWidth="0" marginHeight="0" scrolling="no" frameBorder="0" src={val.link}></iframe>
                        )
                    }
                </>
                : <h4 className="my-2">No data Available</h4>
            }
            

        </>
    )
}
