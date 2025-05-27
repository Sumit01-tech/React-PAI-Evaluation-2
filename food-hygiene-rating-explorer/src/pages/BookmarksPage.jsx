import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BusinessCard from "../components/BusinessCard";

function BookmarksPage() {
    const dispatch = useDispatch();
    const { items, status } = useSelector((state) => state.bookmarks);

    useEffect(() => {
        dispatch(fetchBookmarks());
    }, [dispatch])
    if (status === 'loading') return <div>Loading bookmarks...</div>
    return (
        <div>
            <h1>Bookmarked Premises</h1>
            {items.length === 0 ? (
                <div>No bookmarks yet</div>
            ) : (
                <div>{items.map((bookmark) => (
                    <BusinessCard key={bookmark.fhrsId} premise={{
                        FHRSID: bookmark.fhrsId,
                        BusinessName: bookmark.name,
                        AddressLine1: bookmark.address,
                        PostCode: '',
                        RatingValue: bookmark.ratingValue,
                        RatingDate: bookmark.dateRated,
                        LocalAuthorityName: bookmark.localAuthorityName
                    }}
                        isBookmarked={true}
                    />
                ))}
                </div>
            )}
        </div>
    )
}

export default BookmarksPage;