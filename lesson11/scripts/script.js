
let daynames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday",
"Friday", "Saturday"];
let months = ["January", "Febuary", "March", "April", "May", "June",
"July", "August", "September", "October", "Novermber", "December"];
let d = new Date();
let dayName = daynames[d.getDay()];
let monthName = months[d.getMonth()];
let fulldate = dayName + "," + monthName + " " + d.getDate() + "," + d.getFullYear();

document.getElementById("currentdate"), textContent = fulldate;

try {
    let options = {
        weekday: "long", 
        day: "muemeric",
        month: "long",
        year: "numeric"
    }
    document.getElementById(
        "currentdate2"
        ).textContent = new Date().toLocaleDateString("en-US", Option);
     } catch (e) {
        alert("error with code or your broweswer does not support locale");
     };


     // directory page //
     let directory =   
             [
              {
                "company": "The International Chamber of Commerce (ICC)",
                "address": " Toronto Canada ",
                "website": "https://iccwbo.org/",
                "imageurl": "https://images.pexels.com/photos/4386442/pexels-photo-4386442.jpeg?auto=compress&cs=tinysrgb&w=600"  
              },
              {
                "company": " East African Business Council (EABC)",
                "address": " Nairobi Kenya ",
                "website": "https://eabc-online.com/",
                "imageurl": "https://www.acbf-pact.org/sites/default/files/styles/mobile/public/eabc.jpg?itok=46OCBk44"  
              },
              {
              "company": " Common Market for Eastern and Southern Africa (COMESA)",
                "address": " Kampala Uganda",
                "website": "https://www.comesa.int/",
                "imageurl": "https://www.flickr.com/photos/colalife/8546877901/in/photolist-e2fZ2P-aWKmNP"  
              },

              {
                "company": " Uganda Investment Authority (UIA)",
                "address": " Kampala Uganda",
                "website": "https://www.ugandainvest.go.ug/",
                "imageur1":"https://media.istockphoto.com/id/1328507962/photo/digital-background-with-moving-glowing-particles-futuristic-hi-tech-illustration-concept-of.jpg?b=1&s=170667a&w=0&k=20&c=uls-KlsHZ3fTNEQBznANnYIOE1zmBGubnu4ZVHyw3fQ="

                },
              {
                "company": "Capital Market Athority",
                "address": " Entebbe Uganda",
                "website": "https://cmauganda.co.ug/",
                "imageurl": "https://www.shutterstock.com/image-photo/stock-market-trading-graph-candlestick-chart-1242766135"  
              },
              {
                "company": " MTN Uganda (MTN)",
                "address": " Kololo Kampala Uganda",
                "website": "https://www.mtn.co.ug/",
                "imageurl": "https://www.shutterstock.com/image-photo/konskie-poland-november-03-2018-mtn-1220171749"  
              },
              {
                "company": " New Vision Uganda",
                "address": " Nakawa Uganda Uganda",
                "website": "https://www.newvision.co.ug/",
                "imageurl":"https://media.istockphoto.com/id/1219980553/photo/online-news-on-a-smartphone-and-laptop-woman-reading-news-or-articles-in-a-mobile-phone.jpg?b=1&s=612x612&w=0&k=20&c=6lR1CyHtjy33r4EC9IZZQnC-o1xGw3F70qmRoiaSESg="

              },
              {
                "company": "Kampala City Council (KCCA)",
                "address": " Kampala Uganda",
                "website": "https://www.kcca.go.ug/",
                "imageurl": "https://media.istockphoto.com/id/1343982899/photo/small-flags-of-uganda-on-a-blurry-background-of-the-city.jpg?b=1&s=612x612&w=0&k=20&c=VEHtPnm5l7mPm35LjIlu4Fzjqr46TqVF-exj-N8bdIA="  
              },
              {
                "company": " Trademark East Africa",
                "address": " Nkasero Kampala Uganda",
                "website": "https://www.trademarkea.com/",
                "imageurl":"https://images.pexels.com/photos/50987/money-card-business-credit-card-50987.jpeg?auto=compress&cs=tinysrgb&w=600"  
              },
            ]
            console.log(JASON.parse(directory))
