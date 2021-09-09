import React, { useState, useEffect } from 'react'
import style from "./style/AdsCard.module.scss"
export default function AdsCard(props) {
    let size = window.innerWidth
    return (
        <>
            {
                props.type === "horizontal" ?
                    <>
                        {

                            size >= 768 ?
                                <div className={style.horizontal + " row my-2  col-lg-12 col-md-11  ps-lg-auto ms-lg-auto mx-auto"}>
                                    <script type="text/javascript" language="javascript">
                                        var aax_size='728x90';
                                        var aax_pubname = 'jayrajparki-21';
                                        var aax_src='302';
                                    </script>
                                    <script type="text/javascript" language="javascript" src="http://c.amazon-adsystem.com/aax2/assoc.js"></script>
                                    <iframe className="col-lg-10 mx-auto" src="//c.amazon-adsystem.com/aax2/assoc_lra.html?tag=jayrajparki-21&amp;c=100&amp;src=302&amp;sz=728x90" width="728" height="90" scrolling="no" border="0" marginWidth="0" frameBorder="0"></iframe>
                                </div>
                                :
                                <>
                                    <div className={style.square + "  my-2 col-4 p-2  mx-lg-center "}>

                                        <script type="text/javascript" language="javascript">
                                            var aax_size='300x250';
                                            var aax_pubname = 'jayrajparki-21';
                                            var aax_src='302';
                                        </script>
                                        <script type="text/javascript" language="javascript" src="http://c.amazon-adsystem.com/aax2/assoc.js"></script>
                                        <iframe src="//c.amazon-adsystem.com/aax2/assoc_lra.html?tag=jayrajparki-21&amp;c=100&amp;src=302&amp;sz=300x250" width="300" height="250" scrolling="no" border="0" marginWidth="0" frameBorder="0"></iframe>

                                    </div>
                                    <div className={style.square + "  my-2 col-4 p-2 mx-lg-center "}>

                                        <script type="text/javascript" language="javascript">
                                            var aax_size='300x250';
                                            var aax_pubname = 'jayrajparki-21';
                                            var aax_src='302';
                                        </script>
                                        <script type="text/javascript" language="javascript" src="http://c.amazon-adsystem.com/aax2/assoc.js"></script>
                                        <iframe src="//c.amazon-adsystem.com/aax2/assoc_lra.html?tag=jayrajparki-21&amp;c=100&amp;src=302&amp;sz=300x250" width="300" height="250" scrolling="no" border="0" marginWidth="0" frameBorder="0"></iframe>

                                    </div>
                                    <div className={style.square + "  my-2 col-11 mx-auto col-sm-4 p-2  mx-lg-center"}>

                                        <script type="text/javascript" language="javascript">
                                            var aax_size='300x250';
                                            var aax_pubname = 'jayrajparki-21';
                                            var aax_src='302';
                                        </script>
                                        <script type="text/javascript" language="javascript" src="http://c.amazon-adsystem.com/aax2/assoc.js"></script>
                                        <iframe src="//c.amazon-adsystem.com/aax2/assoc_lra.html?tag=jayrajparki-21&amp;c=100&amp;src=302&amp;sz=300x250" width="300" height="250" scrolling="no" border="0" marginWidth="0" frameBorder="0"></iframe>

                                    </div>
                                </>

                        }
                    </>
                    :
                    props.type === "square" ?

                        <>
                            {
                                size >= 1200 ?
                                    <div className={style.square + " row my-2 col-12 p-2  mx-auto  me-auto  "}>

                                        <script type="text/javascript" language="javascript">
                                            var aax_size='300x250';
                                            var aax_pubname = 'jayrajparki-21';
                                            var aax_src='302';
                                        </script>
                                        <script type="text/javascript" language="javascript" src="http://c.amazon-adsystem.com/aax2/assoc.js"></script>
                                        <iframe src="//c.amazon-adsystem.com/aax2/assoc_lra.html?tag=jayrajparki-21&amp;c=100&amp;src=302&amp;sz=300x250" width="300" height="250" scrolling="no" border="0" marginWidth="0" frameBorder="0"></iframe>

                                    </div>
                                    :
                                    <>
                                        <div className={style.square + "  my-2 col-4 p-2  mx-lg-center "}>

                                            <script type="text/javascript" language="javascript">
                                                var aax_size='300x250';
                                                var aax_pubname = 'jayrajparki-21';
                                                var aax_src='302';
                                            </script>
                                            <script type="text/javascript" language="javascript" src="http://c.amazon-adsystem.com/aax2/assoc.js"></script>
                                            <iframe src="//c.amazon-adsystem.com/aax2/assoc_lra.html?tag=jayrajparki-21&amp;c=100&amp;src=302&amp;sz=300x250" width="300" height="250" scrolling="no" border="0" marginWidth="0" frameBorder="0"></iframe>

                                        </div>
                                        <div className={style.square + "  my-2 col-4 p-2 mx-lg-center "}>

                                            <script type="text/javascript" language="javascript">
                                                var aax_size='300x250';
                                                var aax_pubname = 'jayrajparki-21';
                                                var aax_src='302';
                                            </script>
                                            <script type="text/javascript" language="javascript" src="http://c.amazon-adsystem.com/aax2/assoc.js"></script>
                                            <iframe src="//c.amazon-adsystem.com/aax2/assoc_lra.html?tag=jayrajparki-21&amp;c=100&amp;src=302&amp;sz=300x250" width="300" height="250" scrolling="no" border="0" marginWidth="0" frameBorder="0"></iframe>

                                        </div>
                                        <div className={style.square + "  my-2 col-11 mx-auto col-sm-4 p-2  mx-lg-center"}>

                                            <script type="text/javascript" language="javascript">
                                                var aax_size='300x250';
                                                var aax_pubname = 'jayrajparki-21';
                                                var aax_src='302';
                                            </script>
                                            <script type="text/javascript" language="javascript" src="http://c.amazon-adsystem.com/aax2/assoc.js"></script>
                                            <iframe src="//c.amazon-adsystem.com/aax2/assoc_lra.html?tag=jayrajparki-21&amp;c=100&amp;src=302&amp;sz=300x250" width="300" height="250" scrolling="no" border="0" marginWidth="0" frameBorder="0"></iframe>

                                        </div>
                                    </>
                            }
                        </>
                        :
                        <>
                            {
                                size >= 1200 ?
                                    <div className={style.square + "  my-2 col-12   mx-auto  "}>
                                        <script type="text/javascript" language="javascript">
                                            var aax_size='300x600';
                                            var aax_pubname = 'jayrajparki-21';
                                            var aax_src='302';
                                        </script>
                                        <script type="text/javascript" language="javascript" src="http://c.amazon-adsystem.com/aax2/assoc.js"></script>
                                        <iframe src="//c.amazon-adsystem.com/aax2/assoc_lra.html?tag=jayrajparki-21&amp;c=100&amp;src=302&amp;sz=300x600" width="300" height="600" scrolling="no" border="0" marginWidth="0" frameBorder="0"></iframe>

                                    </div>
                                    :
                                    <>
                                        <div className={style.square + "  my-2 col-6 col-md-4   mx-auto  "}>
                                            <script type="text/javascript" language="javascript">
                                                var aax_size='300x600';
                                                var aax_pubname = 'jayrajparki-21';
                                                var aax_src='302';
                                            </script>
                                            <script type="text/javascript" language="javascript" src="http://c.amazon-adsystem.com/aax2/assoc.js"></script>
                                            <iframe src="//c.amazon-adsystem.com/aax2/assoc_lra.html?tag=jayrajparki-21&amp;c=100&amp;src=302&amp;sz=300x600" width="300" height="600" scrolling="no" border="0" marginWidth="0" frameBorder="0"></iframe>

                                        </div>
                                        <div className={style.square + "  my-2 col-6 col-md-4  mx-auto  "}>
                                            <script type="text/javascript" language="javascript">
                                                var aax_size='300x600';
                                                var aax_pubname = 'jayrajparki-21';
                                                var aax_src='302';
                                            </script>
                                            <script type="text/javascript" language="javascript" src="http://c.amazon-adsystem.com/aax2/assoc.js"></script>
                                            <iframe src="//c.amazon-adsystem.com/aax2/assoc_lra.html?tag=jayrajparki-21&amp;c=100&amp;src=302&amp;sz=300x600" width="300" height="600" scrolling="no" border="0" marginWidth="0" frameBorder="0"></iframe>

                                        </div>
                                        <div className={style.square + "  my-2 col-11 col-sm-5 col-md-4   mx-auto  "}>
                                            <script type="text/javascript" language="javascript">
                                                var aax_size='300x600';
                                                var aax_pubname = 'jayrajparki-21';
                                                var aax_src='302';
                                            </script>
                                            <script type="text/javascript" language="javascript" src="http://c.amazon-adsystem.com/aax2/assoc.js"></script>
                                            <iframe src="//c.amazon-adsystem.com/aax2/assoc_lra.html?tag=jayrajparki-21&amp;c=100&amp;src=302&amp;sz=300x600" width="300" height="600" scrolling="no" border="0" marginWidth="0" frameBorder="0"></iframe>

                                        </div>
                                    </>
                            }
                        </>


            }
        </>
    )
}