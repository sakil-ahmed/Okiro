import React, { useRef } from "react";
import { StyledBlog } from "./../styles/StyledBlog";
import { Header } from "./../components/header/Header";
import { Item } from "./../components/home/Item";
import { Footer } from "./../components/footer/Footer";
import img from "./../../public/images/photo-1560141343-966cb5212777.jpeg";
import { Subscribe } from "./../components/footer/Subscribe";
import blogimg from "../../public/images/blog-img.jpg";
import blogimg1 from "../../public/images/blog-img1.jpg";
import { Link } from "react-router-dom";
import { BsTwitter } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { motion, useScroll } from "framer-motion";

/**
 * It returns the JSX code.
 * @returns The JSX code.
 */
export const Blog = () => {
  /* A function that is used to show a message when the user clicks on the share button. */
  const showMsg = useRef();
  const show = () => {
    showMsg.current.style.opacity = "1";
    setTimeout(() => {
      showMsg.current.style.opacity = "0";
    }, 5000);
  };

  /* Returning the JSX code. */
  const { scrollYProgress } = useScroll();
  return (
    <StyledBlog>
      <Header />
      <div className="container">
        <motion.div
          className="progress-bar"
          style={{ scaleX: scrollYProgress }}
        />
        <Item
          img={img}
          title="I work best when my space is filled with inspiration"
        />
      </div>
      <div className="post-content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat ut
          facilisis rutrum donec tristique mauris est ac nunc. Eget nec, lorem
          mi libero accumsan. Expressa vero in iis aetatibus, quae iam
          confirmatae sunt. Tum Piso: Atqui, Cicero, inquit, ista studia, si ad
          imitandos summos viros spectant, ingeniosorum sunt; Quibus autem in
          rebus tanta obscuratio non fit, fieri tamen potest, ut id ipsum, quod
          interest, non sit magnum. Ita fit ut, quanta differentia est in
          principiis naturalibus, tanta sit in finibus bonorum malorumque
          dissimilitudo. Ut proverbia non nulla veriora sint quam vestra
          dogmata. Ita fit ut, quanta differentia est in principiis naturalibus,
          tanta sit in finibus bonorum malorumque dissimilitudo. Ut proverbia
          non nulla veriora sint quam vestra dogmata. Sed tamen intellego quid
          velit. Non est igitur summum malum dolor. Tu autem inter haec tantam
          multitudinem hominum interiectam non vides nec laetantium nec
          dolentium? Non igitur bene. Reicietur etiam Carneades, nec ulla de
          summo bono ratio aut voluptatis non dolendive particeps aut honestatis
          expers probabitur.
        </p>
        <figure className="kg-card">
          <div className="kg-gallery-container">
            <div className="kg-gallery-row">
              <div className="kg-gallery-image">
                <img src={blogimg} alt="" />
              </div>
              <div className="kg-gallery-image">
                <img src={blogimg1} alt="" />
              </div>
            </div>
          </div>
        </figure>
        <p>
          Sed haec quidem liberius ab eo dicuntur et saepius. Et ille ridens:
          Video, inquit, quid agas; Tum ille timide vel potius verecunde: Facio,
          inquit. An hoc usque quaque, aliter in vita? Unum nescio, quo modo
          possit, si luxuriosus sit, finitas cupiditates habere. Aliter enim
          explicari, quod quaeritur, non potest. Sed haec quidem liberius ab eo
          dicuntur et saepius. Tum Piso: Atqui, Cicero, inquit, ista studia, si
          ad imitandos summos viros spectant, ingeniosorum sunt; Quibus autem in
          rebus tanta obscuratio non fit, fieri tamen potest, ut id ipsum, quod
          interest, non sit magnum.
        </p>
        <blockquote>
          At enim, qua in vita est aliquid mali, ea beata esse non potest.
          Zenonis est, inquam, hoc Stoici. Si dolor summum malum est, non
          potest.
        </blockquote>
        <p>
          Sed tamen intellego quid velit. Non est igitur summum malum dolor. Tu
          autem inter haec tantam multitudinem hominum interiectam non vides nec
          laetantium nec dolentium? Non igitur bene. Reicietur etiam Carneades,
          nec ulla de summo bono ratio aut voluptatis non dolendive particeps
          aut honestatis expers probabitur. Quamquam haec quidem praeposita
          recte et reiecta dicere licebit. Varietates autem iniurasque fortunae
          facile veteres philosophorum praeceptis instituta vita superabat. Post
          enim Chrysippum eum non sane est disputatum. Qui-vere falsone,
          quaerere mittimus-dicitur oculis se privasse; Nunc vero a primo quidem
          mirabiliter occulta natura est nec perspici nec cognosci
          potest.Utilitatis causa amicitia uae quo sunt excel ores, eo dant
          clariora indicia naturae.
        </p>
        <div className="post-share-section">
          <div className="post-share-wrap">
            <a href="https://twitter.com/" target="_blank">
              <BsTwitter />
            </a>
            <a href="https://www.facebook.com/" target="_blank">
              <BsFacebook />
            </a>
            <Link to="" onClick={show}>
              <svg
                role="img"
                viewBox="0 0 33 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M27.3999996,13.4004128 L21.7999996,13.4004128 L21.7999996,19 L18.9999996,19 L18.9999996,13.4004128 L13.3999996,13.4004128 L13.3999996,10.6006192 L18.9999996,10.6006192 L18.9999996,5 L21.7999996,5 L21.7999996,10.6006192 L27.3999996,10.6006192 L27.3999996,13.4004128 Z M12,20.87 C7.101,20.87 3.13,16.898 3.13,12 C3.13,7.102 7.101,3.13 12,3.13 C12.091,3.13 12.181,3.139 12.272,3.142 C9.866,5.336 8.347,8.487 8.347,12 C8.347,15.512 9.866,18.662 12.271,20.857 C12.18,20.859 12.091,20.87 12,20.87 Z M20.347,0 C18.882,0 17.484,0.276 16.186,0.756 C14.882,0.271 13.473,0 12,0 C5.372,0 0,5.373 0,12 C0,18.628 5.372,24 12,24 C13.471,24 14.878,23.726 16.181,23.242 C17.481,23.724 18.88,24 20.347,24 C26.975,24 32.347,18.628 32.347,12 C32.347,5.373 26.975,0 20.347,0 Z"></path>
              </svg>
            </Link>
          </div>
          <small ref={showMsg} className="copy-link">
            The link has been copied!
          </small>
        </div>
      </div>
      <Subscribe />
      <Footer />
    </StyledBlog>
  );
};
