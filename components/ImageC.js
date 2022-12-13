import Image from "next/image";

export const ImageC = ({ img, link }) => {
  return (
    <div className="basis-1/3 flex-1 ">
      <a href={link} target="_blank" rel="noreferrer">
        <Image
          className="rounded-lg object-cover cursor-pointer"
          width={"100%"}
          height={"100%"}
          layout="responsive"
          src={img}
          alt="image"
        />
      </a>
    </div>
  );
};
