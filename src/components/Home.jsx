import React from 'react'
import Product from './Product';
import "./styling/home.css"

function Home() {
    return (
        <div className="home">
            <img
            className="home__image"
            src="https://cdn.shopify.com/s/files/1/1161/4590/collections/collection_banner_2048x.jpg?v=1588520584" 
            alt="some dogs"
            />

            <div className="home__row">
                <Product
                rating={5}
                id={23} 
                title={"superlong name to test out the flexibility of the card and see what happens to this really really long"} 
                price={300} 
                image={"http://pngimg.com/uploads/dog/dog_PNG153.png"}
                />

                <Product
                rating={5}
                id={22} 
                title={"superlong name to test out the flexibility of the card and see what happens to this really really long"} 
                price={900} 
                image={"https://media.wired.com/photos/5a55457ef41e4c2cd9ee6cb5/master/w_2560%2Cc_limit/Doggo-TopArt-104685145.jpg"}
                />
            </div>

            <div className="home__row">
                <Product
                rating={2}
                id={24} 
                title={"Happy Pupper One"} 
                price={100} 
                image={"http://pngimg.com/uploads/dog/dog_PNG50251.png"}
                />

                <Product
                rating={4}
                id={26} 
                title={"superlong name to test out the flexibility of the card and see what happens to this really really long"} 
                price={800} 
                image={"http://pngimg.com/uploads/dog/dog_PNG50262.png"}
                />
                
                <Product
                rating={3}
                id={27} 
                title={"Happy Pupper One"} 
                price={500} 
                image={"http://pngimg.com/uploads/dog/dog_PNG50256.png"}
                />
            </div>

            <div className="home__row">
                <Product
                rating={5}
                id={28} 
                title={"superlong name to test out the flexibility of the card and see what happens to this really really long"} 
                price={200} 
                image={"http://pngimg.com/uploads/dog/dog_PNG50266.png"}
                />
            </div>
            
        </div>

        // passing product components to home component
    )
}

export default Home;
