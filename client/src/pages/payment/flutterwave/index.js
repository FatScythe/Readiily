import { useSearchParams } from "react-router-dom";
// Hook
import useSWR from "swr";
// Utils
import url from "../../../utils/url";
// Componenets
import Transaction from "../TransactionResult";
// Toastify
import { toast } from "react-toastify";

const FlutterwaveVerification = () => {
  const [queryParameters] = useSearchParams();
  const ref = queryParameters.get("transaction_id");
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, isLoading, error } = useSWR(
    url + "/api/v1/payment/flutterwave/verifyPayment/" + ref,
    fetcher
  );

  if (isLoading) return <div>Loading...</div>;
  if ((data && data.msg) || error) return <div>Error...</div>;

  if (data && data.data?.status !== "successful") {
    toast.error(data?.message || "Payment Unsuccessful");
    return <Transaction type='error' />;
  }

  return <Transaction type='success' />;
};

export default FlutterwaveVerification;
