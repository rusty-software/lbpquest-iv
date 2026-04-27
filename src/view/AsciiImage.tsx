interface AsciiImageProps {
  imageSrc: string;
  alt: string;
}

const AsciiImage = ({ imageSrc, alt }: AsciiImageProps) => {
  const lines = imageSrc.split("\n").map((line, index) => (
    <div className="imageLine intro" key={index}>
      {line}
    </div>
  ));
  return (
    <div className="image intro" role="figure" aria-label={alt}>
      {lines}
    </div>
  );
};

export default AsciiImage;
