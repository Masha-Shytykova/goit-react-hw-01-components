import s from "./Statistics.module.css";
import PropTypes from "prop-types";

function makeRandomColor() {
  var c = "";
  while (c.length < 6) {
    c += Math.random().toString(16).substr(-6).substr(-1);
  }
  return "#" + c;
}

const statistics = ({ title, stats }) => {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}

      <ul className={s.stat_list}>
        {stats.map((el) => (
          <li
            className={s.item}
            style={{
              backgroundColor: makeRandomColor(),
            }}
            key={el.id}
          >
            <span className={s.label}>{el.label}</span>
            <span className={s.percentage}>{`${el.percentage}%`}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
};

export default statistics;
