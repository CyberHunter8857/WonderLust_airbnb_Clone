const express = require("express");
const app = express()
const mongoose = require("mongoose");
const path = require("path");
const Listing = require("./models/listing.js");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const wrapAsync = require("./utils/wrapAsync.js");
const ExpressError = require("./utils/ExpressError.js");
const { listingSchema } = require("./schema.js");


const MONGO_URL = "mongodb://127.0.0.1:27017/wonderlust"

main().then(()=>{
    console.log("Connected to Database.");
}).catch(err =>{
    console.log(err);});

async function main() {
    await mongoose.connect(MONGO_URL);
}

app.set("view engine","ejs");
app.set("views", path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname,"/public")));

app.get("/", (req,res)=>{
    res.send("Hi im root....");
});

const validateListing = (req,res,next)=>{
    let {error} = listingSchema.validate(req.body);
    if(error){
        let errMsg = error.details.map((el)=> el.message).join(",");
        throw new ExpressError(400,errMsg);
    }else{
        next();
    }
    
}

//Index Routing
app.get("/listings",wrapAsync( async (req,res)=>{
   const allListings = await Listing.find({});
   res.render("listings/index.ejs", {allListings});
}));

//New Route
app.get("/listings/new", (req,res)=>{
    res.render("listings/new.ejs");
});

//Show route
app.get("/listings/:id", wrapAsync( async (req,res)=>{
    let {id} = req.params;
    const listing = await Listing.findById(id);
    console.log(listing);
    res.render("listings/show.ejs", {listing} );
}));

//Create Route
app.post("/listings", validateListing, wrapAsync( async (req,res,next)=>{
    let result = listingSchema.validate(req.body);
    console.log(result);
    if(result.error){
        throw new ExpressError(400, result.error)
    }
    const newListing = new Listing(req.body.listing);
    await newListing.save();
    res.redirect("/listings");
}));

//Edit Route
app.get("/listings/:id/edit", wrapAsync( async (req,res)=>{
    let {id} = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/edit.ejs",{listing});
}));

//update Route
app.put("/listings/:id", validateListing,wrapAsync( async (req,res)=>{
    let {id} = req.params;
    await Listing.findByIdAndUpdate(id,{...req.body.listing});
    res.redirect(`/listings/${id}`);
}));

//Delete Route
app.delete("/listings/:id", wrapAsync( async (req,res)=>{
    let {id} = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    res.redirect("/listings");
}));

// app.get("/testListing", async(req,res)=>{
//     let samppleListing = new Listing({
//         title:"My Home",
//         description: "by the beach",
//         price: 12000,
//         location: "Shevgaon",
//         country: "India"
//     }); 

//     await samppleListing.save();
//     console.log ("ssample was saved");
//     res.send("successfull");
// })

app.all("/*splat",(req,res,next)=>{
    next(new ExpressError(404,"Page Not Found!"));
});

app.use((err,req,res,next)=>{
    let{statusCode = 500, message="Something Went Wrong!"} = err;
    // res.status(statusCode).send(message);
    res.status(statusCode).render("error.ejs", {message});
})

app.listen(8080,()=>{
    console.log("Listening oon on 8080");
});