import { useDispatch } from 'react-redux';


function BusinessCard({ premise, isBookmarked }) {
    const dispatch = useDispatch();
    const handleBookmark = (e) => {
        e.preventDefault();
        e.stopPropagation();
        dispatch(addBookmark(premise));
    };
    return (
        <div>
            <div>
                <h3>
                    {premise.BusinessName}
                </h3>
                <RatingBadge rating={premise.RatingValue} />
            </div>
            <p>{premise.AddressLine1}, {premise.PostCode}</p>
            <p>{premise.LocalAuthorityName}</p>
            <div>
                <span>Rated: {premise.RatingDate}</span>
                <button onClick={handleBookmark} disabled={isBookmarked}>{isBookmarked ? "Bookmarked" : "Bookmark"}</button>
            </div>
        </div>
    );
}
export default BusinessCard;