import styled from "styled-components";
import Link from "next/link";
import Head from "next/head";
import { useTrail, animated } from "react-spring";

import Layout from "components/Layout";
import FilterCompound, {
  useFilterCompound,
} from "components/compounds/FilterCompound";
import AnimalCard from "components/compounds/AnimalCard";
import { getSortedPostsData } from "lib/posts";

export async function getStaticProps() {
  const allData = getSortedPostsData("dogs");
  return {
    props: {
      dogs: allData,
    },
  };
}

const filterOptions = [
  { key: "allDogs", text: "All Dogs" },
  { key: "femaleDogs", text: "Female Dogs" },
  { key: "maleDogs", text: "Male Dogs" },
  { key: "specialNeedsDogs", text: "Special Needs Dogs" },
];

const filterDogs = (dogs, activeFilter) => {
  switch (activeFilter) {
    case filterOptions[0].key:
      return dogs;
    case filterOptions[1].key:
      return dogs.filter((cat) => cat.gender === "female");
    case filterOptions[2].key:
      return dogs.filter((cat) => cat.gender === "male");
    case filterOptions[3].key:
      return dogs.filter((cat) => cat.isSpecial === true);
  }
};

const AdoptableDogs = ({ dogs }) => {
  const [activeFilter, handleFilterClick] = useFilterCompound(filterOptions);

  const filteredDogs = filterDogs(dogs, activeFilter);

  const trail = useTrail(filteredDogs.length, {
    from: { transform: "translateY(1rem)", opacity: 0 },
    to: { transform: "translateY(0)", opacity: 1 },
  });

  return (
    <S.Layout>
      <Head>
        <title>Adoptable Dogs | PAWS</title>

        <meta name="description" content="PAWS adoptable dogs" />
      </Head>

      <S.HeadingBlock>
        <h1>Adoptable Dogs</h1>

        <svg viewBox="0 0 49 46" xmlns="http://www.w3.org/2000/svg">
          <path d="M25.4337 19L39.4906 24.0203V44.5C39.4906 44.8979 39.3326 45.2794 39.0513 45.5607C38.77 45.842 38.3884 46 37.9906 46H31.9906C31.5928 46 31.2112 45.842 30.9299 45.5607C30.6486 45.2794 30.4906 44.8979 30.4906 44.5V34H15.4906V44.5C15.4906 44.8979 15.3326 45.2794 15.0513 45.5607C14.77 45.842 14.3884 46 13.9906 46H7.9906C7.59278 46 7.21125 45.842 6.92994 45.5607C6.64864 45.2794 6.4906 44.8979 6.4906 44.5V24.446C3.00685 23.2038 0.490601 19.9056 0.490601 16C0.490601 15.2044 0.806671 14.4413 1.36928 13.8787C1.93189 13.3161 2.69495 13 3.4906 13C4.28625 13 5.04931 13.3161 5.61192 13.8787C6.17453 14.4413 6.4906 15.2044 6.4906 16C6.49209 16.7952 6.80864 17.5574 7.37092 18.1197C7.93321 18.682 8.69541 18.9985 9.4906 19H25.4337ZM48.4906 8.5V11.5C48.4906 13.0913 47.8585 14.6174 46.7332 15.7427C45.608 16.8679 44.0819 17.5 42.4906 17.5H39.4906V20.8356L27.4906 16.5503V2.5C27.4906 1.16406 29.105 0.494681 30.0509 1.43968L32.6084 4H37.6362C38.659 4 39.8628 4.7425 40.3194 5.65844L40.9906 7H46.9906C47.3884 7 47.77 7.15804 48.0513 7.43934C48.3326 7.72065 48.4906 8.10218 48.4906 8.5ZM37.9906 8.5C37.9906 8.20333 37.9026 7.91332 37.7378 7.66665C37.573 7.41997 37.3387 7.22771 37.0646 7.11418C36.7905 7.00065 36.4889 6.97094 36.198 7.02882C35.907 7.0867 35.6397 7.22956 35.4299 7.43934C35.2202 7.64912 35.0773 7.91639 35.0194 8.20737C34.9615 8.49834 34.9913 8.79994 35.1048 9.07403C35.2183 9.34812 35.4106 9.58239 35.6572 9.74721C35.9039 9.91203 36.1939 10 36.4906 10C36.8884 10 37.27 9.84197 37.5513 9.56066C37.8326 9.27936 37.9906 8.89783 37.9906 8.5Z" />
        </svg>
      </S.HeadingBlock>

      <S.FilterCompound
        options={filterOptions}
        activeFilter={activeFilter}
        handleFilterClick={handleFilterClick}
      ></S.FilterCompound>

      <S.AnimalCardGroup>
        {trail.map((props, i) => (
          <animated.div style={props} key={filteredDogs[i].id}>
            <Link
              href="/adoptable-dogs/[slug]"
              as={`/adoptable-dogs/${filteredDogs[i].id}`}
            >
              <a>
                <span
                  style={{
                    position: "absolute",
                    top: "-1000px",
                    left: "-1000px",
                  }}
                >
                  {filteredDogs[i].name}
                </span>
                <AnimalCard data={filteredDogs[i]}></AnimalCard>
              </a>
            </Link>
          </animated.div>
        ))}
      </S.AnimalCardGroup>
    </S.Layout>
  );
};

const S = {};

S.Layout = styled(Layout)``;

S.HeadingBlock = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: ${(p) => p.theme.size[32]};

  @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
    flex-flow: column-reverse nowrap;
  }

  > h1 {
    font-size: 3.875rem;
    font-weight: 300;
    color: ${(p) => p.theme.color.primary.main};
    margin-right: ${(p) => p.theme.size[32]};

    @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
      font-size: 2rem;
      font-weight: 400;
      margin-right: 0;
    }
  }

  > svg {
    fill: ${(p) => p.theme.color.primary.main};
    width: ${(p) => p.theme.size[48]};
    height: ${(p) => p.theme.size[48]};

    @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
      margin-bottom: ${(p) => p.theme.size[8]};
    }
  }
`;

S.FilterCompound = styled(FilterCompound)`
  margin-bottom: calc(${(p) => p.theme.size[96]} - ${(p) => p.theme.size[16]});

  @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
    text-align: center;
  }
`;

S.AnimalCardGroup = styled.section`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin-bottom: ${(p) => p.theme.size[32]};

  @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
    margin-bottom: ${(p) => p.theme.size.pixel(128)};
  }

  > * {
    margin-right: ${(p) => p.theme.size[24]};
    margin-bottom: ${(p) => p.theme.size[64]};

    @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
      margin-right: 0;
      margin-bottom: ${(p) => p.theme.size[32]};
    }
  }
`;

export default AdoptableDogs;
