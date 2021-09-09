import React,{useState} from 'react'
import style from "./style/Footer.module.scss"
import { Button } from '@material-ui/core'
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import { NavLink } from 'react-router-dom';
import YouTubeIcon from '@material-ui/icons/YouTube';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import IconButton from '@material-ui/core/IconButton';
import PolicyIcon from '@material-ui/icons/Policy';
import DescriptionIcon from '@material-ui/icons/Description';
export default function Footer() {
    const [contact,setContact]=useState({
        name:"",
        email:"",
        message:""
    }) 
    const {name,email,message}=contact
    const HandleForm=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setContact({...contact,[name]:value})
    }
    const SaveMessage = async (e) => {
        try {
            const result = await fetch(("/contact"), {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                }, 
                body: JSON.stringify({
                    name,email,message
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
            <div className={style.about + "  m-0 row col-xl-4  "}>
                <h2 className="my-3">About Us<ArrowRightIcon className={style.icon} /></h2>
                <p className="p-1 px-2 m-0">
                    Welcome to smart product, your number one source for all things [Amazon product]. We're dedicated to providing you the very best of [Amazon product], with an emphasis on [Customers].
                </p>
                <p className="p-1 px-2 m-0">    Founded in [2021] by [Smart Tech Gadget], smart product has come a long way from its beginnings in [india]. When [Smart Tech Gadget] first started out, [his] passion for [Health and fitness product, Home Gadget, Fashion Product and Tech Gadget] drove them to start their own business.
                </p>
                <p className="p-1 px-2 m-0">
                    We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.
                </p>
                <p className="p-1 px-2 m-0">
                    By Smart Product...!
                </p>
            </div>
            <div className={style.other + "  m-0 row col-xl-4  "}>
                <h2 className="my-3 col-12  px-0">Other Products<ArrowRightIcon className={style.icon} /></h2>
                <div className="products col-12   p-0">
                    <NavLink className="col-6 mx-auto   " onClick={() => window.open("https://amzn.to/3BGUBUU", "_blank")} to="/">Fresh<OpenInNewIcon className={style.icon + " ms-1"} /></NavLink>
                    <NavLink className="col-6 mx-auto   " onClick={() => window.open("https://amzn.to/3n2SfeS", "_blank")} to="/">Home & kitchen<OpenInNewIcon className={style.icon + " ms-1"} /></NavLink>
                    <NavLink className="col-6 mx-auto   " onClick={() => window.open("https://amzn.to/38Fbxyy", "_blank")} to="/">Room Furniture<OpenInNewIcon className={style.icon + " ms-1"} /></NavLink>
                    <NavLink className="col-6 mx-auto   " onClick={() => window.open("https://amzn.to/3h0Tp6C", "_blank")} to="/">Cooling & Air<OpenInNewIcon className={style.icon + " ms-1"} /></NavLink>
                    <NavLink className="col-6 mx-auto   " onClick={() => window.open("https://amzn.to/3tbWjKZ", "_blank")} to="/">Electronics<OpenInNewIcon className={style.icon + " ms-1"} /></NavLink>
                    <NavLink className="col-6 mx-auto   " onClick={() => window.open("https://amzn.to/3jGIDEo", "_blank")} to="/">Mobile & tools<OpenInNewIcon className={style.icon + " ms-1"} /></NavLink>
                    <NavLink className="col-6 mx-auto   " onClick={() => window.open("https://amzn.to/38H59GW", "_blank")} to="/">Computer & tools<OpenInNewIcon className={style.icon + " ms-1"} /></NavLink>
                    <NavLink className="col-6 mx-auto   " onClick={() => window.open("https://amzn.to/3mZGOV8", "_blank")} to="/">Theater & TV<OpenInNewIcon className={style.icon + " ms-1"} /></NavLink>
                    <NavLink className="col-6 mx-auto   " onClick={() => window.open("https://amzn.to/3tfnyEn", "_blank")} to="/">Skin Care<OpenInNewIcon className={style.icon + " ms-1"} /></NavLink>
                    <NavLink className="col-6 mx-auto   " onClick={() => window.open("https://amzn.to/3kWKx3r", "_blank")} to="/">Beauty Tools <OpenInNewIcon className={style.icon + " ms-1"} /></NavLink>
                    <NavLink className="col-6 mx-auto   " onClick={() => window.open("https://amzn.to/2WLFYks", "_blank")} to="/">Make-up & Nails <OpenInNewIcon className={style.icon + " ms-1"} /></NavLink>
                    <NavLink className="col-6 mx-auto   " onClick={() => window.open("https://amzn.to/3yGv2RJ", "_blank")} to="/">Men's  store <OpenInNewIcon className={style.icon + " ms-1"} /></NavLink>
                    <NavLink className="col-6 mx-auto   " onClick={() => window.open("https://amzn.to/3gXaFcX", "_blank")} to="/">Sports Supplement <OpenInNewIcon className={style.icon + " ms-1"} /></NavLink>
                    <NavLink className="col-6 mx-auto   " onClick={() => window.open("https://amzn.to/3BD26fu", "_blank")} to="/">Kindle Store <OpenInNewIcon className={style.icon + " ms-1"} /></NavLink>
                </div>
                <div className="products col-12  p-0">
                    <NavLink className="col-6 mx-auto  " onClick={() => window.open("https://amzn.to/3h1w7Oe", "_blank")} to="/">One PLus+<OpenInNewIcon className={style.icon + " ms-1"} /></NavLink>
                    <NavLink className="col-6 mx-auto  " onClick={() => window.open("https://amzn.to/38FlNqs", "_blank")} to="/">Redmi<OpenInNewIcon className={style.icon + " ms-1"} /></NavLink>
                    <NavLink className="col-6 mx-auto  " onClick={() => window.open("https://amzn.to/3jFZ9oj", "_blank")} to="/">Samsung<OpenInNewIcon className={style.icon + " ms-1"} /></NavLink>
                    <NavLink className="col-6 mx-auto  " onClick={() => window.open("https://amzn.to/3DOEE0w", "_blank")} to="/">Mi Smartphones<OpenInNewIcon className={style.icon + " ms-1"} /></NavLink>
                    <NavLink className="col-6 mx-auto  " onClick={() => window.open("https://amzn.to/3tbKjZT", "_blank")} to="/">Apple Smartphones<OpenInNewIcon className={style.icon + " ms-1"} /></NavLink>
                    <NavLink className="col-6 mx-auto  " onClick={() => window.open("https://amzn.to/3BUiiJB", "_blank")} to="/">Oppo Smartphones<OpenInNewIcon className={style.icon + " ms-1"} /></NavLink>
                    <NavLink className="col-6 mx-auto  " onClick={() => window.open("https://amzn.to/2WOtKan", "_blank")} to="/">Vivo Smartphones<OpenInNewIcon className={style.icon + " ms-1"} /></NavLink>
                    <NavLink className="col-6 mx-auto  " onClick={() => window.open("https://amzn.to/3zJZlZg", "_blank")} to="/">Realme Mobile<OpenInNewIcon className={style.icon + " ms-1"} /></NavLink>
                    <NavLink className="col-6 mx-auto  " onClick={() => window.open("https://amzn.to/3thZxfN", "_blank")} to="/">Techno Mobile<OpenInNewIcon className={style.icon + " ms-1"} /></NavLink>
                    <NavLink className="col-6 mx-auto  " onClick={() => window.open("https://amzn.to/3zQeW9S", "_blank")} to="/">Laptops<OpenInNewIcon className={style.icon + " ms-1"} /></NavLink>
                    <NavLink className="col-6 mx-auto  " onClick={() => window.open("https://amzn.to/2Yrh9uv", "_blank")} to="/">Macbooks<OpenInNewIcon className={style.icon + " ms-1"} /></NavLink>
                    <NavLink className="col-6 mx-auto  " onClick={() => window.open("https://amzn.to/3zOHoJ2", "_blank")} to="/">Men Cloths<OpenInNewIcon className={style.icon + " ms-1"} /></NavLink>
                    <NavLink className="col-6 mx-auto  " onClick={() => window.open("https://amzn.to/3kSCAMv", "_blank")} to="/">Women Cloths<OpenInNewIcon className={style.icon + " ms-1"} /></NavLink>
                    <NavLink className="col-6 mx-auto  " onClick={() => window.open("https://amzn.to/3tll6fx", "_blank")} to="/">Children Cloths<OpenInNewIcon className={style.icon + " ms-1"} /></NavLink>
                </div>

            </div>

            <form id="contact" className={style.contact + "  m-0 row col-xl-4 "}>
                <h2 className="my-3 px-0">Contact Us<ArrowRightIcon className={style.icon} /></h2>
                <div className={style.input+"  col-sm-6 p-0 px-2 m-0 mb-3"}>
                    <input name="email" value={email} onChange={HandleForm} autoComplete="off" type="email" className="form-control col-12" placeholder="abc@gmail.com" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className={style.input+"  col-sm-6 p-0 px-2 m-0 mb-3"}>
                    <input name="name"  value={name} onChange={HandleForm} autoComplete="off" type="text" className="form-control col-12" placeholder="Full name" id="exampleInputPassword1" />
                </div>
                <div className={style.input+"  col-12 px-2 m-0 mb-4"}>
                    <textarea name="message"  value={message} onChange={HandleForm} autoComplete="off" className="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                </div>
                <Button onClick={() => window.open("https://forms.gle/v2mYhMfKupC94t3o7", "_blank")} className=" col-sm-7 mx-2 my-1 my-sm-auto me-sm-auto">Contact by Google form <OpenInNewIcon className="ms-2" /></Button>
                <Button onClick={SaveMessage} className=" col-sm-4 my-1 my-sm-auto mx-2 ms-sm-auto ">Send Message</Button>
                <ul className="row col-12 mx-auto mt-5 mb-lg-0 ">
                    <li className={style.social_media + " col-auto mx-auto dropdown  p-0 mx-2"}>
                        <NavLink className="nav-link p-0 m-0" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <IconButton className={style.icon_container + " col-auto m-0 p-0"}> <YouTubeIcon className={style.youtube + " col-12 m-2"} /></IconButton>
                        </NavLink>
                        <ul className={style.menu+ " dropdown-menu "} aria-labelledby="navbarDropdown">
                            <li className="px-1"><NavLink className={style.dropdown_item + " dropdown-item my-1 "} to="#">Smart Gadgets</NavLink></li>
                            <li className="px-1"><NavLink className={style.dropdown_item + " dropdown-item my-1 "} to="#">Home Products</NavLink></li>
                            <li className="px-1"><NavLink className={style.dropdown_item + " dropdown-item my-1 "} to="#">Fashion Product</NavLink></li>
                            <li className="px-1"><NavLink className={style.dropdown_item + " dropdown-item my-1 "} to="#">Helath and fitness</NavLink></li>
                        </ul>
                    </li>
                    <li className={style.social_media + " col-auto mx-auto dropdown  p-0 mx-2"}>
                        <NavLink className="nav-link p-0 m-0" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <IconButton className={style.icon_container + " col-auto m-0 p-0"}> <FacebookIcon className={style.youtube + " col-12 m-2"} /></IconButton>
                        </NavLink>
                        <ul className="dropdown-menu " aria-labelledby="navbarDropdown">
                            <li className="px-1"><NavLink className={style.dropdown_item + " dropdown-item my-1 "} to="#">Smart Gadgets</NavLink></li>
                            <li className="px-1"><NavLink className={style.dropdown_item + " dropdown-item my-1 "} to="#">Home Products</NavLink></li>
                            <li className="px-1"><NavLink className={style.dropdown_item + " dropdown-item my-1 "} to="#">Fashion Product</NavLink></li>
                            <li className="px-1"><NavLink className={style.dropdown_item + " dropdown-item my-1 "} to="#">Helath and fitness</NavLink></li>
                        </ul>
                    </li>
                    <li className={style.social_media + " col-auto mx-auto dropdown  p-0 mx-2"}>
                        <NavLink className="nav-link p-0 m-0" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <IconButton className={style.icon_container + " col-auto m-0 p-0"}> <InstagramIcon className={style.youtube + " col-12 m-2"} /></IconButton>
                        </NavLink>
                        <ul className="dropdown-menu " aria-labelledby="navbarDropdown">
                            <li className="px-1"><NavLink className={style.dropdown_item + " dropdown-item my-1 "} to="#">Smart Gadgets</NavLink></li>
                            <li className="px-1"><NavLink className={style.dropdown_item + " dropdown-item my-1 "} to="#">Home Products</NavLink></li>
                            <li className="px-1"><NavLink className={style.dropdown_item + " dropdown-item my-1 "} to="#">Fashion Product</NavLink></li>
                            <li className="px-1"><NavLink className={style.dropdown_item + " dropdown-item my-1 "} to="#">Helath and fitness</NavLink></li>
                        </ul>
                    </li>
                </ul>
                <div className={style.policy+ " row col-12 mx-auto mt-5 p-0"}>
                    <NavLink className={style.links+" col-7 col-sm-6  "} onClick={() => window.open("terms-and-conditions", "_blank")} to="/"><DescriptionIcon className={style.icon + " ms-1 "} />Terms & Conditions</NavLink>
                    <NavLink className={style.links+" col-5 col-sm-5  ms-auto"} onClick={() => window.open("/privacy", "_blank")} to="/">Policy Privacy<PolicyIcon className={style.icon + " ms-1"} /></NavLink>
                    <NavLink className={style.links+" col-sm-6 mx-auto py-2"} onClick={() => window.open("https://amzn.to/2VcqPrk", "_blank")} to="/">Visit Amazon.in<OpenInNewIcon className={style.icon + " ms-1"} /></NavLink>
                </div>
            </form>
            <div className={style.copyright + "  mt-3 row mx-auto col-12 "}>
                <p className=" p-2 m-0 text-center">
                    Created By Smart Product | It's an Affliate Marketing Website.
                </p>
            </div>
        </>
    )
}
