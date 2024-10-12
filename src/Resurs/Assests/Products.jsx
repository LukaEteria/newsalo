import React, { useEffect, useState } from 'react';
import './Products.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-regular-svg-icons';
export default function Products() {
    const [photos, setPhotos] = useState([]);

    // Fetch photos from the JSON file
    useEffect(() => {
        const fetchPhotos = async () => {
            try {
                const response = await fetch('https://newsalooo.onrender.com/api/homesection'); // Make sure this path is correct
                const data = await response.json();
                setPhotos(data);
            } catch (error) {
                console.error('Error fetching photos:', error);
            }
        };

        fetchPhotos();
    }, []);

    const handlePurchase = (productId) => {
        console.log(`Product ${productId} purchased!`);
        // აქ შეგიძლიათ დაამატოთ დამატებითი ლოგიკა პროდუქტის შესყიდვისთვის
    };

    const handleDetails = (productId) => {
        console.log(`Viewing details for product ${productId}`);
        // აქ შეგიძლიათ გადამისამართოთ მომხმარებელი პროდუქტის დეტალების გვერდზე
    };

    return (
        <div className='card-home'>
            <h1>Cost - Quality - Speed</h1>
            <p>Our products are designed to fill every corner of your home with freshness and cleanliness. This effective formula stands out with its powerful cleaning properties.</p>
            <div className="home-itms-card">
                {photos.map(photo => (
                    <div key={photo.id} className="card">
                        <img src={photo.imageUrl} alt={photo.title} />
                        <h3>{photo.title}</h3>
                        
                        <button className='Home-products-button' onClick={() => handleDetails(photo.id)}>
    <FontAwesomeIcon icon={faEye} /> View Details
</button>
                    </div>
                ))}
            </div>
        </div>
    );
}
