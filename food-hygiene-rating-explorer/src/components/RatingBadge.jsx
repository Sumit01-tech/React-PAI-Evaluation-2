function RatingBadge({ rating }) {
    const getBadgeColor = () => {
        if (rating === "AwaitingInspection") return 'bg-gray-400';
        if (rating === "Exempt") return "bg-purple-500";
        const numericRating = parseInt(rating, 10);
        if (numericRating === 5) return 'bg-green-500';
        if (numericRating >= 3) return 'bg-orange-500';
        return 'bg-red-500';
    };
    const displayRating = rating === 'AwaitingInspection' ? 'Awaiting' : rating === 'Exempt' ? 'Exempt' : rating;

    return (
        <span>{displayRating}</span>
    );
}
export default RatingBadge;