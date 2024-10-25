import PropTypes from 'prop-types';

const Banner = ({ incrementCoins }) => {
  return (
    <section className="hero min-h-64 bg-base-200 text-center">
      <div className="hero-content">
        <div>
          <h2 className="text-4xl font-bold">Build Your Dream Team</h2>
          <p className="text-lg mt-2">Click below to get more coins and buy your players!</p>
          <button onClick={incrementCoins} className="btn btn-primary mt-4">
            Add Coins
          </button>
        </div>
      </div>
    </section>
  );
};

Banner.propTypes = {
  incrementCoins: PropTypes.func.isRequired,
};

export default Banner;
