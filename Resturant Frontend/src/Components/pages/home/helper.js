function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

export const getImages = () => {
  const images = importAll(
    require.context("../../../images", false, /\.(png|jpe?g|svg)$/)
  );

  const formattedImages = Object.keys(images).map((element) => {
    return {
      original: images[element]["default"],
      thumbnail: images[element]["default"],
    };
  });
  console.log("formattedImagesformattedImages", formattedImages);
  return formattedImages;
};
