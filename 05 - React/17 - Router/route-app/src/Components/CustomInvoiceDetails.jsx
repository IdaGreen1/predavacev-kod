import { useParams } from "react-router-dom";

export default function CustomInvoiceDetailes() {
    
    const { invoiceID } = useParams();

    return (
        <div>
            <h1>Custom Invoice Details</h1>
            <h2>Invoice #{invoiceID} Details</h2>
        </div>
    );
}