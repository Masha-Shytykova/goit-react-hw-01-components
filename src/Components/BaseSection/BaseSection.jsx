import s from "./BaseSection.module.css";

const BaseSection = ({ title, children }) => {
  return (
    <section>
      <div className={s.container}>
        <h1 className={s.title}>{title}</h1>
        {children}
      </div>
    </section>
  );
};

export default BaseSection;
