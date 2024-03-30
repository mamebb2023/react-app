import TagLine from "./TagLine";

const Heading = ({ className, title, text, tag }) => {
  return (
    <div className={`${className || ""} max-w-[50rem] mx-auto mb-12 lg:mb-20`}>
      {tag && <TagLine className="mb-4 md:justify-center">{tag}</TagLine>}
      {title && <h2 className="h2 md:text-center">{title}</h2>}
      {text && <p className="body mt-4 text-n-4">{text}</p>}
    </div>
  );
};

export default Heading;
