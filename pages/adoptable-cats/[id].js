import styled from "styled-components";

import PawsLogo from "components/elements/PawsLogo";
import GenderIndicator from "components/elements/GenderIndicator";
import RatingBlock from "components/compounds/RatingBlock";
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
  const {
    profileImageUrl,
    name,
    age,
    residencyYears,
    gender,
    ratings,
  } = postData;

  return (
    <S.CatProfile>
      <PawsLogo className="CatProfile__PawsLogo"></PawsLogo>

      <main className="CatProfile__main">
        <section className="CatProfile__left-area">
          <div className="CatProfile__profilePicture-wrapper">
            <img
              src={profileImageUrl}
              alt={name}
              className="CatProfle__profilePicture"
            />
          </div>
        </section>

        <article className="CatProfile__right-area">
          <h1 className="CatProfile__heading">
            <span className="CatProfile__headingAdopt">Adopt</span>
            <br />
            <span className="CatProfile__headingName">{name}</span>
          </h1>

          <div className="CatProfile__detail-wrapper">
            <GenderIndicator
              gender={gender}
              className="CatProfile__GenderIndicator"
              withLabel
            ></GenderIndicator>

            <span>
              Approx.{" "}
              <strong>
                {age} year{age > 1 && "s"} old
              </strong>{" "}
              (Shelter resident for{" "}
              <strong>
                {residencyYears} year{age > 1 && "s"}
              </strong>
              )
            </span>
          </div>

          <ul className="CatProfile__RatingBlock-group">
            {ratings.map((rating, i) => (
              <RatingBlock as="li" data={rating} key={i}></RatingBlock>
            ))}
          </ul>
        </article>
      </main>
    </S.CatProfile>
  );
};

const S = {};

S.CatProfile = styled.div`
  position: relative;

  .CatProfile__PawsLogo {
    position: absolute;
    top: ${(p) => p.theme.size[32]};
    left: ${(p) => p.theme.size[48]};
  }

  .CatProfile__main {
    margin-left: ${(p) => p.theme.size.pixel(384)};
    margin-right: ${(p) => p.theme.size.pixel(384)};
    padding-top: ${(p) => p.theme.size[96]};
    display: flex;
  }

  .CatProfile__left-area {
    margin-right: ${(p) => p.theme.size[64]};
  }

  .CatProfile__profilePicture-wrapper {
    height: ${(p) => p.theme.size.pixel(384)};
    width: ${(p) => p.theme.size.pixel(384)};
    border-radius: 1000px;
    overflow: hidden;
  }

  .CatProfle__profilePicture {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  .CatProfile__heading {
    margin-bottom: ${(p) => p.theme.size[32]};
  }

  .CatProfile__headingAdopt {
    font-size: 2rem;
    color: ${(p) => p.theme.color.primary.main};
  }

  .CatProfile__headingName {
    font-size: 6rem;
    line-height: 100%;
    font-family: ${(p) => p.theme.font.serif};
    color: ${(p) => p.theme.color.primary.dark};
  }

  .CatProfile__GenderIndicator {
    margin-right: ${(p) => p.theme.size[32]};
  }

  .CatProfile__detail-wrapper {
    display: flex;
    align-items: center;
    margin-bottom: ${(p) => p.theme.size[32]};
  }

  .CatProfile__RatingBlock-group {
    > *:not(:last-child) {
      margin-bottom: ${(p) => p.theme.size[24]};
    }
  }
`;

export default CatProfile;
