export const infiniteScroll = (isLoading, LIMIT, setOffset) => {
  const observeOptions = {
    threshold: 0.6,
  };

  const observeCallback = () => {
    if (isLoading) return;
    setOffset((prev) => prev + LIMIT);
  };

  const observer = new IntersectionObserver(observeCallback, observeOptions);

  return observer;
};
