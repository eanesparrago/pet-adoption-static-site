import styled from "styled-components";

import PawsLogo from "components/elements/PawsLogo";
import PillButton from "components/elements/PillButton";
import TextButton from "components/elements/TextButton";
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
    contentHtml,
    galleryImageUrls,
  } = postData;

  return (
    <S.CatProfile>
      <PawsLogo className="CatProfile__PawsLogo"></PawsLogo>

      <main className="CatProfile__main">
        <section className="CatProfile__left-areaWrapper">
          <div className="CatProfile__left-area">
            <div className="CatProfile__profilePicture-wrapper">
              <img
                src={profileImageUrl}
                alt={name}
                className="CatProfle__profilePicture"
              />
            </div>
          </div>
        </section>

        <article className="CatProfile__right-area">
          <div className="CatProfile__detail-block">
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
          </div>

          <ProfileStory data={contentHtml}></ProfileStory>

          {galleryImageUrls.length > 0 && (
            <div className="CatProfile__gallery-group">
              {galleryImageUrls.map((galleryImageUrl, i) => (
                <div className="CatProfile__galleryImage-wrapper1">
                  <div className="CatProfile__galleryImage-wrapper2">
                    <img
                      className="CatProfile__galleryImage"
                      src={galleryImageUrl}
                      alt={name}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="CatProfile__cta-block">
            <h3>Interested in adopting {name}?</h3>

            <p>
              All our adoptable animals are victims of cruelty or neglect, so we
              screen all applicants to ensure that they go to the right homes.
              If you think you can provide a loving home for this animal, let’s
              get the process moving!
            </p>

            <PillButton className="CatProfile__ctaAdoptButton">
              Adopt {name}
            </PillButton>

            <h3 className="CatProfile__ctaSponsorHeading">
              Want to sponsor {name}?
            </h3>

            <p>
              If you can’t adopt but would like to help this shelter animal,
              then you can be a sponsor! All proceeds go to their food,
              medication, and everyday needs. Many lives have been saved by
              small donations. Please keep supporting them!
            </p>

            <PillButton className="CatProfile__ctaSponsorButton">
              Donate
            </PillButton>
          </div>

          <TextButton as="a">See other adoptable cats</TextButton>
        </article>
      </main>
    </S.CatProfile>
  );
};

const StyledProfileStory = styled.div`
  padding-bottom: ${(p) => p.theme.size[32]};

  & > h2 {
    line-height: 100%;
    font-size: 3.875rem;
    color: ${(p) => p.theme.color.primary.main};
    margin-bottom: ${(p) => p.theme.size[32]};
    font-family: ${(p) => p.theme.font.serif};
  }

  & > p {
    font-size: 1.1875rem;
    line-height: 200%;
    color: ${(p) => p.theme.color.grey[800]};
    margin-bottom: ${(p) => p.theme.size[32]};
  }

  & > h3 {
    line-height: 100%;
    font-size: 2rem;
    color: ${(p) => p.theme.color.primary.main};
    padding-top: ${(p) => p.theme.size[32]};
    margin-bottom: ${(p) => p.theme.size[24]};
    font-family: ${(p) => p.theme.font.serif};
  }
`;

const ProfileStory = ({ data }) => {
  return <StyledProfileStory dangerouslySetInnerHTML={{ __html: data }} />;
};

const S = {};

S.CatProfile = styled.div`
  position: relative;

  .CatProfile__PawsLogo {
    position: fixed;
    top: ${(p) => p.theme.size[32]};
    left: ${(p) => p.theme.size[48]};
  }

  .CatProfile__main {
    margin-left: ${(p) => p.theme.size.pixel(384)};
    margin-right: ${(p) => p.theme.size.pixel(384)};
    padding-top: ${(p) => p.theme.size[96]};
    display: flex;
  }

  .CatProfile__left-areaWrapper {
    width: ${(p) => p.theme.size.pixel(384)};
    margin-left: ${(p) => p.theme.size.pixel(384)};
  }

  .CatProfile__left-area {
    position: fixed;
    left: ${(p) => p.theme.size.pixel(384)};
    width: ${(p) => p.theme.size.pixel(384)};
  }

  .CatProfile__right-area {
    padding-bottom: ${(p) => p.theme.size[96]};
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

  .CatProfile__detail-block {
    padding-bottom: ${(p) => p.theme.size[64]};
    border-bottom: 1px solid ${(p) => p.theme.color.grey[500]};
    margin-bottom: ${(p) => p.theme.size[48]};
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

  .CatProfile__gallery-group {
    display: flex;
    flex-flow: row wrap;
    padding-bottom: ${(p) => p.theme.size[64]};
    border-bottom: 1px solid ${(p) => p.theme.color.grey[500]};
    margin-bottom: ${(p) => p.theme.size[48]};
  }

  .CatProfile__galleryImage-wrapper1 {
    width: 33%;
  }

  .CatProfile__galleryImage-wrapper2 {
    width: 100%;
    padding-top: 100%;
    position: relative;
    border: 4px solid ${(p) => p.theme.color.white};
  }

  .CatProfile__galleryImage {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }

  .CatProfile__cta-block {
    padding-bottom: ${(p) => p.theme.size[64]};
    border-bottom: 1px solid ${(p) => p.theme.color.grey[500]};
    margin-bottom: ${(p) => p.theme.size[48]};

    h3 {
      line-height: 100%;
      font-size: 2rem;
      color: ${(p) => p.theme.color.primary.main};
      margin-bottom: ${(p) => p.theme.size[24]};
      font-family: ${(p) => p.theme.font.serif};
    }

    p {
      font-size: 1.1875rem;
      line-height: 200%;
      color: ${(p) => p.theme.color.grey[800]};
      margin-bottom: ${(p) => p.theme.size[32]};
    }

    .CatProfile__ctaAdoptButton {
      margin-bottom: ${(p) => p.theme.size[64]};
    }

    .CatProfile__ctaSponsorHeading {
      color: ${(p) => p.theme.color.secondary.main};
    }

    .CatProfile__ctaSponsorButton {
      background-color: ${(p) => p.theme.color.secondary.main};
      border: 2px solid ${(p) => p.theme.color.secondary.main};
    }
  }
`;

export default CatProfile;
