import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import BusinessCard from "../components/BusinessCard";

function PremisesDetails() {
    const { id } = useParams();
    const { data } = useSelector((state) => state.premises);
    const premise = data.find(p => p.FHRSID === id);

    if (!premise) {
        return <div>Premises not found</div>
    }
    return (
        <div>
            <BusinessDetails premise={premises} />
        </div>
    )
}
export default PremisesDetails;