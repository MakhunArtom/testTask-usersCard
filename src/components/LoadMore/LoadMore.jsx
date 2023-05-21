import { BtnLoadMore } from "./LoadMore.styled";

export const LoadMore = ({ handelPageChang }) => {
  return (
    <BtnLoadMore type="button" onClick={handelPageChang}>
      Load More
    </BtnLoadMore>
  );
};
