import FollowUs from "../FollowUs";
import LoginOption from "../LoginOption";

const RightNavBar = () => {
  return (
    <div>
      <section className="mb-8">
        <LoginOption />
      </section>
      <section className="mb-5">
        <FollowUs />
      </section>
      <section className="mb-5">
        {/* Editors Insight */}
      </section>
      <section className="mb-5">
        {/* Advertisement */}
      </section>
    </div>
  );
};

export default RightNavBar;
