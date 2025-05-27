import React from 'react'
import RatingBadge from './RatingBadge'
import { useDispatch, useSelector } from 'react-redux'


function BusinessDetails({ premise }) {
    const dispatch = useDispatch();
    const { items: bookmarkedPremises } = useSelector((state) => state.bookmarks);
    const isBookmarked = bookmarkedPremises.some(b => b.fhrsId === premise.FHRSID);
    const handleBookmark = () => {
        dispatch(addBookmark(premise));
    };
    return (
        <div>
            <div>
                <div>
                    <h1>{premise.BusinessDetails}</h1>
                    <RatingBadge rating={premise.RatingValue} />
                </div>
                <div>
                    <div>
                        <h2>Address</h2>
                        <p>{premise.AddressLine1}<br />
                            {premise.AddressLine2 && <>{premise.AddressLine2}<br /></>}
                            {premise.AddressLine3 && <>{premise.AddressLine3}<br /></>}
                            {premise.PostCode}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BusinessDetails;
