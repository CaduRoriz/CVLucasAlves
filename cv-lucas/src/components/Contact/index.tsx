import styles from "./styles.module.scss";
import React, { useState } from "react";
import Lottie from "react-lottie";
import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";

import * as animationData from "./animation.json";

import * as yup from "yup";

type Form = {
  name: string;
  email: string;
  message: string;
};

const schema = yup.object({
  name: yup.string().required(),
  email: yup.string().email().required(),
  message: yup.string().required(),
});

export function Contact() {
  const [loading, setLoading] = useState(false);
  const [animationState, setAnimationState] = useState({
    isStopped: false,
    isPaused: false,
  });

  const [messageSpan, setMessageSpan] = useState("");

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Form>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: Form) => {
    setLoading(true);

    const name = data.name;

    const email = data.email;

    const message = data.message;

    fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    })
      .then((response) => {
        console.log(response);
        reset();
        setMessageSpan("Email successfuly sent!");
        setTimeout(() => {
          setMessageSpan("");
        }, 3000);

        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        reset();
        setMessageSpan("We had a trouble, please try again later");
        setTimeout(() => {
          setMessageSpan("");
        }, 3000);

        setLoading(false);
      });
  };

  return (
    <div className={styles.contactWraper}>
      <div className={styles.title}>
        <img src="completo.jpg" />
        <h1>
          {" "}
          Contact me<strong>, feel free to call or write anytime</strong>
        </h1>
      </div>
      <div id="contact" className={styles.formBody}>
        <div className={styles.info}>
          <div className={styles.phone}>
            <span>My Phone</span>
            <p>+1 (346) 775-0038</p>
          </div>

          <div className={styles.email}>
            <span>Contact Me Via Mail</span>
            <p>lucasalvesdelima@gmail.com</p>
          </div>

          <div className={styles.website}>
            <span>Social Media</span>
            <a
              href="https://www.linkedin.com/in/lucas-alves-de-lima-a960b0a5/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <img src="linkedin.jpeg" />{" "}
            </a>
          </div>

          <div className={styles.media}></div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          id="form"
          className={styles.forms}
        >
          <div className={`${styles.input} ${styles.formName}`}>
            <label>Name</label>
            <input id="name" type="text" {...register("name")} />

            <span>{errors.name?.message}</span>
          </div>

          <div className={`${styles.input} ${styles.formEmail}`}>
            <label>Email address</label>
            <input id="email" {...register("email")} />

            <span>{errors.email?.message}</span>
          </div>

          <div className={`${styles.input} ${styles.formMessage}`}>
            <label>Message</label>
            <textarea id="message" {...register("message")} />
            <span>{errors.message?.message}</span>
          </div>

          <button type="submit">
            {loading ? (
              <Lottie
                options={defaultOptions}
                height={50}
                width={50}
                isStopped={animationState.isStopped}
                isPaused={animationState.isPaused}
              />
            ) : (
              <>
                Send Message
                <img src="send.png" />
              </>
            )}
          </button>

          <span
            className={styles.resultMessage}
            style={{
              opacity: messageSpan === "" ? 0 : 1,
            }}
          >
            {messageSpan}
          </span>
        </form>
      </div>
    </div>
  );
}
