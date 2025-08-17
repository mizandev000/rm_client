"use client";
import { ContactProps } from "@/@types/contactType";
import useContactMutation from "@/hooks/mutations/useContactMutation";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import styles from "../../styles/component/_contact_us.module.scss";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phone: yup
    .string()
    .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits")
    .required("Phone number is required"),
  subject: yup.string().nullable(),
  message: yup.string().required("Message is required"),
});

const ContactForm = () => {
  const [showSuccess, setShowSuccess] = useState(true);

  const {
    mutate: contactUser,
    data: contactPostData,
    isSuccess: contactPostIsSuccess,
    isLoading: contactLoading,
    isIdle,
    isError,
  } = useContactMutation();

  const methods = useForm({
    resolver: yupResolver(schema),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = methods;

  const onSubmit: SubmitHandler<ContactProps> = async (data: ContactProps) => {
    contactUser(
      { contactInfo: data },
      {
        onSuccess: () => {
          reset();
        },
      }
    );
  };

  // ✅ Hide success message after 3 seconds
  useEffect(() => {
    if (contactPostIsSuccess) {
      const timer = setTimeout(() => {
        setShowSuccess(false);
      }, 3000);

      return () => clearTimeout(timer); // cleanup
    }
  }, [contactPostIsSuccess]);

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.contactForm}>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-6 col-xl-6 col-lg-6">
            <div className={styles.inputItem}>
              <label>Name</label>
              <input {...register("name")} />
              {errors.name && (
                <p className={styles.inputTxError}>{errors.name.message}</p>
              )}
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-xl-6 col-lg-6">
            <div className={styles.inputItem}>
              <label>Email</label>
              <input {...register("email")} />
              {errors.email && (
                <p className={styles.inputTxError}>{errors.email.message}</p>
              )}
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-xl-6 col-lg-6">
            <div className={styles.inputItem}>
              <label>Phone</label>
              <input {...register("phone")} />
              {errors.phone && (
                <p className={styles.inputTxError}>{errors.phone.message}</p>
              )}
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-xl-6 col-lg-6">
            <div className={styles.inputItem}>
              <label>Subject</label>
              <input {...register("subject")} />
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-xl-6 col-lg-6"></div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-xl-12 col-lg-12">
            <div className={styles.inputItem}>
              <label>Message</label>
              <textarea {...register("message")} />
              {errors.message && (
                <p className={styles.inputTxError}>{errors.message.message}</p>
              )}
            </div>
          </div>

          {/* <button type="submit" className={styles.submitBtn}>
            Submit
          </button> */}
          <button
            type="submit"
            className={styles.submitBtn}
            disabled={contactLoading}
          >
            {contactLoading ? "Sending..." : "Submit"}
          </button>

          {showSuccess && contactPostIsSuccess && (
            <div className="col-12">
              <p className={styles.successMessage}>
                Thank you! Your message has been sent.
              </p>
            </div>
          )}

          {isError && (
            <div className="col-12">
              <p className={styles.errorMessage}>
                ❌ Oops! Something went wrong. Please try again.
              </p>
            </div>
          )}
        </div>
      </form>
    </FormProvider>
  );
};

export default ContactForm;
