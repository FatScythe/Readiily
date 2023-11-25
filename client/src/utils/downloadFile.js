const downloadFile = (url) => {
  fetch(url)
    .then((response) => response.blob())
    .then((blob) => {
      const blobURL = window.URL.createObjectURL(new Blob([blob]));
      const fileName = url.split("/").pop();
      const aTag = document.createElement("a");
      aTag.hrfef = blobURL;
      aTag.setAttribute("download", fileName);
      document.body.appendChild(aTag);
      aTag.click();
      aTag.remove();
    });
};

const downloadCloudinary = (url) => {
  let urlArray = url.split("/");

  const upload = (element) => element === "upload";
  const uploadIndex = urlArray.findIndex(upload);

  urlArray.splice(uploadIndex + 1, 0, "fl_attachment");

  return urlArray.join("/");
};

export { downloadFile, downloadCloudinary };
