import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";

const RatingCard = () => {
  return (
    <div className="font-primary">
      <div className="flex gap-3">
        <img
          className="w-[50px] h-[50px] rounded-full object-cover"
          src="https://images.pexels.com/photos/4420634/pexels-photo-4420634.jpeg?_gl=1*afsca0*_ga*MTUyNDUyOTE4MC4xNzMzMjI3MTM0*_ga_8JE65Q40S6*czE3NDk5MTA3MTAkbzI2JGcxJHQxNzQ5OTEwODI1JGoxMyRsMCRoMA.."
          alt=""
        />
        <div className="">
          <p className="font-bold text-xl">Sara M.</p>
          <p className="text-[#637887]">2023-4-25</p>
        </div>
      </div>

      <div className="my-2">
        <div className="rating">
          <div className="mask mask-star" aria-label="1 star"></div>
          <div className="mask mask-star" aria-label="2 star"></div>
          <div
            className="mask mask-star"
            aria-label="3 star"
            aria-current="true"
          ></div>
          <div className="mask mask-star" aria-label="4 star"></div>
          <div className="mask mask-star" aria-label="5 star"></div>
        </div>
      </div>


      <div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia rem aperiam explicabo recusandae alias quidem nihil voluptatum aut iusto repellat. Veritatis eos quidem, obcaecati similique est aliquid minus ratione itaque!</p></div>


      <div className="flex gap-x-4 my-3">
        <div className="flex gap-x-2">
            <BiLike className="text-xl cursor-pointer"/> <p>12</p>
        </div>
        <div className="flex gap-x-2">
            <BiDislike className="text-xl cursor-pointer" /> <p>1</p>
        </div>
        </div>
    </div>
  );
};

export default RatingCard;
