import styled from "styled-components";
import { getAllPostIds, getPostData } from "lib/posts";

export async function getStaticPaths() {
  const paths = getAllPostIds("cats");
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData("cats", params.id);
  return {
    props: {
      postData,
    },
  };
}

const CatProfile = ({ postData }) => {
  console.log(postData);

  return <S.CatProfile>Cat</S.CatProfile>;
};

const S = {};

S.CatProfile = styled.div``;

export default CatProfile;
