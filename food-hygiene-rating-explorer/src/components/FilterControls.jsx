function FilterControls({ onRatingFilter, onLocalAuthorityFilter }) {
    const ratings = ['S', '4', '3', '2', '1', '0', 'Awaiting', 'Exempt'];
    return (
        <div>
            <div>
                <label>Rating</label>
                <select onChange={(e) => onRatingFilter(e.target.value)}>
                    <option value="">All Ratings</option>
                    {ratings.map((rating) => (
                        <option key={rating} value={rating}>{rating}</option>
                    ))}
                </select>
            </div>
            <div>
                <label>Local Authority</label>
                <input type="text" placeholder="Filter by authority" onChange={(e) => onLocalAuthorityFilter(e.target.value)} />
            </div>
        </div>
    );
}
export default FilterControls;