const mongoose = require('mongoose')
const ProductSchema = new mongoose.Schema(
    {

        ahref: {
            type: String,
            trim: true,
            required: true,

        },
        srclink: {
            type: String,
            trim: true,
            required: true,

        },
        srcid: {
            type: String,
            required: true,
            trim: true,
        },
        title: {
            type: String,
            required: true,
            trim: true,
        },
        category: {
            type: String,
            required: true,
            trim: true,
        },
        subcategory: {
            type: String,
            required: true,
            trim: true,
        },
        pricelink: {
            type: String,
            required: true,
            trim: true,
        },
        buylink: {
            type: String,
            required: true,
            trim: true,
        },
        categorylink: {
            type: String,
            required: true,
            trim: true,
        },
        clicks: {
            type: Number,
            required: true,
            trim: true,
        },
 
        about: [
            {
                p: {
                    type: String,
                    required: true,
                    trim: true,
                }
            }
        ]
        ,
        
    }
)


const Product = new mongoose.model('Product', ProductSchema)

module.exports = Product

/*
<a href="https://www.amazon.in/OnePlus-Nord-Charcoal-128GB-Storage/dp/B09576CYNP?dchild=1&pf_rd_i=1389401031&pf_rd_m=A1VBAL9TL5WCBF&pf_rd_p=4d156279-d266-4f8f-be60-4b8a181e89d3&pf_rd_r=XAPWGEGF510KV738XYXT&pf_rd_s=merchandised-search-3&qid=1630950925&refinements=p_89%3AOnePlus&rnid=3837712031&s=electronics&sr=1-1&linkCode=li2&tag=jayrajparki-21&linkId=0c34544f7e37a186dfa6ad479c9483a1&language=en_IN&ref_=as_li_ss_il" target="_blank">


<img border="0" src="//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B09576CYNP&Format=_SL160_&ID=AsinImage&MarketPlace=IN&ServiceVersion=20070822&WS=1&tag=jayrajparki-21&language=en_IN" ></a>

<img src="https://ir-in.amazon-adsystem.com/e/ir?t=jayrajparki-21&language=en_IN&l=li2&o=31&a=B09576CYNP" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />

<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=jayrajparki-21&language=en_IN&marketplace=amazon&region=IN&placement=B09576CYNP&asins=B09576CYNP&linkId=a19696e894bd1063d3f062dbea738b72&show_border=true&link_opens_in_new_window=true"></iframe>

*/