"use client";
import useQuoteTestMutation from "@/hooks/mutations/useQuoteTestMutation";
import { useState } from "react";

export default function Quote() {
  const [data, setData] = useState([]);
  const {
    mutate: photos,
    isLoading: quoteLoading,
    isSuccess: contactPostIsSuccess,
    isError,
  } = useQuoteTestMutation();

  const handlequoteSend = () => {
    photos(data);
  };
  return (
    <>
      <h1>Multiple file upload</h1>
      <input type="file" multiple onChange={(e) => setData(e.target.files)} />
      <button onClick={handlequoteSend}>Send</button>
    </>
  );
}
