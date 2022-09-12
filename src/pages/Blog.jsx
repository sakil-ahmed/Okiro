import React from "react";
import { StyledBlog } from "./../styles/StyledBlog";
import { Header } from "./../components/header/Header";
import { Item } from "./../components/home/Item";
import { Footer } from "./../components/footer/Footer";
import img from "./../../public/images/photo-1560141343-966cb5212777.jpeg";
import { Subscribe } from "./../components/footer/Subscribe";
import blogimg from "../../public/images/blog-img.jpg";
import blogimg1 from "../../public/images/blog-img1.jpg";

export const Blog = () => {
  return (
    <StyledBlog>
      <Header />
      <div className="container">
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
      </div>
      <Subscribe />
      <Footer />
    </StyledBlog>
  );
};
