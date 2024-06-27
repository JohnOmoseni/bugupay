import AnimatedCounter from "@/components/anims/AnimatedCounter";
import { stats } from "@/constants";

const Stats = () => {
  return (
    <div className="relative grid place-items-center">
      <ul className="flex-column sm:row-flex-btwn gap-4 rounded-lg px-4 py-6 max-sm:!items-center sm:!flex-wrap">
        {stats?.map((stat, idx) => (
          <li
            key={idx}
            className="flex-column relative !items-center gap-4 rounded-md border border-input px-12 py-12 max-sm:w-full max-sm:min-w-[300px] max-sm:border max-sm:shadow-lg sm:px-8 md:px-[4.5rem]"
          >
            <h3 className="font-mono text-2xl">
              {stat?.tag.includes("Estimated value") ? (
                <span>
                  <AnimatedCounter
                    from={stat?.from ?? 0}
                    to={stat.stat}
                    showDecimal
                  />
                  x
                </span>
              ) : (
                <span>
                  <AnimatedCounter from={0} to={stat.stat} />
                  k+
                </span>
              )}
            </h3>
            {/* <h3 className="text-white text-2xl">{stat.stat}</h3> */}
            <p className="text-center text-sm">{stat.tag}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Stats;
