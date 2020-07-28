import styled from "styled-components";
import Link from "next/link";

import PawsLogo from "components/elements/PawsLogo";
import BackButton from "components/elements/BackButton";
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
            <Link href="/adoptable-cats">
              <BackButton className="CatProfile__BackButton"></BackButton>
            </Link>

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

              <span className="CatProfile__age">
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
                <div className="CatProfile__galleryImage-wrapper1" key={i}>
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

          <Link href="/adoptable-cats">
            <TextButton as="a">See other adoptable cats</TextButton>
          </Link>
        </article>
      </main>
    </S.CatProfile>
  );
};

const StyledProfileStory = styled.div`
  padding-bottom: ${(p) => p.theme.size[32]};

  @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
    padding-bottom: ${(p) => p.theme.size[24]};
  }

  & > h2 {
    line-height: 100%;
    font-size: 3.875rem;
    color: ${(p) => p.theme.color.primary.main};
    margin-bottom: ${(p) => p.theme.size[32]};
    font-family: ${(p) => p.theme.font.serif};

    @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
      font-size: 2rem;
      margin-bottom: ${(p) => p.theme.size[24]};
    }
  }

  & > p {
    font-size: 1.1875rem;
    line-height: 200%;
    color: ${(p) => p.theme.color.grey[800]};
    margin-bottom: ${(p) => p.theme.size[32]};

    @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
      font-size: 1rem;
      margin-bottom: ${(p) => p.theme.size[24]};
    }
  }

  & > h3 {
    line-height: 100%;
    font-size: 2rem;
    color: ${(p) => p.theme.color.primary.main};
    padding-top: ${(p) => p.theme.size[32]};
    margin-bottom: ${(p) => p.theme.size[24]};
    font-family: ${(p) => p.theme.font.serif};

    @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
      font-size: 1.5rem;
      padding-top: ${(p) => p.theme.size[24]};
      margin-bottom: ${(p) => p.theme.size[16]};
    }
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

    @media (max-width: ${(p) => p.theme.breakpoint.desktopM}) {
      position: absolute;
      left: unset;
      right: ${(p) => p.theme.size[96]};
    }

    @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
      right: ${(p) => p.theme.size[24]};
      width: ${(p) => p.theme.size[64]};
    }
  }

  .CatProfile__main {
    margin-left: ${(p) => p.theme.size.pixel(384)};
    margin-right: ${(p) => p.theme.size.pixel(384)};
    padding-top: ${(p) => p.theme.size[96]};
    display: flex;

    @media (max-width: ${(p) => p.theme.breakpoint.desktopXL}) {
      margin-right: ${(p) => p.theme.size.pixel(192)};
    }

    @media (max-width: ${(p) => p.theme.breakpoint.desktopL}) {
      margin-left: ${(p) => p.theme.size.pixel(192)};
      margin-right: ${(p) => p.theme.size.pixel(128)};
    }

    @media (max-width: ${(p) => p.theme.breakpoint.desktopM}) {
      margin-left: ${(p) => p.theme.size.pixel(96)};
      margin-right: ${(p) => p.theme.size.pixel(96)};
      flex-flow: column;
    }

    @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
      margin-left: ${(p) => p.theme.size.pixel(24)};
      margin-right: ${(p) => p.theme.size.pixel(24)};
    }
  }

  .CatProfile__left-areaWrapper {
    width: ${(p) => p.theme.size.pixel(384)};
    margin-left: ${(p) => p.theme.size.pixel(384)};

    @media (max-width: ${(p) => p.theme.breakpoint.desktopXL}) {
      width: ${(p) => p.theme.size.pixel(192)};
      margin-left: ${(p) => p.theme.size.pixel(352)};
    }

    @media (max-width: ${(p) => p.theme.breakpoint.desktopM}) {
      width: unset;
      margin: 0 auto;
      margin-bottom: ${(p) => p.theme.size[8]};
    }
  }

  .CatProfile__left-area {
    position: fixed;
    left: ${(p) => p.theme.size.pixel(384)};
    width: ${(p) => p.theme.size.pixel(384)};

    @media (max-width: ${(p) => p.theme.breakpoint.desktopXL}) {
      left: ${(p) => p.theme.size.pixel(320)};
    }

    @media (max-width: ${(p) => p.theme.breakpoint.desktopL}) {
      left: ${(p) => p.theme.size.pixel(272)};
    }

    @media (max-width: ${(p) => p.theme.breakpoint.desktopM}) {
      position: static;
      width: unset;
    }
  }

  .CatProfile__BackButton {
    position: absolute;
    left: -${(p) => p.theme.size[64]};
    top: -${(p) => p.theme.size[48]};

    @media (max-width: ${(p) => p.theme.breakpoint.desktopM}) {
      position: fixed;
      left: ${(p) => p.theme.size[96]};
      top: ${(p) => p.theme.size[32]};
    }

    @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
      left: ${(p) => p.theme.size[24]};
    }
  }

  .CatProfile__right-area {
    padding-bottom: ${(p) => p.theme.size[96]};
  }

  .CatProfile__profilePicture-wrapper {
    width: ${(p) => p.theme.size.pixel(384)};
    height: ${(p) => p.theme.size.pixel(384)};
    border-radius: 1000px;
    overflow: hidden;

    @media (max-width: ${(p) => p.theme.breakpoint.desktopXL}) {
      width: ${(p) => p.theme.size.pixel(384)};
      height: ${(p) => p.theme.size.pixel(384)};
    }

    @media (max-width: ${(p) => p.theme.breakpoint.desktopL}) {
      width: ${(p) => p.theme.size.pixel(256)};
      height: ${(p) => p.theme.size.pixel(256)};
    }

    @media (max-width: ${(p) => p.theme.breakpoint.desktopM}) {
      width: ${(p) => p.theme.size.pixel(384)};
      height: ${(p) => p.theme.size.pixel(384)};
    }

    @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
      width: ${(p) => p.theme.size.pixel(256)};
      height: ${(p) => p.theme.size.pixel(256)};
    }
  }

  .CatProfle__profilePicture {
    height: 100%;
    width: 100%;
    object-fit: cover;

    @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
    }
  }

  .CatProfile__detail-block {
    padding-bottom: ${(p) => p.theme.size[64]};
    border-bottom: 1px solid ${(p) => p.theme.color.grey[500]};
    margin-bottom: ${(p) => p.theme.size[48]};

    @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
      padding-bottom: ${(p) => p.theme.size[48]};
      margin-bottom: ${(p) => p.theme.size[32]};
    }
  }

  .CatProfile__age {
    line-height: 150%;

    @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
      font-size: 1rem;
    }
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

    @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
      font-size: 4rem;
    }
  }

  .CatProfile__GenderIndicator {
    margin-right: ${(p) => p.theme.size[32]};

    @media (max-width: ${(p) => p.theme.breakpoint.tabletLandscape}) {
      margin-bottom: ${(p) => p.theme.size[16]};
    }
  }

  .CatProfile__detail-wrapper {
    display: flex;
    align-items: center;
    margin-bottom: ${(p) => p.theme.size[32]};

    @media (max-width: ${(p) => p.theme.breakpoint.tabletLandscape}) {
      flex-flow: column;
      align-items: flex-start;
    }
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

    @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
      padding-bottom: ${(p) => p.theme.size[48]};
      margin-bottom: ${(p) => p.theme.size[32]};
    }
  }

  .CatProfile__galleryImage-wrapper1 {
    width: 33%;

    @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
      width: 50%;
    }
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

    @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
      padding-bottom: ${(p) => p.theme.size[48]};
      margin-bottom: ${(p) => p.theme.size[32]};
    }

    h3 {
      line-height: 120%;
      font-size: 2rem;
      color: ${(p) => p.theme.color.primary.main};
      margin-bottom: ${(p) => p.theme.size[24]};
      font-family: ${(p) => p.theme.font.serif};

      @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
        font-size: 1.5rem;
        margin-bottom: ${(p) => p.theme.size[16]};
      }
    }

    p {
      font-size: 1.1875rem;
      line-height: 200%;
      color: ${(p) => p.theme.color.grey[800]};
      margin-bottom: ${(p) => p.theme.size[32]};

      @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
        font-size: 1rem;
        margin-bottom: ${(p) => p.theme.size[24]};
      }
    }

    .CatProfile__ctaAdoptButton {
      margin-bottom: ${(p) => p.theme.size[64]};

      @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
        margin-bottom: ${(p) => p.theme.size[48]};
      }
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
